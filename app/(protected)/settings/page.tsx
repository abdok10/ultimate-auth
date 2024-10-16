import { auth } from "@auth";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      <h1>SettingsPage</h1>
      {JSON.stringify(session)}
    </div>
  );
};
export default SettingsPage;
