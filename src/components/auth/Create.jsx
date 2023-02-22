// import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../lib/inti-firebase";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { Formik } from "formik";
import * as yup from "yup";
//import { useHistory } from "react-router-dom";

import logo from "../../assets/logo2.png";

const validationSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Your password is too short."),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

function Create() {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({
  //     resolver: yupResolver(validationSchema),
  //   });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [newpassword, setNewPassword] = useState("");
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //  } = useForm({
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //     newpassword: "",
  //   },
  //   // resolver: yupResolver(schema),
  // });
  //const history = useHistory();

  //const onSubmit = (data) => console.log(data);
  // };
  // function handleSubmit(e) {
  //   // e.preventDefault(false);
  //   if ((email === "", password === "", newpassword === "")) {
  //     return;
  //   }
  // const userCollRef = collection(db, "user");
  // addDoc(userCollRef, { email, password })
  //   .then((response) => {
  //     console.log(response.id);
  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //   });

  const navigate = useNavigate();
  // const handleGoHome = () => {
  //   navigate("/"); // New line
  // };

  // const onSubmit = (data) => {
  //   alert(JSON.stringify(data));
  // };
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="https://wcu.edu.et/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
          WACHEMO UNIVERSTIY
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>

            <Formik
              initialValues={{
                email: "",
                password: "",
                passwordConfirmation: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
                navigate("../../Home"); // Navigate to the next page
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <form
                  // onSubmit={handleSubmit(onSubmit)}
                  // onSubmit={handleSubmit((values) => {
                  //   alert(JSON.stringify(values, null, 2));
                  // })}
                  className="p-6 space-y-4 md:space-y-6 sm:p-8"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email Address"
                      // value={email}
                      // {...register("email")}
                      id="email"

                      // onChange={(e) => setEmail(e.target.value)}
                    />

                    <p className="text-red-500 inline-flex">
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      // value={password}
                      // {...register("password")}
                      // id="password"

                      // onChange={(e) => setPassword(e.target.value)}
                    />

                    <p className="text-red-500 inline-flex">
                      {errors.password && touched.password && (
                        <div>{errors.password}</div>
                      )}
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      autoComplete="newpassword"
                      // {...register("passwordConfirmation")}
                      // id="confrim-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                      // onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <p className="text-red-500 inline-flex">
                      {errors.password && touched.passwordConfirmation && (
                        <div>{errors.passwordConfirmation}</div>
                      )}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          href="/"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    // onClick={handleGoHome}
                    className="w-full text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="/"
                      className="text-blue-700  hover:underline dark:text-blue-500"
                    >
                      Login here
                    </a>
                  </p>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Create;
