import * as Yup from "yup";
import { pinCodeRegExp, passwordRegExp } from "./RegexCode";

export const validationRules = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "*First name must have at least 2 characters")
    .max(20, "*First name can't be longer than 20 characters")
    .required("*First name is required"),
  lastName: Yup.string()
    .min(2, "*Last name must have at least 2 characters")
    .max(20, "*Last name can't be longer than 20 characters")
    .required("*Last name is required"),
  email: Yup.string()
    .email("*Must be a valid email address")
    .required("*Email is required"),
  city: Yup.string()
    .min(2, "*City name must have at least 2 characters")
    .max(20, "*City name can't be longer than 20 characters")
    .required("*City name is required"),
  state: Yup.string()
    .min(2, "*State name must have at least 2 characters")
    .max(20, "*State name can't be longer than 20 characters")
    .required("*State name is required"),
  zip: Yup.string("Must be number")
    .min(6, "*Pincode must be 6 digit")
    .max(6, "*Pincode must be 6 digit")
    .required("*Zip Code  is required")
    .matches(pinCodeRegExp, "*Must be Positive Number"),
  password: Yup.string()
    .required("*Password  is required")
    .matches(
      passwordRegExp,
      "*Password min be 8 Character,Password max be 20 Character,At least one uppercase character ,At least one lowercase character ,At least one digit ,At least one special character  "
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "*Passwords must match")
    .required("*Confirm Password is required"),
  terms: Yup.bool().required().oneOf([true], "*Terms must be accepted"),
  gender: Yup.string().required("*Select one Value"),
  project: Yup.string().required("*Please Select a Project!"),
  skills: Yup.array().min(1, "*Please Select at least One Skill").required(),

  details: Yup.string()
    .min(6, "*Enter Atleast 6 Characters")
    .max(100, "*Enter Maximum 100 Characters")
    .required("*Employee details  is required"),

  dateOfJoining: Yup.date()
    .min(new Date("01/01/2019"), " *Must grater than '01/01/2019'")
    .max(new Date(), "*Please check the Date of Joining")
    .required("* Date of joining is required"),
});
