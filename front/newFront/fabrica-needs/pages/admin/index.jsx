import { Card } from "flowbite-react";
import { useState, useEffect } from "react";
import { CreateUser, ListUsers } from "../../components/admin/Users";
import { CreateNeed, ListNeeds } from "../../components/admin/Needs";
import { AdminNavbar } from "../../components/admin/adminNavbar";
import axios from "axios";

function Admin({ Needs }) {
  const [reload, setReload] = useState(false);
  const [needs, setNeeds] = useState([]);

  useEffect(() => {
    setNeeds(Needs);
  });

  const defineReload = async () => {
    setReload(!reload);

    let newNeeds = await (
      await axios.get("http://localhost:8089/api/need")
    ).data;
    setNeeds(newNeeds);
  };

  return (
    <div className="dark">
      <AdminNavbar />
      <div className="min-h-screen max-h-full flex justify-center items-center bg-gray-900">
        <div className="mx-12">
          <Card>
            <div className="m-5">
              <CreateNeed activateReload={defineReload} />
            </div>
            <div className="m-5">
              <ListNeeds Needs={needs} activateReload={defineReload} />
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

Admin.getInitialProps = async () => {
  const { data } = await axios.get("http://localhost:8089/api/need");
  return { Needs: data };
};

export default Admin;
