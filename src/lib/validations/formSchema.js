import * as Yup from 'yup';

export const paymentOptionsSchema = Yup.object().shape({
  fullName: Yup.string().required("Fullname is required"),
  email: Yup.string().email("Invalid Email address").required("Email is required"),
  mobileNumber: Yup.string()
    .required("Mobile number is required!")
    .min(8, "Mobile number is too short")
    .max(15, "Mobile number is too long"),
});

export const newsLetterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email address").required("Email is required"),
});