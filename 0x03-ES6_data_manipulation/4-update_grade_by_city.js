function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  return students.map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);

    if (studentGrade.length === 0) {
      studentGrade[0] = { studentId: student.id, grade: 'N/A' };
    }

    return {
      ...student,
      grade: studentGrade[0].grade,
    };
  });
}

export default updateStudentGradeByCity;
