import { createTheme } from "@mui/material/styles";
import themeOptions from "./thememui";

const theme = createTheme({
  ...themeOptions,
  palette: {
    ...themeOptions.palette
  },
  typography: {
    ...themeOptions.typography
  },
  components: {
    ...themeOptions.components
  }
});

export default theme;