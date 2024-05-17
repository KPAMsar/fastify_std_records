const fastify = require("fastify")({ logger: true });
const studentRoutes = require("./src/routes/studentsRoutes");
const studentService = require("./src/services/studentsServices");
const sensible = require("fastify-sensible");
require("dotenv").config();
const cors = require("@fastify/cors");

fastify.register(cors, {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "*",
  exposedHeaders: "*",
  credentials: true,
});

fastify.register(sensible);

fastify.decorate("studentService", studentService);
fastify.register(studentRoutes);

fastify.setErrorHandler(function (error, request, reply) {
  request.log.error(error.toString());
  reply.status(error.statusCode || 500).send({ error: error.message });
});

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000);
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
