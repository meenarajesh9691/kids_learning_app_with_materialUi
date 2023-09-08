import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation.js";
import { Avatar } from "@mui/material";
import { Box, flexbox } from "@mui/system";

const kidsSubject = () => {
  const router = useRouter();

  const subHandler = () => {
    // router.push("/kidsSubject");
    router.push("/kids/kidsSub");
  };
  const homeHandler = () => {
    router.push("/");
  };

  return (
    <>
      <div className="box">
        {/* <Navbar /> */}
        {/* <div className=" form_div bg-light  d-flex flex-column align-items-center position-absolute  top-50 start-50 translate-middle w-50 h-50 "> */}
        <div className="container  ">
          <div className="row ">
            <div className="col-xl-6  d-flex align-items-center justify-content-evenly ">
              <div
                onClick={subHandler}
                className=" circle1  rounded-circle d-flex flex-column align-items-center justify-content-around"
              >
                <div className="icon1"></div>
                <h1 className="text-light fs-2">Learn It</h1>
              </div>
            </div>

            <div className="col-xl-6  min-vh-100  d-flex align-items-center justify-content-evenly">
              <div
                onClick={homeHandler}
                className=" circle2  rounded-circle d-flex flex-column align-items-center justify-content-around"
              >
                <div className="icon2"></div>
                <h1 className="text-light fs-2">Home</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default kidsSubject;
