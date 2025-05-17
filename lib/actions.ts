"use server";

import { formSchema, SignUpFormSchema } from "./types";

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

  // send data to server
  console.log(validatedFilds.data);
}

export async function signIn(_prevState: any, formData: FormData) {
  const { email, password } = Object.fromEntries(formData);
  console.log(email, password);
}
