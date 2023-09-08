// import Head from "next/head";
// import NextLink from "next/link";
// import { useRouter } from "next/navigation";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
// import { useAuth } from "src/hooks/use-auth";
// import { Layout as AuthLayout } from "src/layouts/auth/layout";
// import axios from "../../../axiosconfig.js";

// const Page = () => {
//   const router = useRouter();
//   const auth = useAuth();
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       name: "",
//       password: "",
//       submit: null,
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
//       name: Yup.string().max(255).required("Name is required"),
//       password: Yup.string().max(255).required("Password is required"),
//     }),
//     onSubmit: async (values, helpers) => {
//       let kidsData = { email: values.email, name: values.name, password: values.password };

//       try {
//         const result = await axios.post("/signup", kidsData);
//         if (result.data.message === "kids created ") {
//           alert("Kids Created Successfully!");
//         }
//         // let res = await auth.signUp(kidsData);
//         router.push("/auth/login");
//       } catch (err) {
//         helpers.setStatus({ success: false });
//         helpers.setErrors({ submit: err.message });
//         helpers.setSubmitting(false);
//       }
//     },
//   });

//   return (
//     <>
//       <Head>
//         <title>Register | Kids_Learning_App</title>
//       </Head>
//       <Box
//         sx={{
//           flex: "1 1 auto",
//           alignItems: "center",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <Box
//           sx={{
//             maxWidth: 550,
//             px: 3,
//             py: "100px",
//             width: "100%",
//           }}
//         >
//           <div>
//             <Stack spacing={1} sx={{ mb: 3 }}>
//               <Typography variant="h4">Register</Typography>
//               <Typography color="text.secondary" variant="body2">
//                 Already have an account? &nbsp;
//                 <Link component={NextLink} href="/auth/login" underline="hover" variant="subtitle2">
//                   Log in
//                 </Link>
//               </Typography>
//             </Stack>
//             <form noValidate onSubmit={formik.handleSubmit}>
//               <Stack spacing={3}>
//                 <TextField
//                   error={!!(formik.touched.name && formik.errors.name)}
//                   fullWidth
//                   helperText={formik.touched.name && formik.errors.name}
//                   label="Name"
//                   name="name"
//                   onBlur={formik.handleBlur}
//                   onChange={formik.handleChange}
//                   value={formik.values.name}
//                 />
//                 <TextField
//                   error={!!(formik.touched.email && formik.errors.email)}
//                   fullWidth
//                   helperText={formik.touched.email && formik.errors.email}
//                   label="Email Address"
//                   name="email"
//                   onBlur={formik.handleBlur}
//                   onChange={formik.handleChange}
//                   type="email"
//                   value={formik.values.email}
//                 />
//                 <TextField
//                   error={!!(formik.touched.password && formik.errors.password)}
//                   fullWidth
//                   helperText={formik.touched.password && formik.errors.password}
//                   label="Password"
//                   name="password"
//                   onBlur={formik.handleBlur}
//                   onChange={formik.handleChange}
//                   type="password"
//                   value={formik.values.password}
//                 />
//               </Stack>
//               {/* {formik.errors.submit && (
//                 <Typography color="error" sx={{ mt: 3 }} variant="body2">
//                   {formik.errors.submit}
//                 </Typography>
//               )} */}
//               <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
//                 Continue
//               </Button>
//             </form>
//           </div>
//         </Box>
//       </Box>
//     </>
//   );
// };

// Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

// export default Page;

// ===========================

import React, { useState } from "react";
import axios from "../../../axiosconfig";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";

const signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const kids = {
      name,
      phone,
      email,
      password,
    };
    try {
      const res = await axios.post("/signup", kids);
      // console.log("RES===>>", res);
      if (res.data.message === "kids created ") {
        alert("Kids Created Successfully!");
        router.push("/auth/age");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="box">
        <Navbar />

        <div className="form_div bg-light  d-flex flex-column align-items-center position-absolute  top-50 start-50 translate-middle ">
          <h1 className="">Signup</h1>

          {/* <div className="w-100 d-flex justify-content-evenly alert alert-success ">
            Register As
            <input
              type="radio"
              value="User"
              name="userType"
              onChange={(e) => {
                setUserType(e.target.value);
              }}
            />
            User
            <input
              type="radio"
              value="Admin"
              name="userType"
              onChange={(e) => {
                setUserType(e.target.value);
              }}
            />
            Admin
          </div> */}

          <form>
            {/* {userType === "Admin" ? (
              <div className=" mt-4 mb-4">
                <input
                  type="text"
                  className="  form-control "
                  placeholder="Secret Key "
                  // onChange={handleForm}
                  onChange={(e) => {
                    setSecretKey(e.target.value);
                  }}
                />
              </div>
            ) : null} */}

            <div className=" mt-4 mb-4">
              <input
                type="text"
                className=" input form-control "
                placeholder="Full Name "
                name="name"
                // onChange={handleForm}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className=" mt-4 mb-4">
              <input
                type="phone"
                className="input form-control  "
                placeholder="Mobile Number "
                name="phone"
                // onChange={handleForm}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className=" mt-4 mb-4">
              <input
                type="email"
                className="input form-control "
                placeholder="Email Id"
                name="email"
                // onChange={handleForm}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className=" mt-4 mb-4">
              <input
                type="password"
                className="input form-control "
                placeholder="Password"
                name="password"
                // onChange={handleForm}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="container-fluid text-center">
              <button
                type="submit"
                className="btn btn-outline-success btn-lg p-20px"
                onClick={SubmitHandler}
              >
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default signup;
