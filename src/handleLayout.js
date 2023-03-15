import getElement from "./Help";

// Table
window.handlePersonTable = function () {
  getElement("#thMath").classList.add("d-none");
  getElement("#thPhysics").classList.add("d-none");
  getElement("#thChemistry").classList.add("d-none");
  getElement("#thMediumScore").classList.add("d-none");
  getElement("#thSumSalary").classList.add("d-none");
  getElement("#thNameCompany").classList.add("d-none");
  getElement("#thInvoiceValue").classList.add("d-none");
  getElement("#thReview").classList.add("d-none");
};

window.handleStudentTable = function () {
  getElement("#thMath").classList.remove("d-none");
  getElement("#thPhysics").classList.remove("d-none");
  getElement("#thChemistry").classList.remove("d-none");
  getElement("#thMediumScore").classList.remove("d-none");
  getElement("#thSumSalary").classList.add("d-none");
  getElement("#thNameCompany").classList.add("d-none");
  getElement("#thInvoiceValue").classList.add("d-none");
  getElement("#thReview").classList.add("d-none");
};

window.handleEmployeeTable = function () {
  getElement("#thMath").classList.add("d-none");
  getElement("#thPhysics").classList.add("d-none");
  getElement("#thChemistry").classList.add("d-none");
  getElement("#thMediumScore").classList.add("d-none");
  getElement("#thSumSalary").classList.remove("d-none");
  getElement("#thNameCompany").classList.add("d-none");
  getElement("#thInvoiceValue").classList.add("d-none");
  getElement("#thReview").classList.add("d-none");
};

window.handleCustomerTable = function () {
  getElement("#thMath").classList.add("d-none");
  getElement("#thPhysics").classList.add("d-none");
  getElement("#thChemistry").classList.add("d-none");
  getElement("#thMediumScore").classList.add("d-none");
  getElement("#thSumSalary").classList.add("d-none");
  getElement("#thNameCompany").classList.remove("d-none");
  getElement("#thInvoiceValue").classList.remove("d-none");
  getElement("#thReview").classList.remove("d-none");
};
// Form
window.handlePersonForm = function () {
  getElement(".studentForm").classList.add("d-none");
  getElement(".employeeForm").classList.add("d-none");
  getElement(".customerForm").classList.add("d-none");
};

window.handleStudentForm = function () {
  getElement(".studentForm").classList.remove("d-none");
  getElement(".employeeForm").classList.add("d-none");
  getElement(".customerForm").classList.add("d-none");
};

window.handleEmployeeForm = function () {
  getElement(".studentForm").classList.add("d-none");
  getElement(".employeeForm").classList.remove("d-none");
  getElement(".customerForm").classList.add("d-none");
};

window.handleCustomerForm = function () {
  getElement(".studentForm").classList.add("d-none");
  getElement(".employeeForm").classList.add("d-none");
  getElement(".customerForm").classList.remove("d-none");
};
export {
  handlePersonTable,
  handleStudentTable,
  handleEmployeeTable,
  handleCustomerTable,
  handlePersonForm,
  handleStudentForm,
  handleEmployeeForm,
  handleCustomerForm,
};
