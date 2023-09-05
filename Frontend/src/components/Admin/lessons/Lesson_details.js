import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const Lesson_details = () => {
  const [video, setVideo] = useState(null);
  // console.log(video);
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const alphabetToVideoUrl = {
    A: "https://youtu.be/I_3mbra4dHU",
    B: "https://youtu.be/rS5IGQ1nnr0",
    C: "https://youtu.be/Gdt4IleVyA4",
  };

  const handleAlphabetClick = (alphabet) => {
    console.log(alphabet);
    const videoUrl = alphabetToVideoUrl[alphabet];
   

    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = videoUrl;
    // videoPlayer.play();
    setVideo(videoPlayer);
  };

  return (
    <>
      <Grid item xs={12} container spacing={2} style={{ marginTop: "50px" }}>
        <Typography variant="h3" textAlign="center" style={{ width: "100%" }}>
          Learn Lesson
        </Typography>
        <Grid item lg={12} sm={12} xs={12} textAlign="center">
          {alphabets.map((alphabet) => (
            <Button
              className=" alphabet_btn "
              key={alphabet}
              onClick={() => handleAlphabetClick(alphabet)}
              variant="contained"
              size="large"
              style={{ margin: "10px" }}
            >
              {alphabet}
            </Button>
          ))}
        </Grid>
        <Grid item lg={12} sm={12} xs={12} style={{ textAlign: "center" }}>
          <video width={600} id="videoPlayer" src={video} controls></video>

          {/* <ReactPlayer id="videoPlayer" url='https://youtu.be/I_3mbra4dHU' controls={true} /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Lesson_details;
