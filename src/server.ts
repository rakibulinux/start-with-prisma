import { PrismaClient } from "@prisma/client";
import app from "./app";

const prisma = new PrismaClient();

const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

async function main() {
  //   const getAllUsers = await prisma.user.findMany();
  //   console.log(getAllUsers);
  //   const postUser = await prisma.user.create({
  //     data: {
  //       name: "MD Rakibul",
  //       email: "rakibulinux1@gmail.com",
  //     },
  //   });
  //   console.log(postUser);
}

main();
