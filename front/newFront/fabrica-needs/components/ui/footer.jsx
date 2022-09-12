import { Footer } from "flowbite-react";

export const FooterComponent = () => {
  return (
    <Footer container={true}>
      <Footer.Copyright
        href="#"
        by="João Felipi Cardoso -> @snowsr"
        year={2022}
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">Github</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};
