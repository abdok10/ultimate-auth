"use server";

import { getUserById } from "@data/user";
import { currentUser } from "@lib/auth";
import { db } from "@lib/db";
import { SettingsSchema } from "@schemas";
import * as z from "zod";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser();

  if (!user) return { error: "You must be logged in" };

  const dbUser = await getUserById(user.id);

  if (!dbUser) return { error: "User not found" };

  const validatedFields = SettingsSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid fields" };

  // disable updating these fields for users signed in using an OAth Provider
  if (user.isOAth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  await db.user.update({
    where: { email: user.email },
    data: {
      ...values,
    },
  });

  return { success: "Updated successfully" };
};
