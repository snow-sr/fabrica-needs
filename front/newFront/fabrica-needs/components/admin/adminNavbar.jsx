import { Navbar } from "flowbite-react";

export const AdminNavbar = () => {
  return (
    <Navbar fluid={true} rounded={false}>
      <Navbar.Brand href="">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Fábrica Needs
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Dashboard
        </Navbar.Link>
        <Navbar.Link href="/navbars">HomePage</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
