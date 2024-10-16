import { Button } from "@components/ui/button";
import { Loader2 } from "lucide-react";

type SubmitBtnProps = {
  isPending: boolean;
  label: string;
};

const SubmitBtn = ({ isPending, label }: SubmitBtnProps) => {
  return (
    <Button type="submit" disabled={isPending} className="w-full">
      {isPending ? <Loader2 className="animate-spin" /> : label}
    </Button>
  );
};
export default SubmitBtn;
