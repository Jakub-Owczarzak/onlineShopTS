import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "./app/App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "providers/ThemeProvider/StyleTheme";
import { AppProviders } from "providers/AppProviders";
import { initialUserState } from "./redux/reducers/userReducer";
import myStore from "./redux/store";

ReactDOM.render(
  <AppProviders>
    <Provider store={myStore({ users: initialUserState })}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </AppProviders>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
