import { compareSync } from "bcrypt-ts";
import { prisma } from "./prisma";

type User = {
  email: string;
  name: string;
  password?: string;
};

// GET USER FROM DB BY CREDENTIALS
export async function findUserByCredentials(
  email: string,
  password: string
): Promise<User | null> {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) return null;

  const passwordMatches = compareSync(password, user.password);

  if (passwordMatches) {
    return { email: user.email, name: user.name };
  }

  return null;
}
