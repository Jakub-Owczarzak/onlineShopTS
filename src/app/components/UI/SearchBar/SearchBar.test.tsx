import { ThemeProvider } from "@mui/styles";
import { SearchContext } from "context/searchContext";
import theme from "providers/ThemeProvider/StyleTheme";

import { Provider } from "react-redux";
import { initialUserState } from "redux/reducers/userReducer";
import store from "redux/store";

import { render, fireEvent, act, waitFor } from "tests";

import { SearchaBar } from "./SearchaBar";
const mockedContext = {
  active: false,
  promo: false,
  searchBarValue: "Start context Value",
  handleCheckBoxChange: jest.fn(),
  handleSearchBarChange: jest.fn(),
};

const renderLoginComponent = () =>
  render(
    <SearchContext.Provider value={mockedContext}>
      <SearchaBar />
    </SearchContext.Provider>
  );

describe("NavBar", () => {
  test("Searchbar has acces to context searchBarValue and   on change event fire proper function from context", async () => {
    const { getByTestId } = renderLoginComponent();

    const search = await getByTestId("searchBarInputProps");

    expect(search).toHaveValue("Start context Value");

    fireEvent.change(search, { target: { value: "TEXT" } });

    expect(mockedContext.handleSearchBarChange).toBeCalledTimes(1);
  });
});
