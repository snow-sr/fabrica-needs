import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export function getAllPermissions(req, res) {
    prisma.permission.findMany({}).then((permissions) => {
        res.json(permissions);
    });
}
//# sourceMappingURL=permissionsFunctions.js.map