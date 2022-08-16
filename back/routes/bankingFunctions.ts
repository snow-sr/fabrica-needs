import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { hashIt, compareIt } from "../encrypt/encrypt.js";
const prisma = new PrismaClient();

export async function AproveNeed(req: Request, res: Response) {
  let needId = req.body.id;
  let fabricadorId = req.body.fabricadorId;

  let user = await prisma.fabricador.findFirst({
    where: {
      id: fabricadorId,
    },
  });

  if (await user.permissions.includes("ADMIN")) {
    await prisma.need.update({
      where: {
        id: needId,
      },
      data: {
        solved: true,
        solvedBy: {
          connect: {
            id: fabricadorId,
          },
        },
        solvedAt: new Date(),
      },
    });
  }
}

export async function accountBalance(req: Request, res: Response) {
  let newCandyBalance = req.body.candyBalance;
  let bankingId = req.body.bankingId;

  await prisma.banking.update({
    where: {
      id: bankingId,
    },
    data: {
      candyCount: newCandyBalance,
    },
  });
}
