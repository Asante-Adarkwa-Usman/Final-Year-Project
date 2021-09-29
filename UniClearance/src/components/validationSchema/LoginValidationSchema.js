import * as yup from 'yup';

const LoginValidationSchema = yup.object().shape({
  username: yup.string().required('Student ID field is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
export default LoginValidationSchema;
