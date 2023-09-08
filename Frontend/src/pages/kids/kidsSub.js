import React, { useEffect, useState } from "react";
import axios from "../../../axiosconfig";
import { useRouter } from "next/navigation";

const kidsSub = () => {
  const router = useRouter();
  const [getSubject, setGetSubject] = useState([]);

  // console.log(getSubject);
  // ------------Find All Subject--------
  const findSubject = async (req, res) => {
    const allSub = await axios.get("/getSubjects");
    setGetSubject(allSub.data.data);
  };
  useEffect(() => {
    findSubject();
  }, []);

  const lessonHandler = () => {
    router.push("/kids/kidsLesson");
  };

  
  return (
    <>
      <div className="w-100 h-100 bg-dark">
        <div className="subBox_img  ">
          <div className="learn_text">
            <span className="text-secondary">L</span>
            <span className="text-success">E</span>
            <span className="text-danger">A</span>
            <span className="text-info">R</span>
            <span className="text-primary">N </span>
            <span className="text-success">I</span>
            <span className="text-danger">T</span>
          </div>
        </div>
        <div className="subBox_content ">
          {getSubject.map((data) => (
            <div key={data._id} className="subBox" onClick={lessonHandler}>
              <h1>{data.title}</h1>
              <div>
                <img height={200} src={`http://localhost:8080/images/${data.image}`} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default kidsSub;
