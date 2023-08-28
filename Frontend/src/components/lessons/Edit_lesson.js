import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Button,
  Container,
  CardContent,
  Card,
  Typography,
  Unstable_Grid2 as Grid,
  SvgIcon,
  Stack,
  TextField,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import React, { useEffect, useState } from "react";
import axios from "../../../axiosconfig.js";
import { useRouter as page } from "next/navigation.js";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import { Subject } from "@mui/icons-material";

const Edit_lesson = () => {
  const router = useRouter();
  const changePage = page();
  const [lesson, setLesson] = useState([]);
  const { id } = router.query;

  // -----------Find One Lesson------------
  const loadOneLesson = async () => {
    const sub = await axios.get(`/getLesson/${id}`);
    setLesson(sub.data.oneLesson);
    // console.log(sub.data);
  };

  useEffect(() => {
    loadOneLesson();
  }, []);

  const onChangeValue = async (e) => {
    setLesson({ ...lesson, [e.target.name]: e.target.value });
  };

  const editLessonDetails = async () => {
    const edit = await axios.post(`/editLesson/${id}`, lesson);
    changePage.push(`/subjects/allSub`);
  };
  return (
    <>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" marginTop={5} spacing={4}>
          <Stack spacing={1}>
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
            >
              Add
            </Button>
          </div>
        </Stack>
        <Card
          style={{ maxWidth: 450, margin: "50px auto" }}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <CardContent>
            <Box display="flex" flexDirection={"column"} maxWidth={400}>
              <Typography variant="h4" padding={3} textAlign={"center"}>
                Edit Lesson
              </Typography>

              <TextField
                onChange={(e) => onChangeValue(e)}
                name="title"
                value={lesson.title}
                margin="normal"
              />

              {/* <TextField
                onChange={(e) => onChangeValue(e)}
                name="email"
                value={lesson.email}
                margin="normal"
              /> */}
              <Button
                variant="contained"
                sx={{ marginTop: 3, borderRadius: 3 }}
                onClick={() => editLessonDetails()}
              >
                Edit
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

Edit_lesson.getLayout = (Edit_lesson) => <DashboardLayout>{Edit_lesson}</DashboardLayout>;

export default Edit_lesson;
