const fastify = require('fastify')({
  logger: true
});
const { root } = require('./services/root.js');
const { login } = require('./services/login/login.js')

fastify.register(root)
fastify.register(login)

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`Server is now listening on ${address}`)
})
