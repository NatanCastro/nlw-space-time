import {fastify} from 'fastify'

const app = fastify()


app.listen({
  port: 3333
}, (err, addr) => {
    if (err) {
      throw err
    }
    console.log(addr);
  })
