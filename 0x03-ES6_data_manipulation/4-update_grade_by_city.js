function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  return students.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: matchingGrade ? matchingGrade.grade : 'N/A',
    };
  });
}

export default updateStudentGradeByCity;
