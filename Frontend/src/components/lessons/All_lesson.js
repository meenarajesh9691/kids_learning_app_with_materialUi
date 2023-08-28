import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  CardMedia,
  Button,
  Container,
  CardActions,
  CardActionArea,
  CardContent,
  Card,
  Typography,
  Unstable_Grid2 as Grid,
  SvgIcon,
  Stack,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import React, { useContext, useEffect, useState } from "react";
import axios from "../../../axiosconfig.js";
import { useRouter as page } from "next/navigation.js";
import { useRouter } from "next/router.js";
import Link from "next/link.js";
// import userContext from "src/contexts/user/userContext.js";

const All_lesson = () => {
  const router = useRouter();
  const changePage = page();
  // const [user, setUser] = useContext(userContext);
  const [getLesson, setGetLesson] = useState([]);
  const { id } = router.query;
  //  console.log( id);

  // ------------Find All Lesson--------
  const findLesson = async (req, res) => {
    const allLesson = await axios.get("/getLessons");
    setGetLesson(allLesson.data.data);
  };
  useEffect(() => {
    findLesson();
  }, []);

  getLesson.map((lesson) => {
    // console.log(lesson.subject_id);
    const subject_id = lesson.subject_id;
    // console.log(subject_id);
  });

  // ---------------Delete Lesson-----------------
  const deleteHandler = async (id) => {
    const lessonDelete = await axios.get(`/deleteLesson/${id}`);
    // console.log(lessonDelete.data.message);
    // console.log(lessonDelete);
    if (lessonDelete.data.message === "Lesson delete") {
      findLesson();
      alert("Lesson Delete Successfully");
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" marginTop={5} spacing={4}>
          <Stack spacing={10}>
            <Typography variant="h4">Lessons</Typography>
            <Stack alignItems="center" direction="row" spacing={1}></Stack>
          </Stack>
          <div>
            <Button
              startIcon={
                <SvgIcon fontSize="small">
                  <PlusIcon />
                </SvgIcon>
              }
              variant="contained"
              onClick={() => {
                changePage.push(`/lessons/add_lesson/${id}`);
              }}
            >
              Add
            </Button>
          </div>
        </Stack>
        <Grid container spacing={3}>
          {getLesson.map(
            (lesson) =>
              id === lesson.subject_id && (
                <Grid item xs={3} key={lesson._id}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      ":hover": {
                        boxShadow: "10px 10px 20px #ccc",
                      },
                    }}
                  >
                    <CardActionArea
                      onClick={() => {
                        router.push(`/lessons/lessonDetails/${lesson._id}`);
                      }}
                    >
                      <CardContent>
                        <Typography gutterBottom variant="h3" component="div" textAlign="center">
                          {lesson.title}
                        </Typography>
                      </CardContent>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://img.freepik.com/free-vector/children-holding-english-letters_1308-50014.jpg"
                        alt="green iguana"
                      />
                    </CardActionArea>
                    <CardActions
                      style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}
                    >
                      <Button size="small" color="success" variant="contained">
                        <Link
                          href={`/lessons/editLesson/${lesson._id}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Edit
                        </Link>
                      </Button>
                      <Button
                        size="small"
                        color="success"
                        variant="contained"
                        onClick={() => deleteHandler(lesson._id)}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
          )}
        </Grid>
      </Container>
    </>
  );
};

All_lesson.getLayout = (All_lesson) => <DashboardLayout>{All_lesson}</DashboardLayout>;

export default All_lesson;
