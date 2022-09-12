import { Navbar } from "flowbite-react";

export const UserNavbar = () => {
  return (
    <Navbar fluid={true} rounded={false}>
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
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/profile">Perfil</Navbar.Link>
        <Navbar.Link href="/support">Suporte</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
