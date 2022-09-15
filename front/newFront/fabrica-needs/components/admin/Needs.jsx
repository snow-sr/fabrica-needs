import { Card, Label, TextInput, Button, ListGroup } from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../slices/needsSlice";

export const CreateNeed = ({ activateReload }) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const [need, setNeed] = useState({
    title: "",
    reward: "",
  });

  const registerNeed = async (need) => {
    await dispatch(add(need));
  };

  return (
    <section>
      <Card>
        <h5 className="text-2xl  text-gray-900 dark:text-white">
          Crie novos Needs:
        </h5>
        <form onSubmit={handleSubmit((need) => registerNeed(need))}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Nome da necessidade:" />
            </div>
            <TextInput
              id="small"
              type="text"
              sizing="sm"
              {...register("title")}
              required={true}
            />
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
              required={true}
              helperText={
                <>
                  Lembre-se, 100 "unidades de prioridade" equivalem à{" "}
                  <a className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    1 Bombom
                  </a>
                  !
                </>
              }
              {...register("reward")}
            />
          </div>
          <div className="mt-4">
            <Button type="submit">Criar necessidade</Button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export const ListNeeds = ({ Needs }) => {
  return (
    <div className="my-12">
      <Card>
        <section className="w-96">
          <h5 className="text-2xl mb-5 italic text-gray-900 dark:text-white">
            Lista de needs:
          </h5>
          <div className="w-full">
            <ListGroup>
              {Needs.map((need) => {
                return (
                  <ListGroup.Item
                    key={need.id || need.title}
                    onClick={() => {
                      axios.delete(
                        "http://localhost:8089/api/need/delete/" + need.id
                      );
                    }}
                  >
                    <p className="py-2">{need.title}</p>
                    <span className="text-stone-500 ml-auto mr-0 py-2">
                      {need.reward}
                    </span>
                  </ListGroup.Item>
                );
              })}

              {/* <ListGroup.Item href="/list-group">
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
              </ListGroup.Item> */}
            </ListGroup>
          </div>
        </section>
      </Card>
    </div>
  );
};
