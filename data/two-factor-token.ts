import { db } from "@lib/db";

export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    const troFactorToken = await db.twoFactorToken.findUnique({
      where: { token },
    });
    return troFactorToken;
  } catch {
    return null;
  }
};

export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const troFactorToken = await db.twoFactorToken.findFirst({
      where: { email },
    });
    return troFactorToken;
  } catch {
    return null;
  }
};
