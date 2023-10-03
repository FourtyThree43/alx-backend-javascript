function getStudentIdsSum(students) {
  const reducer = (accumulator, student) => accumulator + student.id;

  return students.reduce(reducer, 0);
}

export default getStudentIdsSum;
