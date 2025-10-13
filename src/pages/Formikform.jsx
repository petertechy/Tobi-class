import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup"

//get data from users through the inputs, store data in a variable, submit form, validate the form, give user feedback and error responses.

const Formikform = () => {
  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    // validate: (values)=>{
    //   let errors = {}
    //   if(values.firstname == ""){
    //       errors.firstname = "This field is required"
    //   }else if(values.firstname.length < 5){
    //     errors.firstname = "Must be at least 5 Character"
    //   }
    //   if(values.lastname == ""){
    //       errors.lastname = "This field is required"
    //   }else if(values.lastname.length < 5){
    //     errors.lastname = "Must be at least 5 Character"
    //   }
    //   if(values.email == ""){
    //       errors.email = "This field is required"
    //   }
    //   if(values.password == ""){
    //       errors.password = "This field is required"
    //   }
    //   return errors;
    // }
    validationSchema:yup.object({
      firstname: yup.string().required("This is a required field").min(5, "Must be at least 5 Character"),
      lastname: yup.string().required("This is a required field").min(5, "Must be at least 5 Character"),
      email: yup.string().required("This is a required field").email("Must be a valid email"),
      password: yup.string().required("This is a required field").min(5, "Must be at least 5 Character"),
    })

  });

    // console.log(formik.touched);
  return (
    <>
      <div className="mx-auto col-7 shadow border p-3 my-4">
        <h1>Sign Up Page</h1>
        <form action="" onSubmit={formik.handleSubmit}>
          <input
            className={formik.touched.firstname && formik.errors.firstname ? "form-control mb-3 is-invalid" : "form-control mb-3"}
            type="text"
            placeholder="First Name"
            name="firstname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {/* {formik.touched.firstname ? <small className="text-danger">{formik.errors.firstname}</small> : ""} */}

          {formik.touched.firstname && <small className="text-danger">{formik.errors.firstname}</small> }
          <input
            className={formik.touched.lastname && formik.errors.lastname ? "form-control mb-3 is-invalid" : "form-control mb-3"}
            type="text"
            placeholder="Last Name"
            name="lastname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.touched.lastname ? <small className="text-danger">{formik.errors.lastname}</small> : ""}
          <input
            className={formik.touched.email && formik.errors.email ? "form-control mb-3 is-invalid" : "form-control mb-3"}
            type="text"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.touched.email ? <small className="text-danger">{formik.errors.email}</small> : ""}
          <input
            className={formik.touched.password && formik.errors.password ? "form-control mb-3 is-invalid" : "form-control mb-3"}
            type="text"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password ? <small className="text-danger">{formik.errors.password}</small> : ""}
          <button className="btn btn-success w-100 " type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Formikform;