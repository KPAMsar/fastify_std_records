const students1 = [
  { id: 1, name: "Alice", marks: 85 },
  { id: 2, name: "Bob", marks: 92 },
  { id: 3, name: "Catherine", marks: 78 },
  { id: 4, name: "David", marks: 90 },
  { id: 5, name: "Ella", marks: 87 },
  { id: 6, name: "Frank", marks: 95 },
  { id: 7, name: "Grace", marks: 82 },
  { id: 8, name: "Henry", marks: 89 },
  { id: 9, name: "Isabel", marks: 91 },
  { id: 10, name: "Jack", marks: 83 },
];

const students2 = [
  { id: 11, name: "Katherine", marks: 86 },
  { id: 12, name: "Liam", marks: 94 },
  { id: 13, name: "Mia", marks: 80 },
  { id: 14, name: "Nathan", marks: 88 },
  { id: 15, name: "Olivia", marks: 93 },
  { id: 16, name: "Peter", marks: 81 },
  { id: 17, name: "Quinn", marks: 90 },
  { id: 18, name: "Rachel", marks: 84 },
  { id: 19, name: "Samuel", marks: 89 },
  { id: 20, name: "Tiffany", marks: 87 },
];

async function getStudents1() {
  return students1;
}

async function getStudents2() {
  return students2;
}

function mergeStudents(students1, students2) {
  const allStudents = [...students1, ...students2];
  const uniqueStudents = Array.from(new Set(allStudents.map((s) => s.id))).map(
    (id) => allStudents.find((s) => s.id === id)
  );
  return uniqueStudents;
}

async function getMergedStudents() {
  const students1 = await getStudents1();
  const students2 = await getStudents2();
  return mergeStudents(students1, students2);
}

module.exports = {
  getStudents1,
  getStudents2,
  getMergedStudents,
};
