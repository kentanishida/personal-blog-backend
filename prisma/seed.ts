import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.article.upsert({
    where: {
      id: '00000000-0000-0000-0000-000000000001',
    },
    create: {
      id: '00000000-0000-4000-8000-000000000001',
      status: 'PUBLIC',
      articleHistory: {
        create: {
          status: 'DRAFT',
          contentRaw: '# hello!',
        },
      },
      articleSummary: {
        create: {
          imgUrl: 'https://example.com',
          summary: 'テストサマリーだよよよよよよよよ',
          title: 'テストタイトル',
        },
      },
      content: {
        create: {
          content: 'hello! world!',
        },
      },
    },
    update: {},
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
