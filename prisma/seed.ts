import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.article.upsert({
    where: {
      id: '00000000-0000-0000-0000-000000000001',
    },
    create: {
      id: '00000000-0000-0000-0000-000000000001',
      status: 'PUBLIC',
      title: {
        connectOrCreate: {
          where: {
            id: '00000000-0000-0000-0000-000000000001',
          },
          create: {
            id: '00000000-0000-0000-0000-000000000001',
            name: 'テストタイトル',
            text: 'テストタイトルです',
          },
        },
      },
      summary: {
        connectOrCreate: {
          where: {
            id: '00000000-0000-0000-0000-000000000001',
          },
          create: {
            id: '00000000-0000-0000-0000-000000000001',
            name: 'テストサマリー',
            text: 'この記事はこのことについて書かれておりますこの記事はこのことについて書かれておりますこの記事はこのことについて書かれておりますこの記事はこのことについて書かれておりますこの記事はこのことについて書かれておりますこの記事はこのことについて書かれておりますこの記事はこのことについて書かれておりますこの記事はこのことについて書かれておりますこの記事はこのことについて書かれておりますこの記事はこのことについて書かれております',
          },
        },
      },
    },
    update: {},
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
