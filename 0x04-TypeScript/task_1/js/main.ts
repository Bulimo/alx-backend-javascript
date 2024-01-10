interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.slice(0, 1)}. ${lastName}`
}

// console.log(printTeacher('Eric', 'Ubaga'))

interface Student {
  workOnHomework(): string;
  displayName(): string;
}

interface studentConstructor {
  new (firstName: string, lastName: string) : StudentClass;
}

class StudentClass implements Student {
  constructor(private firstName: string, private lastName: string) {}
  workOnHomework(): string {
   return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}
