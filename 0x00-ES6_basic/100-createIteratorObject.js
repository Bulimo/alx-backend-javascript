/* eslint-disable no-plusplus */
export default function createIteratorObject(report) {
  const employees = []; // Initialize an empty array to store the employees
  for (const dept of Object.values(report.allEmployees)) {
    // Spread the employees from each department and add them to the employees array
    employees.push(...dept);
  }

  // Creating an iterator object
  const iterator = {
    employees,
    currentIndex: 0,
    next() {
      if (this.currentIndex < this.employees.length) {
        return { value: this.employees[this.currentIndex++], done: false };
      }
      return { value: undefined, done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };

  return iterator;
}
