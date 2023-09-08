import { red } from "@mui/material/colors";
import React from "react";
import { useRouter } from "next/navigation";
import { Avatar } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";

const Home = () => {
const router = useRouter()
 const loginHandler = ()=>{
  router.push('/auth/login')
 }
 const signupHandler = ()=>{
  router.push('/auth/register')
 }
  return (
    <>
      <div className="container-sm  ">
      
        
        <div className="row ">
          <div className="content_box col  w-50 text-center  d-flex flex-column  align-items-center">
            <h1 className="heading mt-5">
              <span className="edu_clr">Education</span> <span className="text-light">and</span>{" "}
              <span className="care_clr">Care</span> <br />
              <span className="text-light">for Your Kids</span>
            </h1>
            {/* <p className=" pt-4 pb-4 fs-5 text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos
              aliquid similique, ipsa quidem dicta. <br /> Et ad, earum fugiat
              consectetur ea ipsa quod vero provident inventore, iste eaque
              alias. Doloribus?
            </p> */}
            <button onClick={signupHandler} className="btn btn-success btn-lg w-50 mt-5">Get Started</button>
            <br />
            <button onClick={loginHandler} className="btn btn-success btn-lg w-50">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
