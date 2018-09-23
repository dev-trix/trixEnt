const fp = require('fastify-plugin');

const root = fp((fastify, opts, next) => {
  fastify.get('/', (request, reply) => {
    reply.send({
      hello: true
    })
  })

  next()
})

module.exports = {
  root
}
