import { Card } from "flowbite-react";
import { CreateUser, ListUsers } from "../../components/admin/Users";
import { CreateNeed, ListNeeds } from "../../components/admin/Needs";

export default function Admin() {
  return (
    <div className="dark">
      <div className="min-h-screen max-h-full flex justify-center items-center bg-gray-900">
        <div className="mx-12">
          <Card>
            <div className="m-5">
              <CreateNeed />
            </div>
            <div className="m-5">
              <ListNeeds />
            </div>
          </Card>
        </div>
        <div className="mx-12">
          <Card>
            <div className="m-5">
              <CreateUser />
            </div>
            <div className="m-5">
              <ListUsers />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
