import { PrismaClient } from '@prisma/client'
import { fastify } from 'fastify'

const prismaClient = new PrismaClient()
const app = fastify()

app.get('/top', (_req, res) => {
  res.send({
    69: 420,
    truth: '42',
    dev: '👨🏻‍💻',
    '🗿': '🍷',
  })
})

app.get('/users', async (_req, res) => {
  const users = await prismaClient.user.findMany()

  res.send(users)
})

app.listen(
  {
    port: 3333,
  },
  (err, addr) => {
    if (err) {
      throw err
    }
    console.log(addr)
  },
)
