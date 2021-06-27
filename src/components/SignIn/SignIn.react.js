import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { firebase } from '../../firebase';

export const SignIn = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const submitForm = values => {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        // show success toast
        history.push('/dashboard');
      })
      .catch(error => {
        setLoading(false);
        alert(error);
        // show toasts
      });
  };

  const formik = useFormik({
    initialValues: {
      email: 'test@gmail.com',
      password: 'test123',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('The email is required'),
      password: Yup.string().required('The password is required'),
    }),
    onSubmit: values => {
      /// go to server with field values
      setLoading(true);
      submitForm(values);
    },
  });

  return (
    <div className="conatainer">
      <div className="signin_wrapper" style={{ margin: '100px' }}>
        <form onSubmit={formik.handleSubmit}>
          <h2>Please login</h2>
          <input
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error_label">{formik.errors.email}</div>
          ) : null}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          {formik.touched.password && formik.errors.password ? (
            <div className="error_label">{formik.errors.password}</div>
          ) : null}

          {loading ? (
            <CircularProgress color="secondary" className="progress" />
          ) : (
            <button type="submit">Log in</button>
          )}
        </form>
      </div>
    </div>
  );
};
