import * as React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { BACKEND_URL } from '../constants';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
};

const labelStyle = 'p-5';
const inputStyle = 'p-1 pl-3 border border-gray-500	rounded-lg';
const buttonStyle =
  'py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700';

const postEmployeeDetails = (details: Values) => {
  return fetch(`${BACKEND_URL}/employee`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(details),
  });
};

const EmployeeDetailsForm = () => {
  return (
    <div>
      <h1 className="p-5 text-xl">Enter Employee Details</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(
          values: Values,
          { setSubmitting, resetForm }: FormikHelpers<Values>,
        ) =>
          postEmployeeDetails(values).finally(() => {
            setSubmitting(false);
            resetForm();
            alert('Employee details posted successfully!');
          })
        }
      >
        <Form>
          <label htmlFor="firstName" className={labelStyle}>
            First Name
          </label>
          <Field
            id="firstName"
            name="firstName"
            className={inputStyle}
            placeholder="John"
          />

          <label htmlFor="lastName" className={labelStyle}>
            Last Name
          </label>
          <Field
            id="lastName"
            name="lastName"
            className={inputStyle}
            placeholder="Doe"
          />

          <label htmlFor="email" className={labelStyle}>
            Email
          </label>
          <Field
            id="email"
            name="email"
            className={inputStyle}
            placeholder="john@acme.com"
            type="email"
          />

          <label htmlFor="location" className={labelStyle}>
            Location
          </label>
          <Field
            id="location"
            name="location"
            className={inputStyle}
            placeholder="Pune"
          />

          <button type="submit" className={`${buttonStyle} ml-5`}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EmployeeDetailsForm;
