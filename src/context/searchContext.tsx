import { createContext } from "react";

interface CheckBoxContextInterface {
  active: boolean;
  promo: boolean;
  handleCheckBoxChange: (e: React.SyntheticEvent<Element, Event>) => void;
  searchBarValue: string;
  handleSearchBarChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const SearchContext = createContext<CheckBoxContextInterface>({
  active: false,
  promo: false,
  handleCheckBoxChange: () => {},
  searchBarValue: "",
  handleSearchBarChange: () => {},
});
