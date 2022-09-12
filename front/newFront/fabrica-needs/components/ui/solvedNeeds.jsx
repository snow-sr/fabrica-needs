import { Timeline, Button } from "flowbite-react";
import { HiLightningBolt, HiArchive } from "react-icons/hi";

export const ListSolved = () => {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiLightningBolt} />
        <Timeline.Content>
          <Timeline.Time>01/01/2022</Timeline.Time>
          <Timeline.Title>Compra de café por $USER</Timeline.Title>
          <Timeline.Body>
            Não esqueça de ajudar no racha, disponível no botão abaixo.
          </Timeline.Body>
          <Button color="gray">Racha</Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiArchive} />
        <Timeline.Content>
          <Timeline.Time>03/04/2022</Timeline.Time>
          <Timeline.Title>Compra do filtro de café por $USER</Timeline.Title>
          <Timeline.Body>
            O filtro de café foi comprado, e seu racha já foi fechado
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiArchive} />
        <Timeline.Content>
          <Timeline.Time>04/05/2022</Timeline.Time>
          <Timeline.Title>Compra de itens de limpeza por $USER</Timeline.Title>
          <Timeline.Body>
            O racha foi fechado, e os itens de limpeza já foram comprados.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};
