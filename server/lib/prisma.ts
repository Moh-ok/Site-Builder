import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const globalForPrisma = globalThis;

let prisma;

if (!globalForPrisma.prisma) {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  });

  prisma = new PrismaClient({ adapter });
  globalForPrisma.prisma = prisma;
} else {
  prisma = globalForPrisma.prisma;
}

export default prisma;
