import * as yup from 'yup';

const ResetPasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  password_confirmation: yup.string().required('password does not match'),
});
export default ResetPasswordValidationSchema;
