import { SignUpForm } from "@/features/auth";
import UiFormPageLayout from "@/features/auth/ui/layouts/ui-form-page-layout";
import UiHeader from "@/shared/ui/ui-header";

const SignUpPage = () => {
  return (
    <UiFormPageLayout
      title="Sign Up"
      header={<UiHeader />}
      form={<SignUpForm />}
    />
  );
};
export default SignUpPage;
