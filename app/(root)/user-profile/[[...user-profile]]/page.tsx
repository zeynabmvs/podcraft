import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
  return (
    <div className="mt-9 ">
      <UserProfile path="/user-profile" />
    </div>
  );
};
export default UserProfilePage;
