import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const seed = async () => {
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "🚨 Cannot seed production database, please read Database.md docs"
    );
  }
  console.log("🌱 Seeding...");
  console.time(`🌱 Database has been seeded`);

  await prisma.actor.create({
    data: {
      name: "an Actor",
      nation: "Canada",
      movie: {
        create: [
          {
            title: "Title",
            desc: "Description",
            img: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
            createdAt: new Date(),
            updatedAt: new Date(),
            comment: {
              create: [
                {
                  comment: "rate 5/5",
                },
              ],
            },
          },
        ],
      },
    },
  });
  console.timeEnd(`🌱 Database has been seeded`);
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
