import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Box,
  CardMedia,
  useMediaQuery,
  Button,
  FormGroup,
  Typography,
  InputLabel,
  alpha,
  InputBase,
  styled,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { colors } from "../../assets/colors/colors";
import picture from "../../assets/image/Bitmap.svg";
import { AppRoute } from "routing/AppRoute.enum";

const containerStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const LoginInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    marginBottom: "22px",
    borderRadius: "8px",
    position: "relative",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:focus": {
      boxShadow: `${alpha(colors.blueLight, 0.9)} 0 0 0 0.1rem`,
      borderColor: colors.blue,
    },
  },
}));
const LabelInput = styled(InputLabel)(({ theme }) => ({
  marginBottom: "8px",
  fontSize: "14px",
}));

export const Login = () => {
  const theme = useTheme();

  console.log(theme.typography.fontWeightBold);

  const matches = useMediaQuery(() => theme.breakpoints.up("md"));

  return (
    <>
      <Box sx={containerStyle}>
        <Card sx={cardStyle}>
          {matches && (
            <Box sx={{ width: "600px" }} mr={{ md: "48px", xl: "128px" }}>
              <CardMedia component="img" image={picture} alt="green iguana" />
            </Box>
          )}

          <Box
            sx={{
              height: "100%",
              position: "relative",
              width: { xs: "100%", md: "60%" },
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              flexDirection: "column",
            }}
          >
            <Link
              to={AppRoute.Home}
              style={{
                textDecoration: "none",
                minWidth: 100,
                position: "absolute",
                top: "40px",
                left: "24px",
                fontSize: "24px",
                color: "black",
              }}
            >
              join.tsh.io
            </Link>

            <FormGroup
              sx={{
                width: { xs: "100%", md: "400px", xl: "500px" },
                padding: { xs: "24px" },
              }}
            >
              <Typography mb="53px" variant="h3">
                Login
              </Typography>
              <LabelInput htmlFor="userName">Username</LabelInput>
              <LoginInput
                id="userName"
                fullWidth={true}
                placeholder="Enter username"
              />
              <LabelInput htmlFor="password">Password</LabelInput>
              <LoginInput id="password" placeholder="Enter password" />
              <Button
                sx={{
                  height: "48px",
                  marginTop: "34px",
                  backgroundColor: colors.blueLight,
                  fontSize: "14px",
                  color: "white",
                }}
                variant="contained"
                fullWidth={false}
              >
                Log in
              </Button>
            </FormGroup>
          </Box>
        </Card>
      </Box>
    </>
  );
};
