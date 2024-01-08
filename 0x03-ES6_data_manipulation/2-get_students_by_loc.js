export default function getStudentsByLocation(studentList, city) {
  const filteredList = studentList.filter((entry) => entry.location === city);
  return filteredList;
}
