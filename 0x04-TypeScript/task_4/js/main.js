"use strict";
// import { cTeacher, java, cpp, react } from "./subjects/constants";
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.cTeacher = exports.java = exports.react = exports.cpp = void 0;
exports.cpp = new Subjects.Cpp();
exports.react = new Subjects.React();
exports.java = new Subjects.Java();
exports.cTeacher = {
    firstName: 'John',
    lastName: 'Amakobe',
    experienceTeachingC: 10,
};
console.log('C++');
exports.cpp.setTeacher(exports.cTeacher);
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
console.log('Java');
exports.java.setTeacher(exports.cTeacher);
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
console.log('React');
exports.java.setTeacher(exports.cTeacher);
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
