import { auth, signOut } from "@auth";
import { Button } from "@components/ui/button";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      <h1>SettingsPage</h1>
      {JSON.stringify(session)}

      <form action={async () =>{
        "use server"
        await signOut()
      }}>

      <Button type="submit">Logout</Button>
      </form>
    </div>
  );
};
export default SettingsPage;
