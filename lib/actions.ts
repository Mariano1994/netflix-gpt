"use server";

import { signIn, signOut } from "@/auth";
import { hashSync } from "bcrypt-ts";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";
import { SignUpFormSchema } from "./types";

// SIGN UP ACTION
export async function createAccount(_prevState: any, formData: FormData) {
  const { name, email, phone, password } = Object.fromEntries(formData);

  const validatedFilds = SignUpFormSchema.safeParse({
    name,
    email,
    phone,
    password,
  });

  if (!validatedFilds.success) {
    return {
      error: validatedFilds.error.flatten().fieldErrors,
    };
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      email: validatedFilds.data.email,
    },
  });

  if (existingUser) {
    return {
      error: {
        email: "Account with this email already exists",
        name: "",
        phone: "",
        password: "",
      },
    };
  }

  const { data } = validatedFilds;
  const hashedPassword = hashSync(data.password, 10);

  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: hashedPassword,
    },
  });

  redirect("/sign-in");
}

// SIGN IN ACTION
export async function signInUser(_prevState: any, formData: FormData) {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: true,
      callbackUrl: "/browse",
    });
  } catch (error: any) {
    if (isRedirectError(error)) {
      throw error;
    }
    if (error.type === "CredentialsSignin") {
      return {
        message: "E-mail or password is incorrect",
      };
    } else {
      return {
        message: "Ops, samething went wrong",
      };
    }
  }
}

// SIGN OUT ACTION
export async function Logout() {
  console.log("logout");
  await signOut();

  redirect("/sign-in");
}
