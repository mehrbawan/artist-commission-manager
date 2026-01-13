import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashed = await bcrypt.hash("demo123", 10);

  await prisma.user.upsert({
    where: { email: "demo@demo.com" },
    update: {},
    create: {
      email: "demo@demo.com",
      password: hashed,
      commissions: {
        create: [
          {
            clientName: "Alice",
            description: "Character portrait",
            status: "pending",
          },
          {
            clientName: "Bob",
            description: "Album cover art",
            status: "in_progress",
          },
        ],
      },
    },
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
