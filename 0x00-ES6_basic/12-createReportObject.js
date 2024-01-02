export default function createReportObject(employeesList) {
  const employees = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(obj) {
      let objects = 0;
      for (const i in obj) {
        objects++;
      }
      return objects;
    },
  };

  return employees;
}
