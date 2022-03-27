import { createTheme } from "@mui/material/styles";
import { colors } from "app/assets/colors/colors";

let theme = createTheme({
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
});

export default theme;
