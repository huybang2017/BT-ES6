class Person {
  constructor(name, regency, address, id, email) {
    this.name = name;
    this.regency = regency;
    this.address = address;
    this.id = id;
    this.email = email;
  }
}
class Student extends Person {
  constructor(name, regency, address, id, email, math, physics, chemistry) {
    super(name, regency, address, id, email);
    this.math = Number(math);
    this.physics = Number(physics);
    this.chemistry = Number(chemistry);
  }
  mediumScore() {
    let mediumScoreStudent = (this.math + this.physics + this.chemistry) / 3
    return mediumScoreStudent.toFixed(2);
  }
}
class Employee extends Person {
  constructor(name, regency, address, id, email, dateOfWork, salaryOneDay) {
    super(name, regency, address, id, email);
    this.dateOfWork = Number(dateOfWork);
    this.salaryOneDay = Number(salaryOneDay);
  }
  sumSalary() {
    let sumSalaryEmployee = this.dateOfWork * this.salaryOneDay
    return sumSalaryEmployee.toLocaleString();
  }
}
class Customer extends Person {
  constructor(
    name,
    regency,
    address,
    id,
    email,
    nameCompany,
    review,
    invoiceValue
  ) {
    super(name, regency, address, id, email);
    this.nameCompany = nameCompany;
    this.review = review;
    this.invoiceValue = Number(invoiceValue);
  }
}
export { Person, Student, Employee, Customer };
