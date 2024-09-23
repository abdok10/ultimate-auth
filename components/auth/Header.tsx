import { cn } from "@lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <h1 className={cn(poppins.className, "text-3xl font-semibold")}>🔒 Auth</h1>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};
export default Header;
