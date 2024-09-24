"use server";

import { z } from "zod";
import { RegisterSchema } from "@schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedField = RegisterSchema.safeParse(values);

  if (!validatedField.success) { 
    return { error: "Invalidated fields!" };
  }

  return { success: "Email sent!"}
};
