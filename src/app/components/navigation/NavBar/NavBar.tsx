import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../../routing/AppRoute.enum";

import { SearchaBar } from "../../UI/SearchBar/SearchaBar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";

import { colors } from "../../../assets/colors/colors";
import avatar from "../../../assets/icons/Oval.svg";

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isUserLogged, setIsUserLogged] = useState<boolean>(true);

  const theme = useTheme();
  const matches = useMediaQuery(() => theme.breakpoints.up("sm"));

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        width={1}
        padding={{ xs: "20px", xl: "0 108px" }}
        mb={{ xs: "20px", xl: "0 " }}
        position={{ xs: "fixed", xl: "static" }}
        flexWrap={"wrap"}
        zIndex={100}
        sx={{
          height: "140px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          backgroundColor: colors.white,
        }}
      >
        <Typography fontSize={24} sx={{ minWidth: 100 }}>
          join.tsh.io
        </Typography>
        {matches && <SearchaBar />}
        <Box justifySelf={"flex-end"}>
          {isUserLogged ? (
            <Tooltip title="">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar src={avatar} sx={{ width: 48, height: 48 }} />
              </IconButton>
            </Tooltip>
          ) : (
            <Button
              variant="outlined"
              sx={{
                color: colors.blueLight,
                textTransform: "none",
                padding: 0,
              }}
            >
              <Link
                to={AppRoute.Login}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: colors.blueLight,
                  width: "100%",
                  height: "100%",
                  padding: "5px 25px",
                  fontSize: "14px",
                }}
              >
                Log in
              </Link>
            </Button>
          )}
        </Box>
        {!matches && <SearchaBar />}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem sx={{ width: "184px" }}>Logout</MenuItem>
      </Menu>
    </>
  );
};
