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
    <div className="my-12">
      <Card>
        <section className="w-96">
          <h5 className="text-2xl mb-5 italic text-gray-900 dark:text-white">
            Lista de needs:
          </h5>
          <div className="w-full">
            <ListGroup>
              <ListGroup.Item href="/list-group">
                <p className="py-2">Café</p>
                <span className="text-stone-500 ml-auto mr-0 py-2">100 UP</span>
              </ListGroup.Item>
              <ListGroup.Item href="/list-group">
                <p className="py-2">Filtro de Café</p>
                <span className="text-stone-500 ml-auto mr-0 py-2">100 UP</span>
              </ListGroup.Item>
              <ListGroup.Item href="/list-group">
                <p className="py-2">Produto de limpeza</p>
                <span className="text-stone-500 ml-auto mr-0 py-2">100 UP</span>
              </ListGroup.Item>
              <ListGroup.Item href="/list-group">
                <p className="py-2">Sapinho do css</p>
                <span className="text-stone-500 ml-auto mr-0 py-2">100 UP</span>
              </ListGroup.Item>
              <ListGroup.Item href="/list-group">
                <p className="py-2">Gatinho</p>
                <span className="text-stone-500 ml-auto mr-0 py-2">100 UP</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </section>
      </Card>
    </div>
  );
};
