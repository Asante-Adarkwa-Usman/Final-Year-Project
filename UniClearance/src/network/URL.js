import {getDeptID, getToken} from '../components/getStoreData';
let deptID = getDeptID();
let token = getToken();
const baseURL = 'https://uniclearance-backend.herokuapp.com';
export const loginURL = `${baseURL}/auth/login/student`;
export const departmentURL = `${baseURL}/departments`;
// export const departmentClearanceURL = `${baseURL}/department_clearance/department/${deptID}`; //add department id
export const studentURL = `${baseURL}/students`;
export const clearedStudentDeptURL = `${baseURL}/department_clearance/clear_student`;
export const userURL = `${baseURL}/users`;
export const libraryClearanceURL = `${baseURL}/libary_clearance`;
export const departmentIssuesURL = `${baseURL}/department-issues`;
export const verifyEmailURL = `${baseURL}/reset_password/verify_email`;
export const otpVerifyURL = `${baseURL}/verify_otp/${token}`; //pass token
export const resetPasswordURL = `${baseURL}/reset_password/reset/${token}`; //pass token
