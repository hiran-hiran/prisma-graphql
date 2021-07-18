import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
const main = async () => {
	// ... you will write your Prisma Client queries here

	//
	// GET

	// const res = await prisma.user.findMany();
	// const res = await prisma.user.findUnique({
	//   where: {
	//     id: 2
	//   }
	// })

	// const res = await prisma.user.findMany({
	//   select: {
	//     id: true,
	//     name: true
	//   }
	// })

	// const res = await prisma.post.findMany({
	//   where: {
	//     author: {
	//       id: 5
	//     }
	//   }
	// })

	//
	// CREATE

	// const res = await prisma.user.create({
	//   data: {
	//     email: "tete@tete.com",
	//     name: "tete"
	//   }
	// })

	// const res = await prisma.user.create({
	//   data: {
	//     name: "NIKE",
	//     email: "nike@nike.com",
	//     posts: {
	//       create: {
	//         title: "ABOUT NIKE"
	//       }
	//     }
	//   }
	// })

	// const res = await prisma.post.create({
	//   data: {
	//     title: "ハローワールそ"
	//   }
	// })

	//
	// UPDATE

	// const res = await prisma.user.update({
	//   where: {
	//     id: 4
	//   },
	//   data: {
	//     name: "Tarou"
	//   }
	// });

	// const res = await prisma.post.update({
	//   where: {
	//     id: 1
	//   },
	//   data: {
	//     author: {
	//       connect: {
	//         email: "tete@tete.com"
	//       }
	//     }
	//   }
	// })

	// console.log(res);
};

main()
	.catch((e) => {
		console.error(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
