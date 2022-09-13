import { Navbar } from "flowbite-react";

export const UserNavbar = () => {
  return (
    <Navbar fluid={true} rounded={false}>
      <div className="flex justify-around items-center container mx-auto">
        <div className="">
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6  sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Fábrica Needs
            </span>
          </Navbar.Brand>
        </div>

        <div>
          <Navbar.Toggle />
        </div>
        <div>
          <Navbar.Collapse>
            <Navbar.Link href="/home">Home</Navbar.Link>
            <Navbar.Link href="/home/profile">Perfil</Navbar.Link>
            <Navbar.Link href="/support">Suporte</Navbar.Link>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};
