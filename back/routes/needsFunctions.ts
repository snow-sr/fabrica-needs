import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { hashIt, compareIt } from "../encrypt/encrypt.js";
const prisma = new PrismaClient();

export async function getAllNeeds(req: Request, res: Response) {
  await prisma.need
    .findMany({
      where: {
        solved: false,
      },
    })
    .then((result: any) => {
      res.send(result);
    })
    .catch((e) => {
      res.status(403).send(`Erro ao buscar Necessidades: ${e}`);
    });
}

export async function createNeed(req: Request, res: Response) {
  let name: string = req.body.name;
  let description: string = req.body.description;
  let priority: number = req.body.priority;

  await prisma.need
    .create({
      data: {
        name,
        description: description,
        priority,
      },
    })
    .then((result: any) => {
      res.send(result);
    })
    .catch(() => {
      res.status(403).send("Erro ao criar need");
    });
}

export async function deleteNeed(req: Request, res: Response) {
  let id: number = parseInt(req.params.id);

  await prisma.need
    .delete({
      where: {
        id: id,
      },
    })
    .then((result: any) => {
      res.send(result);
    })
    .catch(() => {
      res.status(403).send("Erro ao deletar need");
    });
}

export async function solveNeed(req: Request, res: Response) {
  let id = req.body.id;
  let fabricadorWhoSolved = req.body.fabricador;

  await prisma.need
    .update({
      where: {
        id: id,
      },
      data: {
        solved: true,
        solvedAt: new Date(),
        fabricadorWhoSolved: fabricadorWhoSolved,
      },
    })
    .then((result: any) => {
      res.send(result);
    })
    .catch(() => {
      res.status(403).send("Erro ao resolver need");
    });
}
