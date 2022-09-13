import { CardProfile } from "../../../components/ui/cardProfile";
import { UserNavbar } from "../../../components/ui/userNavbar";
import { Card } from "flowbite-react";
export default function Profile() {
  return (
    <div className="dark">
      <UserNavbar />
      <div className="min-h-screen max-h-full flex gap-24 justify-center items-center bg-gray-900">
        <CardProfile />
      </div>
    </div>
  );
}
