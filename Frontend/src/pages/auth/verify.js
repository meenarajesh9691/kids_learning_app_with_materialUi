import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "../../../axiosconfig";

const verify = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [pin, setPin] = useState("");

  const signupHandler = () => {
    router.push("/auth/register");
  };
  
  const verifyHandler = async () => {
    try {
      await axios.post("/send-OTP");
    //   const data = await axios.get("/kidsData");
    //  const OTP = data.data.userDetails.otp;
    //  if(OTP !== ""){
    //   alert("OTP Send Successfully!!")
    //  }
    } catch (error) {
      console.log(error);
    }
  };

  const subjectHandler = async (e, req) => {
    e.preventDefault();
    const data = await axios.get("/kidsData");
    setPin(data.data.userDetails.otp);
    if (pin === otp && otp !== "") {
      // router.push("/kidsSubject");
      router.push('/kids/kidsHome')
    }

    if (pin !== otp) {
      alert("Please Enter Valid OTP!!");
    }
    if (otp === "") {
      alert("Please Enter OTP!!");
    }
  };

  return (
    <>
      <div className="container-sm  ">
        <div className="row ">
          <div className="content_box col  w-50 text-center  d-flex flex-column  align-items-center">
            <h1 className="heading mt-5">
              <span className="edu_clr">Kids</span> <span className="text-dark">Learning</span>{" "}
              <span className="care_clr">App</span> <br />
            </h1>
            <p className=" pt-4 pb-4 fs-5 text-info">ONE LAST STEP, PLEASE CHECK YOUR EMAIL</p>

            <form onSubmit={subjectHandler}>
              <input
                placeholder="Enter OTP"
                name="otp"
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                className="form-control"
              />
              <button className="btn btn-success m-2">Submit</button>
            </form>

            <button className="btn btn-success btn-lg w-50 mt-5" onClick={signupHandler}>
              Logout/Register With New Email
            </button>
            <br />
            <button onClick={verifyHandler} className="btn btn-success btn-lg w-50">
              RE-send Email
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default verify;
