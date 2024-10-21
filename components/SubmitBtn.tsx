import { Button } from "@components/ui/button";
import { Loader2 } from "lucide-react";

type SubmitBtnProps = {
  isPending: boolean;
  label: string;
  handleSubmit?: () => void;
};

const SubmitBtn = ({ isPending, label, handleSubmit }: SubmitBtnProps) => {
  return (
    <Button
      type="submit"
      disabled={isPending}
      className="w-full"
      onClick={handleSubmit}
    >
      {isPending ? <Loader2 className="animate-spin" /> : label}
    </Button>
  );
};
export default SubmitBtn;
