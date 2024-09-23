"use server";

import { LoginSchema } from "@schemas";
import { z } from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedField = LoginSchema.safeParse(values);

  if (!validatedField.success) { 
    // return { error: validatedField.error.errors[0].message };
    return { error: "Invalidated fields!" };
  }

  return { success: "Email sent!"}
};
