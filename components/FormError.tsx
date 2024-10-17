import { cn } from "@lib/utils";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
  className?: string;
}

const FormError = ({ message, className }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div
      className={cn(
        "bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive",
        className
      )}
    >
      <ExclamationTriangleIcon className="size-4" />
      <p>{message}</p>
    </div>
  );
};
export default FormError;
