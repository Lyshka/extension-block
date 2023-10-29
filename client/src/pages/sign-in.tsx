import { SignInForm } from "@/features/auth";
import UiFormPageLayout from "@/features/auth/ui/layouts/ui-form-page-layout";
import UiHeader from "@/shared/ui/ui-header";

const SignInPage = () => {
  return (
    <UiFormPageLayout
      title="Sign In"
      header={<UiHeader />}
      form={<SignInForm />}
    />
  );
};
export default SignInPage;
