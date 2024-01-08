export default function getListStudentIds(studentList) {
  if (Array.isArray(studentList)) {
    const studentID = studentList.map(({ id }) => (id));
    return studentID;
  }
  return [];
}
