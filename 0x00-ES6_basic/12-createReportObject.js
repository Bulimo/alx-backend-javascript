export default function createReportObject(employeesList) {
  const employees = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(obj) {
      return Object.keys(obj).length;
    },
  };

  return employees;
}
