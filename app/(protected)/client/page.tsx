"use client";

import { useCurrentUser } from "@hooks/useCurrentUser";

const ClientPage = () => {
  const user = useCurrentUser();

  return <div>Client Page</div>;
};
export default ClientPage;
