import { Card, CardContent, CardHeader } from "@components/ui/card";
import type { ExtendedUser } from "@next-auth";
import { Badge } from "@components/ui/badge";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="">
        <div className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md bg-slate-100">
            {user?.id}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
          <p className="text-sm font-medium">Name</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md bg-slate-100">
            {user?.name}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md bg-slate-100">
            {user?.role}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
          <p className="text-sm font-medium">Two Factor Authentication</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
export default UserInfo;
