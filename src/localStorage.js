// LOCAL STORAGE
import ListPerson from "./listPerson.js";
let personList = new ListPerson();
let studentList = new ListPerson();
let employeeList = new ListPerson();
let customerList = new ListPerson();

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
}

export {
  setStoragePerson,
  setStorageStudent,
  setStorageEmployee,
  setStorageCustomer,
  getStoragePerson,
  getStorageStudent,
  getStorageEmployee,
  getStorageCustomer,
  personList,
  studentList,
  employeeList,
  customerList,
};
