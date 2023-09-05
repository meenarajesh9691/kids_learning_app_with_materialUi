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
import React, { useState } from "react";
import axios from "../../../../axiosconfig";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useRouter as page } from "next/navigation.js";

const Add_lesson = () => {
  const router = useRouter();
  const changePage = page();
  const [lessonTitle, setLessonTitle] = useState("");
  const [image, setImage] = useState("");
  // console.log(lessonTitle);
  // console.log(image);
  // const router = useRouter();
  const { id } = router.query;
  const onChangeValue = async (e) => {
    // setLesson({ ...lesson, [e.target.name]: e.target.value });
    setLessonTitle(e.target.value);
  };

  const handleClick = async () => {
    try {
      const formData = new FormData();
      formData.append('lessonTitle', lessonTitle);
      formData.append('image', image);
      const sub = await axios.post(`/addLesson/${id}`, formData);
      console.log(sub);
      if (sub.data.message === "Add Lesson") {
        alert("Lesson Created Successfully!!");
        changePage.push(`/Admin/lessons/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" marginTop={5} spacing={4}>
          <Stack spacing={1}>
            <Typography variant="h4">Add Lesson</Typography>
            <Stack alignItems="center" direction="row" spacing={1}></Stack>
          </Stack>
          <div>
            <Button startIcon={<SvgIcon fontSize="small"></SvgIcon>} variant="contained">
              Back
            </Button>
          </div>
        </Stack>
        <Card style={{ maxWidth: 450, margin: "100px auto", boxShadow: "1px 1px 5px 2px grey" }}>
          <CardContent>
            <Box display="flex" flexDirection={"column"} maxWidth={400}>
              <Typography variant="h4" padding={3} textAlign={"center"}>
                Add Lesson
              </Typography>

              <TextField
                title={lessonTitle}
                onChange={(e) => onChangeValue(e)}
                name="lessonTitle"
                label="Lesson Title"
                // value={subject.title}
                margin="normal"
              />

              <input
                onChange={(e) => setImage(e.target.files[0])}
                name="image"
                type="file"
                // value={subject.email}
                // margin="normal"
              />
              <Button
                variant="contained"
                sx={{ marginTop: 3, borderRadius: 3 }}
                onClick={handleClick}
              >
                Add
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

Add_lesson.getLayout = (Add_lesson) => <DashboardLayout>{Add_lesson}</DashboardLayout>;

export default Add_lesson;
