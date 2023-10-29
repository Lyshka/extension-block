import UiButton from "@/shared/ui/ui-button";
import { useSignOut } from "../model/use-sign-out";

const SignOutButton = () => {
  
  const { isLoading, signOut } = useSignOut();

  return (
    <UiButton
      disabled={isLoading}
      onClick={() => signOut({})}
      variant="outlined"
    >
      Sign Out
    </UiButton>
  );
};
export default SignOutButton;
