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
                userName: req.body.userName,
                password: (yield pass).toString(),
            },
        })
            .then(() => {
            res.send("Fabricador criado com sucesso!");
        })
            .catch(() => {
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
        .then(() => {
        res.send("Fabricador deletado com sucesso!");
    })
        .catch(() => {
        res.status(403).send("Erro ao deletar fabricador");
    });
}
export function loginFabricador(req, res) {
    const login = (userName, password) => __awaiter(this, void 0, void 0, function* () {
        const fabricador = yield prisma.fabricador.findUnique({
            where: {
                userName: userName,
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
    login(req.body.userName, req.body.password)
        .then((result) => {
        if (result) {
            res.send(result);
        }
        else {
            res.status(401).send("Login inválido");
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
export function getSpecificFabricador(req, res) {
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
export function getBalance(req, res) {
    prisma.fabricador
        .findFirst({
        where: {
            id: req.params.id,
        },
    })
        .then((profile) => {
        if (profile === null || profile === void 0 ? void 0 : profile.balance) {
            res.send(profile.balance);
        }
    });
}
//# sourceMappingURL=fabricadoresFunctions.js.map