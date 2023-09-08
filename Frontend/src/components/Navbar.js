import React from "react";
import { Avatar } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="container-xl">
        <div className="row">
          <div className="col d-flex justify-content-end">
            <nav className="navbar  ">
            <Link href='/' ><Avatar><HomeIcon/></Avatar></Link>
              {/* <Link className="navbar-brand " href="/">
                <img
                  src="https://kidslearningapps.net/wp-content/uploads/2014/09/KidsLearningApps_Logo_1000-1.png"
                  alt="Logo"
                  // width={80}
                  height={80}
                />
              </Link> */}

              {/* <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/auth/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link " href="/auth/register">
                    Signup
                  </Link>
                </li>
              </ul> */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
