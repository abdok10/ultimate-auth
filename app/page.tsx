import { LoginButton } from "@components/auth/LoginButton";
import { Button } from "@components/ui/button";
import { cn } from "@lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center bg-gradient-to-l from-[#946263] to-[#676394]">
      <div className={cn(poppins.className, "space-y-6 text-center")}>
        <h1 className="text-6xl text-white font-somibold drop-shadow-lg">
          🔒 Auth
        </h1>
        <p className="text-lg text-white">A simple authentication service</p>
        <div>
          <LoginButton mode="modal">
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
