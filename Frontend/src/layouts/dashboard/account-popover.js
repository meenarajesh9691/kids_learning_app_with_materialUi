import {  useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { Box, Divider, MenuItem, MenuList, Popover, Typography } from "@mui/material";
// import { useAuth } from "src/hooks/use-auth";
import axios from "../../../axiosconfig";

export const AccountPopover = (props) => {
  const [user, setUser] = useState([]);
  // console.log(user);

  const dataHandler = async () => {
    try {
      const res = await axios.get("/kidsData");
      setUser(res.data.userDetails);
      // console.log(res.data.userDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataHandler();
  }, []);

  const { anchorEl, onClose, open } = props;
  const router = useRouter();
  // const auth = useAuth();

  const handleLogout = async () => {
    try {
      const res = await axios.get("/kids/signout");
      console.log(res);
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSignOut = useCallback(() => {
  //   onClose?.();
  //   auth.signOut();
  // }, [onClose, auth, router]);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>

        <Typography color="text.secondary" variant="body2">
          {user.name}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {user.email}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: "8px",
          "& > *": {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={handleLogout}>Sign out</MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
