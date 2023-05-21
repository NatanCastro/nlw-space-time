import type { FastifyInstance } from 'fastify'

export const topRoute = (app: FastifyInstance): void => {
  app.get('/top', async (_req, res) => {
    await res.send({
      69: 420,
      truth: '42',
      dev: '👨🏻‍💻',
      '🗿': '🍷'
    })
  })
}
