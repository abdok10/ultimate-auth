import { UserRole } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAth?: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
