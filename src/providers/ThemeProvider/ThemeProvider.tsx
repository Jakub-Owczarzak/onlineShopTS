import { createTheme } from "@mui/material/styles";
import { colors } from "../../app/assets/colors/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito",
    button: {
      textTransform: "none",
    },
  },
  palette: {
    background: {
      default: colors.greyLight,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
