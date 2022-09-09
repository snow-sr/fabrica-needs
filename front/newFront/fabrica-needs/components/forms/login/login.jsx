import { Button, Modal } from "flowbite-react";

import { useState, useEffect } from "react";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const onCLick = () => {
    setIsModalOpen(true);
  };
  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          🎉 Fábrica Needs 🎉
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Faça Login na sua conta{" "}
              <span className="underline italic text-blue-500">Fábrica</span>
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Seu username
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="dácio@dev"
                  required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sua senha
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Manter sessão ativa?
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Entrar
              </button>
              <p
                className="text-sm font-light text-gray-500 dark:text-gray-400"
                onClick={() => onCLick()}
              >
                Esqueceu sua senha?
              </p>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Não tem uma conta?{" "}
              </p>
            </form>
          </div>
        </div>
      </div>

      {isLoading ? (
        <Modal about="Help" show={isModalOpen} onClose={onClose}>
          <Modal.Header>
            Esqueci minha senha / Preciso de uma conta!
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                O programador desse sistema é um malandro, e não fez a página
                para trocar a senha, mesmo sua api contendo tal ação.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Além disso, também não foi criada uma página para cadastro de
                novos usuários, mesmo novamente sua api conseguindo fazer isso
                nesse end-point: <br />
                <code className="text-black bg-gray-300 rounded-md p-1">
                  {" "}
                  <span className="text-green-600">POST</span>{" "}
                  /api/cadastrarFabricador{" "}
                </code>
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Para alterar sua senha ou criar um novo usuário, entre em
                contato com a{" "}
                <span className="text-pink-600">@Gabi, a estagiária</span> ou
                com o{" "}
                <span className="text-purple-600">
                  @João, o programador desse sistema
                </span>
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="gray" onClick={() => onClose()}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </section>
  );
};
