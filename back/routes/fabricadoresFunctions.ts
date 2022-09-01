import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { hashIt, compareIt } from "../encrypt/encrypt.js";
const prisma = new PrismaClient();

export async function createFabricador(req: Request, res: Response) {
  let pass = hashIt(req.body.password);
  await prisma.fabricador
    .create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: (await pass).toString(),
      },
    })
    .then(() => {
      res.send("Fabricador criado com sucesso!");
    })
    .catch(() => {
      res.status(403).send("Erro ao criar fabricador");
    });
}

export function deleteFabricador(req: Request, res: Response) {
  prisma.fabricador
    .delete({
      where: {
        id: req.params.id,
      },
    })
    .then(() => {
      res.send("Fabricador deletado com sucesso!");
    })
    .catch(() => {
      res.status(403).send("Erro ao deletar fabricador");
    });
}

export function loginFabricador(req: Request, res: Response) {
  const login = async (email: string, password: string) => {
    const fabricador = await prisma.fabricador.findUnique({
      where: {
        email: email,
      },
    });
    if (fabricador) {
      const isValid = await compareIt(password, fabricador.password);
      if (isValid) {
        return fabricador;
      }
    }
    return null;
  };

  login(req.body.email, req.body.password)
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(401).send("Login inválido");
      }
    })
    .catch((err) => {
      res.status(403).send("Erro ao logar");
    });
}

export function getAllFabricadores(req: Request, res: Response) {
  prisma.fabricador.findMany({}).then((fabricadores: any) => {
    res.json(fabricadores);
  });
}

export function getSpecificFabricador(req: Request, res: Response) {
  prisma.fabricador
    .findUnique({
      where: {
        id: req.params.id,
      },
    })
    .then((fabricador) => {
      res.json(fabricador);
    })
    .catch((e) => {
      res.status(404).send(e);
    });
}

export function getAllSolvedNeeds(req: Request, res: Response) {
  prisma.need
    .findMany({
      where: {
        fabricadorWhoSolved: req.params.id,
      },
    })
    .then((needs: any) => {
      res.json(needs);
    });
}

export function getBalance(req: Request, res: Response) {
  prisma.fabricador
    .findFirst({
      where: {
        id: req.params.id,
      },
    })
    .then((profile) => {
      if (profile?.balance) {
        res.send(profile.balance);
      }
    });
}
