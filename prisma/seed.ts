import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { properties, team, testimonials } from "./seed-data";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Wipes and reloads the tables. Only run this on dummy data!
  await prisma.property.deleteMany();
  await prisma.teamMember.deleteMany();
  await prisma.testimonial.deleteMany();

  await prisma.property.createMany({ data: properties });
  await prisma.teamMember.createMany({ data: team });
  await prisma.testimonial.createMany({ data: testimonials });
  console.log(`Seeded ${properties.length} properties, ${team.length} team members, ${testimonials.length} testimonials`);
}

main().finally(() => prisma.$disconnect());
