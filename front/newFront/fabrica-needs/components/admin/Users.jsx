import { Card, Label, TextInput, Button, ListGroup } from "flowbite-react";

export const CreateUser = () => {
  return (
    <section className="max-w-lg w-full h-full">
      <Card>
        <h5 className="text-2xl  text-gray-900 dark:text-white">
          Crie novos Usuários:
        </h5>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Nome de usuário:" />
          </div>
          <TextInput id="small" type="text" sizing="sm" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Senha:" />
          </div>
          <TextInput id="small" type="password" sizing="sm" />
        </div>
        <Button type="submit">Criar usuário</Button>
      </Card>
    </section>
  );
};

export const ListUsers = () => {
  return (
    <section>
      <Card>
        <h5 className="text-2xl  text-gray-900 dark:text-white">
          Lista de Usuários:
        </h5>
        <div className="max-w-96">
          <ListGroup>
            <ListGroup.Item active={true} href="/list-group">
              joao@dev
              <span className="text-stone-500 ml-7">3</span>
            </ListGroup.Item>
            <ListGroup.Item href="/list-group">
              gabriel@dev <span className="text-stone-500 ml-7">1</span>
            </ListGroup.Item>
            <ListGroup.Item href="/list-group">
              josé@professor <span className="text-stone-500 ml-7">1</span>
            </ListGroup.Item>
            <ListGroup.Item href="/list-group">
              Isaak@escritor <span className="text-stone-500 ml-7">0</span>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Card>
    </section>
  );
};
