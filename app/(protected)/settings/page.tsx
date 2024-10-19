"use client";

import { Button } from "@components/ui/button";
import { useCurrentUser } from "@hooks/useCurrentUser";
import { signOut } from "next-auth/react"

const SettingsPage = () => {
  const user = useCurrentUser();

  console.log(user);

  return (
    <div>
      <h1>SettingsPage</h1>
      {JSON.stringify(user)}

      <Button type="submit" onClick={() => { signOut()}}>
        Sign out
      </Button>
    </div>
  );
};
export default SettingsPage;
