import { Footer } from "flowbite-react";

export const FooterComponent = () => {
  return (
    <div className="rounded-none">
      <Footer container={true}>
        <div className="flex justify-around items-center container mx-auto">
          <Footer.Copyright
            href="https://www.linkedin.com/in/jo%C3%A3o-felipi-cardoso-a1710522b/"
            by="João Felipi Cardoso -> @snowsr"
            year={2022}
          />
          <Footer.LinkGroup>
            <Footer.Link href="https://github.com/snow-sr/fabrica-needs/tree/react">
              Github
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </Footer>
    </div>
  );
};
