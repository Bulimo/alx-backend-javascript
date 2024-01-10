interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string
}

// create 2 students 
const Student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'Nairobi'
};
const Student2: Student = {
  firstName: 'Mary',
  lastName: 'Jane',
  age: 23,
  location: 'Nairobi'
};

// Create an array containing the students
const studentsList: Array<Student> = [Student1, Student2];

// Render a table using Vanilla JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  // loop through the students array and create rows for the table
  studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    // Add the text to the created cells
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
});
