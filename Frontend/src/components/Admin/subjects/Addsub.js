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
  FormControl,
  Input,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import React, { useState } from "react";
import axios from "../../../../axiosconfig";
import { Box, flexbox } from "@mui/system";
import { useRouter } from "next/router";
import { useRouter as page } from "next/navigation.js";

const Addsub = () => {
  const router = useRouter();
  const changePage = page();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  // console.log("--------<<<", title);
  // console.log("--------<<<", image);
  // const router = useRouter();
  const { id } = router.query;
  const onChangeValue = async (e) => {
    // setTitle({ ...title, [e.target.name]: e.target.value });
    setTitle(e.target.value);
  };

  const handleClick = async () => {
    try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    const sub = await axios.post(`/addSubject/${id}`, formData);
    if (sub.data.message === "Add Subject") {
      alert("Subject Created Successfully!!");
      changePage.push("/Admin/subjects/allSub");
    }
    // console.log(sub.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" marginTop={5} spacing={4}>
          <Stack spacing={1}>
            <Typography variant="h4">Subjects</Typography>
            <Stack alignItems="center" direction="row" spacing={1}></Stack>
          </Stack>
          <div>
            {/* <Button
              startIcon={
                <SvgIcon fontSize="small">
                  <PlusIcon />
                </SvgIcon>
              }
              variant="contained"
            >
              Add
            </Button> */}
          </div>
        </Stack>
        <Card style={{ maxWidth: 450, margin: "100px auto", boxShadow: "1px 1px 5px 2px grey" }}>
          <CardContent>
            <Box display="flex" flexDirection={"column"} maxWidth={400}>
              <Typography variant="h4" padding={3} textAlign={"center"}>
                Add Subject
              </Typography>

              <input
                value={title}
                onChange={(e) => onChangeValue(e)}
                name="title"
                // label="Title"
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

Addsub.getLayout = (Addsub) => <DashboardLayout>{Addsub}</DashboardLayout>;

export default Addsub;
