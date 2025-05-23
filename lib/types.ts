import z from "zod";

export const formSchema = z.object({
  name: z.string().trim().min(5, { message: "Name is required" }),
  email: z.string().email(),
  message: z.string().min(1),
});

export const SignUpFormSchema = z.object({
  name: z.string().trim().min(5, { message: "Name is required" }),
  email: z.string().email(),
  phone: z.string().trim().min(5, { message: "Phone number is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 6 characters" }),
});
