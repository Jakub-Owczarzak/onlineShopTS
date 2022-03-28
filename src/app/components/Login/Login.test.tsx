import { ThemeProvider } from "@mui/styles";
import theme from "providers/ThemeProvider/StyleTheme";

import { Provider } from "react-redux";
import { initialUserState } from "redux/reducers/userReducer";
import store from "redux/store";

import { render, fireEvent, act, waitFor } from "tests";

import { Login } from "./Login";

const renderLoginComponent = () =>
  render(
    <Provider store={store({ users: initialUserState })}>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </Provider>
  );

describe("Login", () => {
  test("Displays all information", () => {
    const { getByText, getByTestId } = renderLoginComponent();
    expect(getByText("join.tsh.io")).toBeInTheDocument();
    expect(getByText("Log in")).toBeInTheDocument();
    expect(getByText("Username")).toBeInTheDocument();
    expect(getByTestId("userNameInput")).toBeInTheDocument();
    expect(getByText("Password")).toBeInTheDocument();
    expect(getByTestId("passwordInput")).toBeInTheDocument();
    expect(getByText("Forgot password?")).toBeInTheDocument();
  });

  test("Display proper placeholders, changing placeholders value when no vales provided", async () => {
    const { getByPlaceholderText, getByTestId } = renderLoginComponent();
    expect(getByPlaceholderText("Enter username")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter password")).toBeInTheDocument();

    const button = getByTestId("submitButton");

    fireEvent.click(button);
    await waitFor(() => {
      expect(getByPlaceholderText("User name is required")).toBeInTheDocument();
      expect(getByPlaceholderText("Password is required")).toBeInTheDocument();
    });
  });

  test("Display modal when wrong user credentials are delivered", async () => {
    const { getByText, getByTestId } = renderLoginComponent();
    const userNameInput = getByTestId("userNameInputProps");
    const passwordInput = getByTestId("passwordInputProps");
    const button = getByTestId("submitButton");
    fireEvent.change(userNameInput, { target: { value: "asdasd" } });
    fireEvent.change(passwordInput, { target: { value: "qweqwe" } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(getByText("No user found")).toBeInTheDocument();
    });
  });
});
