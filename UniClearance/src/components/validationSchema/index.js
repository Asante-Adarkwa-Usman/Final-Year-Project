import * as yup from 'yup';

const LoginValidationSchema = yup.object().shape({
  studentId: yup
    .string()
    .max(10, ({max}) => `Please, student id must be ${max} characters`)
    .required('Student ref number is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
export default LoginValidationSchema;
