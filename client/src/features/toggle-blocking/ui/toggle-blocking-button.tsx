import UiButton from "@/shared/ui/ui-button";
import { useToggleBlocking } from "../model/use-toggle-blocking";

const ToggleBlockingButton = () => {
  const { isBlockingEnabled, isLoading, isReady, toggleBlocking } =
    useToggleBlocking();

  if (!isReady) {
    return null;
  }

  return (
    <UiButton
      disabled={isLoading}
      onClick={toggleBlocking}
      variant={!isBlockingEnabled ? "primary" : "secondary"}
    >
      {isBlockingEnabled ? "Disable blocking" : "Enable blocking"}
    </UiButton>
  );
};
export default ToggleBlockingButton;
