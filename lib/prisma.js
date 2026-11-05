// One shared database client for the whole app.
// NOTE: the import comes from the folder set as `output` in prisma/schema.prisma
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const g = globalThis;
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

export const prisma = g.prisma ?? new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production") g.prisma = prisma; // avoids many connections on hot reload
