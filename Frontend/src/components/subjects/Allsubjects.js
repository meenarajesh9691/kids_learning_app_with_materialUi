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
import { useRouter } from "next/navigation.js";
import Link from "next/link.js";
import userContext from "src/contexts/user/userContext.js";
import { Delete, Edit } from "@mui/icons-material";

const Allsubjects = () => {
  const router = useRouter();
  const [user, setUser] = useContext(userContext);
  const [getSubject, setGetSubject] = useState([]);

  // ------------Find All Subject--------
  useEffect(() => {
    findSubject();
  }, []);

  const findSubject = async (req, res) => {
    const allSub = await axios.get("/getSubjects");
    setGetSubject(allSub.data.data);
    // console.log(allSub.data.data);
  };

  // ---------------Delete Subject-----------------
  const deleteHandler = async (id) => {
    const subDelete = await axios.get(`/deleteSub/${id}`);
    // console.log(subDelete.data.message);
    if (subDelete.data.message === "Subject delete") {
      findSubject();
      alert("Subject Delete Successfully");
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" marginTop={5} spacing={4}>
          <Stack spacing={10}>
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
              onClick={() => {
                router.push(`/subjects/addSubject/${user._id}`);
              }}
            >
              Add
            </Button>
          </div>
        </Stack>
        <Grid container spacing={3}>
          {getSubject[0] ? (
            getSubject.map((data) => (
              <Grid item xs={3} key={data._id}>
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
                      router.push(`/lessons/${data._id}`);
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div" textAlign="center">
                        {data.title}
                      </Typography>
                    </CardContent>

                    <CardMedia
                      component="img"
                      height="140"
                      image={`http://localhost:8080/images/${data.image}`}
                    />
                  </CardActionArea>
                  <CardActions
                    style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}
                  >
                    <Button size="small" color="success" variant="contained" endIcon={<Edit />}>
                      <Link
                        href={`/subjects/editSub/${data._id}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Edit
                      </Link>
                    </Button>
                    <Button
                      size="small"
                      color="success"
                      variant="contained"
                      endIcon={<Delete />}
                      onClick={() => deleteHandler(data._id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Container style={{ marginTop: "3vmax", textAlign: "center" }}>
              <img src="https://taxonation.com/site-assets/img/sorry.png"></img>
            </Container>
          )}
        </Grid>
      </Container>
    </>
  );
};

Allsubjects.getLayout = (Allsubjects) => <DashboardLayout>{Allsubjects}</DashboardLayout>;

export default Allsubjects;
