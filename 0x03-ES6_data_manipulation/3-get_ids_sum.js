export default function getStudentIdsSum(studentList) {
  const sum = studentList.reduce((accum, item) => accum + item.id, 0);
  return sum;
}
