import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import $ from "jquery";
import Router from "next/router";
import Navbar from "../components/Navbar.js";
import axios from "../../axiosconfig.js";
import { useRouter } from "next/navigation.js";
import { CardMedia } from "@mui/material";

const kidsSubject = () => {
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="box">
        <Navbar />
        <div className="container-lg mt-4 rounded-5 p-5 bg-danger">
          <h1 className="text-center pb-3 text-warning"> SUBJECTS</h1>

          <Slider {...settings}>
            {getSubject.map((data) => (
              <div
                key={data._id}
                onClick={() => {
                  router.push(`/kidsLesson/${data._id}`);
                }}
              >
                <div className="slide_box">
                  <h1 className="english text-center">{data.title}</h1>

                  <CardMedia
                    component="img"
                    height="250"
                    image={`http://localhost:8080/images/${data.image}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default kidsSubject;
