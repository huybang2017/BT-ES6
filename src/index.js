import getELement from "./Help.js";
import { Person, Student, Employee, Customer } from "./Person.js";
import {
  validCustomer,
  validEmployee,
  validPerson,
  validStudent,
} from "./Validation.js";
import getElement from "./Help.js";
import {
  handlePersonTable,
  handleStudentTable,
  handleEmployeeTable,
  handleCustomerTable,
  handlePersonForm,
  handleStudentForm,
  handleEmployeeForm,
  handleCustomerForm,
} from "./handleLayout.js";
import ListPerson from "./listPerson.js";

let personList = new ListPerson();
let studentList = new ListPerson();
let employeeList = new ListPerson();
let customerList = new ListPerson();
renderPerson(personList);

window.createPerson = function () {
  let regency = getELement("#typeForm").value;
  let name = getELement("#name").value;
  let address = getELement("#address").value;
  let email = getELement("#email").value;
  let id = getELement("#ID").value;
  // Student
  let math = getELement("#math").value;
  let physics = getELement("#physics").value;
  let chemistry = getELement("#chemistry").value;
  // Employee
  let dayOfWork = getELement("#dayOfWork").value;
  let salaryOneDay = getELement("#salaryOneDay").value;
  // Customer
  let nameCompany = getELement("#nameCompany").value;
  let invoiceValue = +getELement("#invoiceValue").value;
  let review = getELement("#review").value;

  const person = new Person(name, regency, address, id, email);
  const student = new Student(
    name,
    regency,
    address,
    id,
    email,
    math,
    physics,
    chemistry
  );
  const employee = new Employee(
    name,
    regency,
    address,
    id,
    email,
    dayOfWork,
    salaryOneDay
  );
  const customer = new Customer(
    name,
    regency,
    address,
    id,
    email,
    nameCompany,
    review,
    invoiceValue
  );

  let notValidPerson = validPerson();
  let notValidStudent = validStudent();
  let notValidEmployee = validEmployee();
  let notValidCustomer = validCustomer();
  let typeForm = getELement("#typeForm").selectedIndex;
  if (!notValidPerson) {
    return;
  }
  personList.addPerson(person);
  switch (typeForm) {
    case 1:
      if (!notValidStudent) return;
      studentList.addPerson(student);
      break;
    case 2:
      if (!notValidEmployee) return;
      employeeList.addPerson(employee);
      break;
    case 3:
      if (!notValidCustomer) return;
      customerList.addPerson(customer);
      break;
  }
  renderPerson(personList);
};
// lấy data lên form
window.getDataOnForm = function getDataOnForm(personID) {
  getELement("#btnAdd").disabled = true;
  getELement("#ID").disabled = true;

  let selectedStudent = studentList.persons.find(
    (student) => student.id === personID
  );
  let selectedEmployee = employeeList.persons.find(
    (employee) => employee.id === personID
  );
  let selectedCustomer = customerList.persons.find(
    (customer) => customer.id === personID
  );

  let regency = personList.persons.regency;
  switch (regency) {
    case "Sinh Viên":
      getELement("#typeForm").value = regency;
      getELement("#name").value = selectedStudent.name;
      getELement("#address").value = selectedStudent.address;
      getELement("#email").value = selectedStudent.email;
      getELement("#ID").value = selectedStudent.id;

      getELement("#math").value = selectedStudent.math;
      getELement("#physics").value = selectedStudent.physics;
      getELement("#chemistry").value = selectedStudent.chemistry;
      handleStudentForm();
      break;
    case "Nhân Viên":
      getELement("#typeForm").value = regency;
      getELement("#name").value = selectedEmployee.name;
      getELement("#address").value = selectedEmployee.address;
      getELement("#email").value = selectedEmployee.email;
      getELement("#ID").value = selectedEmployee.id;

      getELement("#dayOfWork").value = selectedEmployee.dateOfWork;
      getELement("#salaryOneDay").value = selectedEmployee.salaryOneDay;
      handleEmployeeForm();
      break;
    case "Khách Hàng":
      getELement("#typeForm").value = regency;
      getELement("#name").value = selectedCustomer.name;
      getELement("#address").value = selectedCustomer.address;
      getELement("#email").value = selectedCustomer.email;
      getELement("#ID").value = selectedCustomer.id;

      getELement("#nameCompany").value = selectedCustomer.nameCompany;
      getELement("#invoiceValue").value = selectedCustomer.invoiceValue;
      getELement("#review").value = selectedCustomer.review;
      handleCustomerForm();
      break;
  }
};

window.updatePerson = function () {
  let regency = getELement("#typeForm").value;
  let name = getELement("#name").value;
  let address = getELement("#address").value;
  let email = getELement("#email").value;
  let id = getELement("#ID").value;
  // Student
  let math = getELement("#math").value;
  let physics = getELement("#physics").value;
  let chemistry = getELement("#chemistry").value;
  // Employee
  let dayOfWork = getELement("#dayOfWork").value;
  let salaryOneDay = getELement("#salaryOneDay").value;
  // Customer
  let nameCompany = getELement("#nameCompany").value;
  let invoiceValue = +getELement("#invoiceValue").value;
  let review = getELement("#review").value;

  let typeForm = getELement("#typeForm").selectedIndex;

  const person = new Person(name, regency, address, id, email);
  const student = new Student(
    name,
    regency,
    address,
    id,
    email,
    math,
    physics,
    chemistry
  );
  const employee = new Employee(
    name,
    regency,
    address,
    id,
    email,
    dayOfWork,
    salaryOneDay
  );
  const customer = new Customer(
    name,
    regency,
    address,
    id,
    email,
    nameCompany,
    review,
    invoiceValue
  );

  switch (typeForm) {
    case 1:
      let indexStudent = studentList.persons.findIndex(
        (student) => student.id === id
      );
      studentList[indexStudent] = student;
      break;
    case 2:
      let indexEmployee = employeeList.persons.findIndex(
        (employee) => employee.id === id
      );
      employeeList[indexEmployee] = employee;
      break;
    case 3:
      let indexCustomer = customerList.persons.findIndex(
        (customer) => customer.id === id
      );
      customerList[indexCustomer] = customer;
      break;
    default:
      let indexPerson = personList.persons.findIndex(
        (person) => person.id === id
      );
      personList[indexPerson] = person;
      break;
  }

  renderPerson(personList);
  renderStudent(studentList);
  renderEmployee(employeeList);
  renderCustomer(customerList);
  resetForm();
};

function resetForm() {
  getELement("#typeForm").value = "Chọn loại người dùng";
  getELement("#name").value = "";
  getELement("#address").value = "";
  getELement("#email").value = "";
  getELement("#ID").value = "";

  getELement("#math").value = "";
  getELement("#physics").value = "";
  getELement("#chemistry").value = "";

  getELement("#dayOfWork").value = "";
  getELement("#salaryOneDay").value = "";
  getELement("#nameCompany").value = "";

  getELement("#invoiceValue").value = "";
  getELement("#review").value = "";
}

window.removePerson = function (personID) {
  personList.persons = personList.persons.filter(
    (person) => (person.id = personID)
  );
  studentList.persons = studentList.persons.filter(
    (student) => student.id !== personID
  );
  employeeList.persons = employeeList.persons.filter(
    (employee) => employee.id !== personID
  );
  customerList.persons = customerList.persons.filter(
    (customer) => customer.id !== personID
  );

  renderPerson(personList);
  renderStudent(studentList);
  renderEmployee(employeeList);
  renderCustomer(customerList);
};

// Hàm thêm chung
function renderPerson(personList) {
  console.log(personList.persons);
  let html = personList.persons.reduce((result, person) => {
    return (
      result +
      `
              <tr>
                  <td class="text-center">${person.id}</td>
                  <td class="text-center">${person.regency}</td>
                  <td class="text-center">${person.name}</td>
                  <td class="text-center">${person.address}</td>
                  <td class="text-center">${person.email}</td>
                  <td class="text-center">
                      <button class="btn btn-success my-1" data-toggle="modal" data-target="#personModal" onclick="getDataOnForm(
                        '${person.id}'
                      )">Sửa</button>
                      <button class="btn btn-danger my-1" onclick="removePerson('${person.id}')">Xóa</button>
                  </td>
              </tr>
              `
    );
  }, "");
  getELement("#personList").innerHTML = html;
}

// Hiển thị danh sách sinh viên
function renderStudent(studentList) {
  let html = studentList.persons.reduce((result, student) => {
    return (
      result +
      `
              <tr>
                  <td class="text-center">${student.id}</td>
                  <td class="text-center">${student.regency}</td>
                  <td class="text-center">${student.name}</td>
                  <td class="text-center">${student.address}</td>
                  <td class="text-center">${student.email}</td>
                  <td class="text-center">${student.math}</td>
                  <td class="text-center">${student.physics}</td>
                  <td class="text-center">${student.chemistry}</td>
                  <td class="text-center">${student.mediumScore()}</td>
                  <td class="text-center">
                      <button class="btn btn-success my-1" data-toggle="modal" data-target="#personModal" onclick="${getDataOnForm(
                        student.id
                      )}">Sửa</button>
                      <button class="btn btn-danger my-1" onclick="removePerson('${student.id}')">Xóa</button>
                  </td>
              </tr>
              `
    );
  }, "");

  getElement("#personList").innerHTML = html;
}

// Hiển thị danh sách Nhân viên
function renderEmployee(employeeList) {
  let html = employeeList.persons.reduce((result, employee) => {
    return (
      result +
      `
              <tr>
                  <td class="text-center">${employee.id}</td>
                  <td class="text-center">${employee.regency}</td>
                  <td class="text-center">${employee.name}</td>
                  <td class="text-center">${employee.address}</td>
                  <td class="text-center">${employee.email}</td>
                  <td class="text-center">$${employee.sumSalary()}</td>
                  <td class="text-center">
                      <button class="btn btn-success my-1" data-toggle="modal" data-target="#personModal" onclick="${getDataOnForm(
                        employee.id
                      )}">Sửa</button>
                      <button class="btn btn-danger my-1" onclick="removePerson('${employee.id}')">Xóa</button>
                  </td>
              </tr>
              `
    );
  }, "");

  getElement("#personList").innerHTML = html;
}

// Hiển thị danh sách khách hàng
function renderCustomer(customerList) {
  let html = customerList.persons.reduce((result, customer) => {
    return (
      result +
      `
              <tr>
                  <td class="text-center">${customer.id}</td>
                  <td class="text-center">${customer.regency}</td>
                  <td class="text-center">${customer.name}</td>
                  <td class="text-center">${customer.address}</td>
                  <td class="text-center">${customer.email}</td>
                  <td class="text-center">${customer.nameCompany}</td>
                  <td class="text-center">$${customer.invoiceValue.toLocaleString()}</td>
                  <td class="text-center">${customer.review}</td>
                  <td class="text-center">
                      <button class="btn btn-success my-1" data-toggle="modal" data-target="#personModal" onclick="${getDataOnForm(
                        customer.id
                      )}">Sửa</button>
                      <button class="btn btn-danger my-1" onclick="removePerson('${customer.id}')">Xóa</button>
                  </td>
              </tr>
              `
    );
  }, "");

  getElement("#personList").innerHTML = html;
}
// DOM

window.searchPerson = function () {
  let search = getElement("#search").selectedIndex;
  switch (search) {
    case 1:
      renderStudent(studentList);
      handleStudentTable();
      break;
    case 2:
      renderEmployee(employeeList);
      handleEmployeeTable();
      break;
    case 3:
      renderCustomer(customerList);
      handleCustomerTable();
      break;
    default:
      renderPerson(personList);
      handlePersonTable();
      break;
  }
};

window.chooseType = function () {
  let typeForm = getELement("#typeForm").selectedIndex;
  switch (typeForm) {
    case 1:
      handleStudentForm();
      break;
    case 2:
      handleEmployeeForm();
      break;
    case 3:
      handleCustomerForm();
      break;
    default:
      handlePersonForm();
      break;
  }
};

window.addPerson = function () {
  handlePersonForm();
  getELement("#btnAdd").disabled = false;
  getELement("#ID").disabled = false;
  resetForm();
};
