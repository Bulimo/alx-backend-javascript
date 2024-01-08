export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // Filter by city
  // const filteredList = studentList.filter((entry) => entry.location === city);
  // // Now create a new aray using map
  // const result = filteredList.map((student) => {
  //   // first get the object in newGrades that matches the student using fileter
  //   const studentGrade = newGrades.filter((val) => val.studentId === student.id);
  //   // create array using spread operator checking length of the object
  //   return { ...student, grade: studentGrade.length === 0 ? 'N/A' : studentGrade[0].grade };
  // });
  const result = studentList
    .filter((entry) => entry.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
      const gradeValue = matchingGrade ? matchingGrade.grade : 'N/A';
      return { ...student, grade: gradeValue };
    });
  return result;
}
