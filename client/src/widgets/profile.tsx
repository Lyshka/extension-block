import { useSessionquery } from "@/entities/session";
import { SignOutButton } from "@/features/auth";

const Profile = () => {
  const { data: session } = useSessionquery();

  if (!session) return null;

  return (
    <div className="flex gap-2 items-center">
      {session?.email}
      <SignOutButton />
    </div>
  );
};
export default Profile;
