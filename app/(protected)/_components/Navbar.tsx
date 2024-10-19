"use client";

import UserButton from "@components/auth/UserButton";
import { Button } from "@components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-secondary flex justify-between items-center p-4  rounded-xl w-[600px] shadow">
      <div className="flex gap-2">
        {["client", "server", "admin", "settings"].map((item, index) => (
          <Button
            key={index}
            variant={pathname === `/${item}` ? "default" : "outline"}
          >
            <Link href={`/${item}`} className="capitalize">
              {item}
            </Link>
          </Button>
        ))}
      </div>
      <UserButton />
    </nav>
  );
};
export default Navbar;
