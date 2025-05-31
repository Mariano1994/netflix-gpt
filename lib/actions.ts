"use server";

import { prisma } from "./prisma";
import { SignUpFormSchema } from "./types";
import { hashSync } from "bcrypt-ts";

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
      },
    };
  }

  const { data } = validatedFilds;
  const hashedPassword = hashSync(data.password, 10);
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: hashedPassword,
    },
  });

  return user;
  // send data to server
}

export async function signIn(_prevState: any, formData: FormData) {
  const { email, password } = Object.fromEntries(formData);
  console.log(email, password);
}
