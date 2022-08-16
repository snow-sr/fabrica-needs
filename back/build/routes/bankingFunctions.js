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
export function AproveNeed(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let needId = req.body.id;
        let fabricadorId = req.body.fabricadorId;
        let user = yield prisma.fabricador.findFirst({
            where: {
                id: fabricadorId,
            },
        });
        if (yield user.permissions.includes("ADMIN")) {
            yield prisma.need.update({
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
    });
}
export function accountBalance(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let newCandyBalance = req.body.candyBalance;
        let bankingId = req.body.bankingId;
        yield prisma.banking.update({
            where: {
                id: bankingId,
            },
            data: {
                candyCount: newCandyBalance,
            },
        });
    });
}
//# sourceMappingURL=bankingFunctions.js.map