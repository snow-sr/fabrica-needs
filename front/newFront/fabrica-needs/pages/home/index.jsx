import { ListNeeds } from "../../components/admin/Needs";
import { UserNavbar } from "../../components/ui/userNavbar";
import { FooterComponent } from "../../components/ui/footer";
import { ListSolved } from "../../components/ui/solvedNeeds";
import axios from "axios";
import { Alert } from "flowbite-react";

function HomePage({ Needs }) {
  return (
    <main className="dark min-h-screen flex flex-col justify-between">
      <header>
        <UserNavbar />
        <Alert color="info" rounded={false}>
          <span>
            <span className="font-medium">
              Esse sistema está em desenvolvimento!
            </span>{" "}
            Então, cuidado com os bugs que ainda cercam estas linhas de código,
            em caso de Bug, favor comunicar o suporte através do sistema de{" "}
            <span className="font-medium">Bug Bounty</span>.
          </span>
        </Alert>
      </header>
      <div className="flex gap-24 justify-center items-center">
        <div>
          <ListNeeds Needs={Needs} />
        </div>
        <div>
          <ListSolved />
        </div>
      </div>
      <FooterComponent />
    </main>
  );
}

HomePage.getInitialProps = async () => {
  const { data } = await axios.get("http://localhost:8089/api/need");
  return { Needs: data };
};

export default HomePage;
