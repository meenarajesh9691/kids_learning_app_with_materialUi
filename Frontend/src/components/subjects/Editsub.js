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

const Editsub = () => {
  const router = useRouter();
  const changePage = page();
  const [subject, setSubject] = useState([]);
  const { id } = router.query;

  const loadOneSubject = async () => {
    const sub = await axios.get(`/getSubject/${id}`);
    setSubject(sub.data.oneSubject);
    // console.log(sub.data);
  };

  useEffect(() => {
    loadOneSubject();
  }, []);

  const onChangeValue = async (e) => {
    setSubject({ ...subject, [e.target.name]: e.target.value });
  };

  const editSubjectDetails = async () => {
    const edit = await axios.post(`/editSub/${id}`, subject);
    console.log(edit);
    changePage.push("/subjects/allSub");
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
                Edit Subject
              </Typography>

              <TextField
                onChange={(e) => onChangeValue(e)}
                name="title"
                value={subject.title}
                margin="normal"
              />

              {/* <TextField
                onChange={(e) => onChangeValue(e)}
                name="email"
                value={subject.email}
                margin="normal"
              /> */}
              <Button
                variant="contained" 
                sx={{ marginTop: 3, borderRadius: 3 }}
                onClick={() => editSubjectDetails()}
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

Editsub.getLayout = (Editsub) => <DashboardLayout>{Editsub}</DashboardLayout>;

export default Editsub;
