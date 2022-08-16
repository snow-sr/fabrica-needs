import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export function getAllPermissions(req: Request, res: Response) {
  prisma.permission.findMany({}).then((permissions) => {
    res.json(permissions);
  });
}
