import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient({log: ['query']});

async function main() {
    // const users = await prisma.user.create({
    //     data: {
    //         age: 26,
    //         name: "Janusz",
    //         email: "andrzej@gmail.com",
    //         profile: {
    //             create: {
    //                 emailUpdates: true,
    //             }
    //         }
    //     }
    // });
    // const users = await prisma.user.findMany();
    const deletedUser = await prisma.user.delete({
        where: {
            email: "j.a.nusz@gmail.com"
        }
    })

    const user = await prisma.user.update({
        where: {
            email: "andrzej@gmail.com"
        },
        data: {
            writtenPosts: {
                connect: {
                    id: post.id
                }
            }
        }
    })
    console.log(user);
}


main()
    .catch((error) => console.log(error.message))
    .finally(() => prisma.$disconnect());

