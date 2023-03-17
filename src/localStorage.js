// LOCAL STORAGE
import ListPerson from "./listPerson.js";
import { Customer, Employee, Person, Student } from "./Person.js";
const personGet = getStoragePerson()
const studentGet = getStorageStudent()
const employeeGet = getStorageEmployee()
const customerGet = getStorageCustomer()
let personList = new ListPerson(personGet);
let studentList = new ListPerson(studentGet);
let employeeList = new ListPerson(employeeGet);
let customerList = new ListPerson(customerGet);

function setStoragePerson() {
  const jsonPerson = JSON.stringify(personList.persons);
  localStorage.setItem("personList", jsonPerson);
}
function setStorageStudent() {
  const jsonStundent = JSON.stringify(studentList.persons);
  localStorage.setItem("studentList", jsonStundent);
}
function setStorageEmployee() {
  const jsonEmployee = JSON.stringify(employeeList.persons);
  localStorage.setItem("employeeList", jsonEmployee);
}
function setStorageCustomer() {
  const jsonCustomer = JSON.stringify(customerList.persons);
  localStorage.setItem("customerList", jsonCustomer);
}

function getStoragePerson() {
  const jsonPerson = localStorage.getItem("personList");
  if (!jsonPerson) {
    return [];
  }

  const personList = JSON.parse(jsonPerson);

  for (let i = 0; i < personList.length; i++) {
    const person = personList[i];
    personList[i] = new Person(
      person.name,
      person.regency,
      person.address,
      person.id,
      person.email
    );
  }
  return personList;
}
function getStorageStudent() {
  const jsonStundent = localStorage.getItem("studentList");
  if (!jsonStundent) {
    return [];
  }

  const studentList = JSON.parse(jsonStundent);

  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];
    studentList[i] = new Student(
      student.name,
      student.regency,
      student.address,
      student.id,
      student.email,
      student.math,
      student.physics,
      student.chemistry
    );
  }
  return studentList;
}
function getStorageEmployee() {
  const jsonEmployee = localStorage.getItem("employeeList");
  if (!jsonEmployee) {
    return [];
  }

  const employeeList = JSON.parse(jsonEmployee);

  for (let i = 0; i < employeeList.length; i++) {
    const employee = employeeList[i];
    employeeList[i] = new Employee(
      employee.name,
      employee.regency,
      employee.address,
      employee.id,
      employee.email,
      employee.dayOfWork,
      employee.salaryOneDay
    );
  }
  return employeeList;
}
function getStorageCustomer() {
  const jsonCustomer = localStorage.getItem("customerList");
  if (!jsonCustomer) {
    return [];
  }

  const customerList = JSON.parse(jsonCustomer);

  for (let i = 0; i < customerList.length; i++) {
    const customer = customerList[i];
    customerList[i] = new Customer(
      customer.name,
      customer.regency,
      customer.address,
      customer.id,
      customer.email,
      customer.nameCompany,
      customer.review,
      customer.invoiceValue
    );
  }
  return customerList;
}

export {
  setStoragePerson,
  setStorageStudent,
  setStorageEmployee,
  setStorageCustomer,
  personList,
  studentList,
  employeeList,
  customerList,
};
