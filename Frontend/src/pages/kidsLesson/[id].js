import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Navbar from "../../components/Navbar.js";
import axios from "../../../axiosconfig.js";
import { useRouter } from "next/router.js";

const kidsLesson = () => {
  const router = useRouter();
  const [getLesson, setGetLesson] = useState([]);
  const { id } = router.query;
  //  console.log( id);

  // ------------Find All Lesson--------
  const findLesson = async (req, res) => {
    const allLesson = await axios.get("/getLessons");
    setGetLesson(allLesson.data.data);
    // console.log(allLesson.data.data);
  };
  useEffect(() => {
    findLesson();
  }, []);

  getLesson.map((lesson) => {
    // console.log(lesson.subject_id);
    const subject_id = lesson.subject_id;
    // console.log(subject_id);
  });

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
          <h1 className="text-center pb-3 text-warning"> Learn Lesson</h1>

          <Slider {...settings}>
            {getLesson.map(
              (lesson) =>
                id === lesson.subject_id && (
                  <div
                    key={lesson._id}
                    onClick={() => {
                      router.push(`/kidsLesson/${lesson._id}`);
                    }}
                  >
                    <div id="lesson" className="slide_box">
                      <h1 className="english text-center">{lesson.lessonTitle}</h1>
                      <img
                        className="card-img-top"
                        height="250"
                        src={`http://localhost:8080/images/${lesson.image}`}
                      />
                    </div>
                  </div>
                )
            )}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default kidsLesson;
