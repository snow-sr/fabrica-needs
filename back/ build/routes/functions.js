var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export function createFabricador(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield prisma.fabricador.create({
                data: {
                    nome: "João Felipi Cardoso",
                    email: "snowsr@snowsr.tech",
                },
            });
            res.send("Fabricador criado com sucesso!");
        }
        catch (_a) {
            res.send("Erro ao criar fabricador");
        }
    });
}
export function getAllFabricadores(req, res) {
    prisma.fabricador.findMany({}).then((fabricadores) => {
        res.json(fabricadores);
    });
}
//# sourceMappingURL=functions.js.map