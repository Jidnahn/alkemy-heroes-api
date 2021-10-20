import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import SearchList from "./SearchList";

const SearchForm = () => {
  const [name, setName] = useState("");

  return (
    <div className="container">
      <Formik
        initialValues={{ name: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Hero name is required"),
        })}
        onSubmit={(values) => setName(values.name)}
      >
        <Form>
          <label className="form-label">
            Please input the name of the hero you are looking for:
          </label>

          <Field
            className="form-control"
            name="name"
            type="text"
            placeholder="batman"
          />
          <div>
            <ErrorMessage name="name" />
          </div>

          <button type="submit" className="btn btn-dark my-2">
            Submit
          </button>
        </Form>
      </Formik>
      <SearchList name={name} />
    </div>
  );
};

export default SearchForm;
