const studentService = require("../services/studentsServices");

async function getStudents1(request, reply) {
  try {
    const students = await studentService.getStudents1();
    reply.send(students);
  } catch (error) {
    reply.status(500).send({ error: error.message });
  }
}

async function getStudents2(request, reply) {
  try {
    const students = await studentService.getStudents2();
    reply.send(students);
  } catch (error) {
    reply.status(500).send({ error: error.message });
  }
}

async function getMergedStudents(request, reply) {
  try {
    const students = await studentService.getMergedStudents();
    reply.send(students);
  } catch (error) {
    reply.status(500).send({ error: error.message });
  }
}

module.exports = {
  getStudents1,
  getStudents2,
  getMergedStudents,
};
