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
import { hashIt, compareIt } from "../encrypt/encrypt.js";
const prisma = new PrismaClient();
export function createFabricador(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let pass = hashIt(req.body.password);
        yield prisma.fabricador
            .create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: (yield pass).toString(),
            },
        })
            .then((result) => {
            res.send("Fabricador criado com sucesso!");
        })
            .catch((err) => {
            res.status(403).send("Erro ao criar fabricador");
        });
    });
}
export function deleteFabricador(req, res) {
    prisma.fabricador
        .delete({
        where: {
            id: req.params.id,
        },
    })
        .then((result) => {
        res.send("Fabricador deletado com sucesso!");
    })
        .catch((err) => {
        res.status(403).send("Erro ao deletar fabricador");
    });
}
export function loginFabricador(req, res) {
    const login = (email, password) => __awaiter(this, void 0, void 0, function* () {
        const fabricador = yield prisma.fabricador.findUnique({
            where: {
                email: email,
            },
        });
        if (fabricador) {
            const isValid = yield compareIt(password, fabricador.password);
            if (isValid) {
                return fabricador;
            }
        }
        return null;
    });
    login(req.body.email, req.body.password)
        .then((result) => {
        if (result) {
            res.send(result);
        }
        else {
            res.status(403).send("Login inválido");
        }
    })
        .catch((err) => {
        res.status(403).send("Erro ao logar");
    });
}
export function getAllFabricadores(req, res) {
    prisma.fabricador.findMany({}).then((fabricadores) => {
        res.json(fabricadores);
    });
}
export function getAllSolvedNeeds(req, res) {
    prisma.need
        .findMany({
        where: {
            fabricadorWhoSolved: req.params.id,
        },
    })
        .then((needs) => {
        res.json(needs);
    });
}
//# sourceMappingURL=fabricadoresFunctions.js.map