// const validateEmail = (email: string) => {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };
import * as yup from 'yup';
import {parse, differenceInYears} from 'date-fns';

const today = new Date();
import mime from 'mime';
export const signinFormValidation = yup.object().shape({
  email: yup.string().email('invalid_email').required('req_email'),
  password: yup.string().required('req_pass').min(8, 'req_pass_short'),
});
export const forgotemailFormValidation = yup.object().shape({
  email: yup.string().email('invalid_email').required('req_email'),
});
export const renewpasswordFormValidation = yup.object().shape({
  password: yup.string().required('req_pass').min(8, 'weak_pass'),
  confirm_password: yup
    .string()
    .required('req_pass')
    .oneOf([yup.ref('password')], 'miss_match_pass'),
});
// Define Yup validation schema
export const SignupSchema = yup.object().shape({
    firstName: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name is required'),
    lastName: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Last name is required'),
    email: yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[\W_]/, 'Password must contain at least one special character')
      .required('Password is required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });
export const LoginSchema = yup.object().shape({
      email: yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: yup.string()
        .min(1, 'Password is required') 
        .required('Password is required'),
    });
export const ForgotPasswordSchema = yup.object().shape({
    email: yup.string()
      .email('Please enter a valid email address')
      .required('Email address is required'),
  });
export const ResetPasswordSchema = yup.object().shape({
    password: yup.string()
      .min(8, 'password_min_length') // Example: Password must be at least 8 characters
      .matches(/[a-z]/, 'password_lowercase')
      .matches(/[A-Z]/, 'password_uppercase')
      .matches(/[0-9]/, 'password_number')
      .matches(/[\W_]/, 'password_special_char')
      .required('password_required'),
    confirm_password: yup.string()
      .oneOf([yup.ref('password'), null], 'passwords_must_match')
      .required('confirm_password_required'),
  });

