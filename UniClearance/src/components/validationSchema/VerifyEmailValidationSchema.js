import * as yup from 'yup';

const VerifyEmailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email Address is Required'),
});
export default VerifyEmailValidationSchema;
