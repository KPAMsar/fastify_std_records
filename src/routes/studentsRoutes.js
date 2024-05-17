const studentController = require("../controllers/studentsController");

async function routes(fastify, options) {
  fastify.get("/api/students1", studentController.getStudents1);
  fastify.get("/api/students2", studentController.getStudents2);
  fastify.get("/api/students", studentController.getMergedStudents);
}

module.exports = routes;
