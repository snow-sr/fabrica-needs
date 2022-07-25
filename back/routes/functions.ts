import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export async function createFabricador(req: Request, res: Response) {
  try {
    await prisma.fabricador.create({
      data: {
        nome: "João Felipi Cardoso",
        email: "snowsr@snowsr.tech",
      },
    });

    res.send("Fabricador criado com sucesso!");
  } catch {
    res.send("Erro ao criar fabricador");
  }
}

export function getAllFabricadores(req: Request, res: Response) {
  prisma.fabricador.findMany({}).then((fabricadores) => {
    res.json(fabricadores);
  });
}
