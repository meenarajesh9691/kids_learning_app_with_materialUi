import React, { useEffect, useState } from "react";
import userContext from "./userContext.js";
import axios from "../../../axiosconfig.js";

const userProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const dataHandler = async () => {
    try {
      const res = await axios.get("/kidsData");
      // const res = await axios.post("/kidsData", { token: window.sessionStorage.getItem("token") });
      setUser(res.data.userDetails);
      // console.log(res.data.userDetails);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    dataHandler();
  },[]);



  return <userContext.Provider value={[user, setUser]}>{children}</userContext.Provider>;
};

export default userProvider;
