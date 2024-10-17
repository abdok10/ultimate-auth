import FormError from "@components/FormError";
import { CardWrapper } from "@components/auth/CardWrapper";

const ErrorCard = () => {
  return (
    <CardWrapper backButtonHref="/auth/login" backButtonLabel="Back to login">
      <FormError
        message="Oops! Something went wrong!"
        className="justify-center"
      />
    </CardWrapper>
  );
};
export default ErrorCard;
