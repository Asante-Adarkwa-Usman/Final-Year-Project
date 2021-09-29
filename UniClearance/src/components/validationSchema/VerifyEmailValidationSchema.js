import * as yup from 'yup';

const VerifyEmailValidationSchema = yup.object().shape({
  username: yup.string().required('Student ID field is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email Address is Required'),
});
export default VerifyEmailValidationSchema;
