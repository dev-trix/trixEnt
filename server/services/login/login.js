const fp = require('fastify-plugin');

const login = fp((fastify, opts, next) => {
  fastify.post('/login', (request, reply) => {
    reply.send({
      ...request.body
    })
  })

  next()
})

module.exports = {
  login
}
