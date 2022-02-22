import React, { useState } from "react";
import { Form, Button, Container, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import { validationRules } from "./ValidationSchema";
import Moment from "moment";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const FormValidation = () => {
  const [details, setDetails] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  return (
    <>
      <Container
        fluid
        style={{
          padding: "30px",
          paddingTop: "0px",
          paddingBottom: "15px",
        }}
      >
        <div>
          <h5 className="mb-3">Employee Registration Form </h5>
          <span className="required">* Marked fields are manadatory</span>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            city: "",
            state: "",
            zip: "",
            password: "",
            confirmPassword: "",
            terms: false,
            gender: "",
            project: "",
            skills: [],
            details: "",
            dateOfJoining: "",
          }}
          validationSchema={validationRules}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // When button submits form and form is in the process of submitting, submit button is disabled
            setSubmitting(true);
            // Simulate submitting to database, shows us values submitted, resets form
            setTimeout(() => {
              alert(" Data is submitted successfully");
              console.log(values);
              setDetails(values);
              resetForm();
              setSubmitting(false);
            }, 1000);
          }}
          validateOnMount
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            resetForm,
            isValid,
          }) => (
            <Form onSubmit={handleSubmit} className="mt-3">
              {/*First Name input Field*/}
              {console.log(errors)}
              <Form.Group controlId="firstName" className="mb-3">
                <Form.Label>
                  First name <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  isInvalid={touched.firstName && errors.firstName}
                  isValid={touched.firstName && !errors.firstName}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>

              {/*Last Name input Field*/}
              <Form.Group controlId="lastName" className="mb-3">
                <Form.Label>
                  Last name <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  isInvalid={touched.lastName && errors.lastName}
                  isValid={touched.lastName && !errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>

              {/*Password input Field*/}
              <Form.Group controlId="password" className="mb-3">
                <Form.Label>
                  Password <span className="required">*</span>
                </Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    isInvalid={touched.password && errors.password}
                    isValid={touched.password && !errors.password}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <>
                        <VisibilityIcon /> Show
                      </>
                    ) : (
                      <>
                        <VisibilityOffIcon /> Hide
                      </>
                    )}
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              {/* Confirm Password input Field*/}
              <Form.Group controlId="confirmPassword" className="mb-3">
                <Form.Label>
                  Confirm password <span className="required">*</span>
                </Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    isInvalid={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    isValid={touched.confirmPassword && !errors.confirmPassword}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setConfirmShowPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <>
                        <VisibilityOffIcon /> Hide
                      </>
                    ) : (
                      <>
                        <VisibilityIcon /> Show
                      </>
                    )}
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              {/*Email input Field*/}
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>
                  Email<span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  isInvalid={touched.email && errors.email}
                  isValid={touched.email && !errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              {/*Date input Field*/}
              <Form.Group controlId="firstName" className="mb-3">
                <Form.Label>
                  Date of Joining <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="date"
                  name="dateOfJoining"
                  placeholder="dateOfJoining"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  max={Moment().format("YYYY-MM-DD")}
                  value={values.dateOfJoining}
                  isInvalid={touched.dateOfJoining && errors.dateOfJoining}
                  isValid={touched.dateOfJoining && !errors.dateOfJoining}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.dateOfJoining}
                </Form.Control.Feedback>
              </Form.Group>

              {/*City input Field*/}
              <Form.Group controlId="city" className="mb-3">
                <Form.Label>
                  City <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                  isInvalid={touched.city && errors.city}
                  isValid={touched.city && !errors.city}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>

              {/*State input Field*/}
              <Form.Group controlId="state" className="mb-3">
                <Form.Label>
                  State <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  placeholder="State"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.state}
                  isInvalid={touched.state && errors.state}
                  isValid={touched.state && !errors.state}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>

              {/*Zip input Field*/}
              <Form.Group controlId="zip" className="mb-3">
                <Form.Label>
                  Zip <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="zip"
                  placeholder="Zip Code"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.zip}
                  isInvalid={touched.zip && errors.zip}
                  isValid={touched.zip && !errors.zip}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Radio Button Field*/}
              <Form.Group className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Gender<span className="required">*</span>
                </Form.Label>

                <Form.Check
                  type="radio"
                  label="Male"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={handleChange}
                  checked={values.gender === "male"}
                  isInvalid={touched.gender && !!errors.gender}
                  feedbackType="invalid"
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="gender"
                  id="Female"
                  value="Female"
                  onChange={handleChange}
                  checked={values.gender === "Female"}
                  isInvalid={touched.gender && !!errors.gender}
                  feedback={errors.gender}
                  feedbackType="invalid"
                />
              </Form.Group>

              {/* Drop Down listField for */}
              <Form.Group className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Please Select Project <span className="required">*</span>
                </Form.Label>
                <Form.Select
                  aria-label="Floating label select example"
                  name="project"
                  value={values.project}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.project && errors.project}
                  isValid={touched.project && !errors.project}
                >
                  <option>Select project-----</option>
                  <option value="1">Education Project</option>
                  <option value="2">Finacial Project</option>
                  <option value="3">Health Care Project</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.project}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Drop Down listField for  MultiSelct*/}
              <Form.Group className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Please Select Skills <span className="required">*</span>
                </Form.Label>
                <Form.Select
                  aria-label="Floating label select example"
                  name="skills"
                  value={values.skills}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.skills && errors.skills}
                  isValid={touched.skills && !errors.skills}
                  multiple={true}
                >
                  <option>Open this select menu</option>
                  <option value="1">Java</option>
                  <option value="2">Html</option>
                  <option value="3">Css</option>
                  <option value="4">React</option>
                  <option value="5">Mysql</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.skills}
                </Form.Control.Feedback>
              </Form.Group>
              {/* TeaxtArea Field*/}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  Employee details <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="details"
                  placeholder="Employee details"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.details}
                  isInvalid={touched.details && errors.details}
                  isValid={touched.details && !errors.details}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.details}
                </Form.Control.Feedback>
              </Form.Group>
              {/* Checkbox Field for terms*/}
              <Form.Group className="mb-3" controlId="terms">
                <div className="d-flex">
                  <Form.Check
                    name="terms"
                    label="Agree to terms and conditions "
                    onChange={handleChange}
                    isInvalid={touched.terms && !!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    checked={values.terms}
                    id="terms"
                  />
                  <span className="required">*</span>
                </div>
              </Form.Group>
              <div className="d-flex align-items-center justify-content-center">
                {/*Submit button that is disabled after button is clicked,form is in the process of submitting*/}
                <Button
                  variant="primary"
                  type="submit"
                  className="m-2"
                  //  disabled={isSubmitting}
                  disabled={!isValid}
                >
                  Submit
                </Button>
                <Button
                  type="reset"
                  variant="danger"
                  className="mr-3"
                  onClick={(e) => resetForm()}
                >
                  Reset
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        <div>
          {Object.entries(details).map(([key, value], i) => {
            return <div key={i}> {value}</div>;
          })}
        </div>
      </Container>
    </>
  );
};

export default FormValidation;
