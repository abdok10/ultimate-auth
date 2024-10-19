"use client";

import { logout } from "@actions/logout";
import { Button } from "@components/ui/button";
import { useCurrentUser } from "@hooks/useCurrentUser";

const SettingsPage = () => {
  const user = useCurrentUser();

  return (
    <div>
      
    </div>
  );
};
export default SettingsPage;
