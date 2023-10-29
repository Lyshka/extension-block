import { ROUTES } from "@/shared/constants/routes";
import UiButton from "@/shared/ui/ui-button";
import UiLink from "@/shared/ui/ui-link";
import UiTextField from "@/shared/ui/ui-text-field";
import { useSignUpForm } from "../model/use-sign-up-form";

const SignUpForm = () => {
  const {handleSubmit, isLoading, register, errorMessage} = useSignUpForm()

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <UiTextField
        inputProps={{ ...register("email", { required: true }), type: "email" }}
        label="Email"
      />
      <UiTextField
        inputProps={{
          ...register("password", { required: true }),
          type: "password",
        }}
        label="Password"
      />
      <UiButton disabled={isLoading}>Sign Up</UiButton>

      <UiLink className="text-center" href={ROUTES.SIGN_IN}>Sign In</UiLink>

      {errorMessage && <p className="text-rose-500">{errorMessage}</p>}
    </form>
  );
};
export default SignUpForm;
