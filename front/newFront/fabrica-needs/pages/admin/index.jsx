import { Card } from "flowbite-react";
import { useState, useEffect } from "react";
import { CreateUser, ListUsers } from "../../components/admin/Users";
import { CreateNeed, ListNeeds } from "../../components/admin/Needs";
import { AdminNavbar } from "../../components/admin/adminNavbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { populate } from "../../slices/needsSlice";

function Admin({ Needs }) {
  const dispatch = useDispatch();
  dispatch(populate(Needs));
  const needsState = useSelector((state) => state.needs.needs.needs);
  console.log(needsState);

  return (
    <div className="dark">
      <AdminNavbar />
      <div className="min-h-screen max-h-full flex justify-center items-center bg-gray-900">
        <div className="mx-12">
          <Card>
            <div className="m-5">
              <CreateNeed />
            </div>
            <div className="m-5">
              <ListNeeds Needs={Needs} />
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
