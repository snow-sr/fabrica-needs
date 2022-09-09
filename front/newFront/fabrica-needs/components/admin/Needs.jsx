import { Card, Label, TextInput, Button, ListGroup } from "flowbite-react";

export const CreateNeed = () => {
  return (
    <section>
      <Card>
        <h5 className="text-2xl  text-gray-900 dark:text-white">
          Crie novos Needs:
        </h5>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Nome da necessidade:" />
          </div>
          <TextInput id="small" type="text" sizing="sm" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Recompensa / prioridade:" />
          </div>
          <TextInput
            id="small"
            type="number"
            max={500}
            min={0}
            sizing="sm"
            helperText={
              <>
                Lembre-se, 100 "unidades de prioridade" equivalem à{" "}
                <a className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  1 Bombom
                </a>
                !
              </>
            }
          />
        </div>
        <Button type="submit">Criar necessidade</Button>
      </Card>
    </section>
  );
};

export const ListNeeds = () => {
  return (
    <section>
      <Card>
        <h5 className="text-2xl  text-gray-900 dark:text-white">
          Lista de needs:
        </h5>
        <div className="max-w-96">
          <ListGroup>
            <ListGroup.Item active={true} href="/list-group">
              Café
              <span className="text-stone-500 ml-7">100 UP</span>
            </ListGroup.Item>
            <ListGroup.Item href="/list-group">
              Settings <span className="text-stone-500 ml-7">100 UP</span>
            </ListGroup.Item>
            <ListGroup.Item href="/list-group">
              Really long task{" "}
              <span className="text-stone-500 ml-7">100 UP</span>
            </ListGroup.Item>
            <ListGroup.Item href="/list-group">
              Filtro de café <span className="text-stone-500 ml-7">100 UP</span>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Card>
    </section>
  );
};
