import { Provider } from "react-redux";
import { initialUserState } from "redux/reducers/userReducer";
import store from "redux/store";

import { render, fireEvent, act, waitFor } from "tests";
import { MainView } from "./MainView";

const renderLoginComponent = () =>
  render(
    <Provider store={store({ users: initialUserState })}>
      <MainView />
    </Provider>
  );

describe("MainView", () => {
  test("Displays all information", async () => {
    const { getByTestId, getByText, getByPlaceholderText } =
      renderLoginComponent();

    expect(getByTestId("circular_progress")).toBeInTheDocument();
    expect(getByText("Promo")).toBeInTheDocument();
    expect(getByText("Active")).toBeInTheDocument();
    expect(getByText("join.tsh.io")).toBeInTheDocument();
  });
});
