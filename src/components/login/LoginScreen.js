import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  return (
    <div className="container">
      <h1 className="my-3">Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={async (values) =>
          axios({
            method: "post",
            url: process.env.REACT_APP_LOGIN_URL,
            data: values,
          })
            .then(({ data }) =>
              dispatch({
                type: "login",
                payload: data,
              })
            )
            .catch((error) => {
              console.log(error);
              alert("Error: Please provide valid email and password");
            })
        }
      >
        <Form>
          <label className="form-label">Email:</label>
          <Field
            className="form-control"
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            autoComplete="off"
          />
          <div>
            <ErrorMessage name="email" />
          </div>
          <label className="form-label">Password:</label>
          <Field
            className="form-control"
            name="password"
            type="password"
            placeholder="*****"
            autoComplete="off"
          />
          <div>
            <ErrorMessage name="password" />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginScreen;
