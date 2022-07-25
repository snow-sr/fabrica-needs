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
export function getAllNeeds(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.need
            .findMany({})
            .then((result) => {
            res.send(result);
        })
            .catch((err) => {
            res.status(403).send("Erro ao buscar needs");
        });
    });
}
export function createNeed(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let name = req.body.name;
        let description = req.body.description;
        let priority = req.body.priority;
        yield prisma.need
            .create({
            data: {
                name,
                description: description,
                priority,
            },
        })
            .then((result) => {
            res.send(result);
        })
            .catch((err) => {
            console.log(err);
            res.status(403).send("Erro ao criar need");
        });
    });
}
export function deleteNeed(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = parseInt(req.params.id);
        yield prisma.need
            .delete({
            where: {
                id: id,
            },
        })
            .then((result) => {
            res.send(result);
        })
            .catch((err) => {
            console.log(err);
            res.status(403).send("Erro ao deletar need");
        });
    });
}
export function solveNeed(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = req.body.id;
        let fabricadorWhoSolved = req.body.fabricador;
        yield prisma.need
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
            .then((result) => {
            res.send(result);
        })
            .catch((err) => {
            console.log(err);
            res.status(403).send("Erro ao resolver need");
        });
    });
}
//# sourceMappingURL=needsFunctions.js.map