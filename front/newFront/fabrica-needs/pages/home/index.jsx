import { ListNeeds } from "../../components/admin/Needs";
import { UserNavbar } from "../../components/ui/userNavbar";
import { FooterComponent } from "../../components/ui/footer";
import { ListSolved } from "../../components/ui/solvedNeeds";
import { Alert } from "flowbite-react";

export default function HomePage() {
  return (
    <div className="dark">
      <UserNavbar />
      <Alert color="info" rounded={false}>
        <span>
          <span className="font-medium">
            Esse sistema está em desenvolvimento!
          </span>{" "}
          Então, cuidado com os bugs que ainda cercam estas linhas de código, em
          caso de Bug, favor comunicar o suporte através do sistema de{" "}
          <span className="font-medium">Bug Bounty</span>.
        </span>
      </Alert>
      <div className="min-h-screen max-h-full flex gap-24 justify-center items-center bg-gray-900">
        <div>
          <ListNeeds />
        </div>
        <div>
          <ListSolved />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
