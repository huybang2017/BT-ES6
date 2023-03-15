import getELement from "./Help";

// Input validation

const VALID_STRING = "Thông tin không hợp lệ";
const NUMBER_STRING = "Chỉ được phép nhập số ở đây";
const NUMBER = /^[0-9]*$/;

function validPerson() {
  let flag = true;

  // kiểm tra loại người dùng
  let regency = getELement("#typeForm").selectedIndex;
  if (regency === 0) {
    flag = false;
    getELement("#notiType").innerHTML = "Vui lòng chọn loại người dùng";
  } else {
    getELement("#notiType").innerHTML = "";
  }

  // kiểm tra name
  let name = getELement("#name").value;
  if (!name) {
    flag = false;
    getELement("#notiName").innerHTML = VALID_STRING;
  } else {
    getELement("#notiName").innerHTML = "";
  }

  // kiểm tra address
  let address = getELement("#address").value;
  if (!address) {
    flag = false;
    getELement("#notiAddress").innerHTML = VALID_STRING;
  } else {
    getELement("#notiAddress").innerHTML = "";
  }

  // kiểm tra email
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let email = getELement("#email").value;
  if (!email) {
    flag = false;
    getELement("#notiEmail").innerHTML = VALID_STRING;
  } else if (!email.match(mailFormat)) {
    flag = false;
    getELement("#notiEmail").innerHTML = "Email không hợp lệ";
  } else {
    getELement("#notiEmail").innerHTML = "";
  }

  return flag;
}

function validStudent() {
  let flag = true;
  const SCORE_VALID = "Điểm phải nằm trong phạm vi từ 0 - 10";

  // kiểm tra điểm toán
  let math = getELement("#math").value;
  if (!math) {
    flag = false;
    getELement("#notiMath").innerHTML = VALID_STRING;
  } else if (Number(math) > 10 || Number(math) < 0) {
    flag = false;
    getELement("#notiMath").innerHTML = SCORE_VALID;
  } else {
    getELement("#notiMath").innerHTML = "";
  }

  // kiểm tra điểm hóa
  let chemistry = getELement("#chemistry").value;
  if (!chemistry) {
    flag = false;
    getELement("#notiChemistry").innerHTML = VALID_STRING;
  } else if (Number(chemistry) > 10 || Number(chemistry) < 0) {
    flag = false;
    getELement("#notiChemistry").innerHTML = SCORE_VALID;
  } else {
    getELement("#notiChemistry").innerHTML = "";
  }

  // kiểm tra điểm lý
  let physics = getELement("#physics").value;
  if (!physics) {
    flag = false;
    getELement("#notiPhysics").innerHTML = VALID_STRING;
  } else if (Number(physics) > 10 || Number(physics) < 0) {
    flag = false;
    getELement("#notiPhysics").innerHTML = SCORE_VALID;
  } else {
    getELement("#notiPhysics").innerHTML = "";
  }

  return flag;
}

function validEmployee() {
  let flag = true;

  // kiểm tra số ngày làm việc
  let dayOfWork = getELement("#dayOfWork").value;

  if (!dayOfWork) {
    flag = false;
    getELement("#notiDayOfWork").innerHTML = VALID_STRING;
  } else {
    getELement("#notiDayOfWork").innerHTML = "";
  }

  // kiểm tra lương ngày
  let salaryOneDay = getELement("#salaryOneDay").value;

  if (!salaryOneDay.trim()) {
    flag = false;
    getELement("#notiSalaryOneDay").innerHTML = VALID_STRING;
  } else if (!salaryOneDay.match(NUMBER)) {
    flag = false;
    getELement("#notiSalaryOneDay").innerHTML = NUMBER_STRING;
  } else {
    getELement("#notiSalaryOneDay").innerHTML = "";
  }

  return flag;
}

function validCustomer() {
  let flag = true;

  // kiểm tra tên công ty
  let nameCompany = getELement("#nameCompany").value;

  if (!nameCompany) {
    flag = false;
    getELement("#notiNameCompany").innerHTML = VALID_STRING;
  } else {
    getELement("#notiNameCompany").innerHTML = "";
  }

  // kiểm tra trị giá hóa đơn
  let invoiceValue = getELement("#invoiceValue").value;

  if (!invoiceValue.trim()) {
    flag = false;
    getELement("#notiInvoiceValue").innerHTML = VALID_STRING;
  } else if (!invoiceValue.match(NUMBER)) {
    flag = false;
    getELement("#notiInvoiceValue").innerHTML = NUMBER_STRING;
  } else {
    getELement("#notiInvoiceValue").innerHTML = "";
  }

  // kiểm tra đánh giá
  let review = getELement("#review").value;

  if (!review) {
    flag = false;
    getELement("#notiReview").innerHTML = VALID_STRING;
  } else {
    getELement("#notiReview").innerHTML = "";
  }

  return flag;
}

export { validPerson, validStudent, validEmployee, validCustomer };