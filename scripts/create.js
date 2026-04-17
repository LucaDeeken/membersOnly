import { prisma } from "../lib/prisma.js";

async function main() {
  const user = await prisma.user.create({
    data: {
      firstName: "Luca",
      lastName: "Deeken",
      membership: true,
      password: "labubu",
      userName: "nepoluc",
    },
  });

  console.log(user);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
