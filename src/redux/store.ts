import { applyMiddleware, CombinedState, createStore } from "redux";
import thunk from "redux-thunk";
import reducers, { RootState } from "./reducers";
import { UsersState } from "./reducers/userReducer";

const store = (state: RootState) =>
  createStore(reducers, state, applyMiddleware(thunk));

export default store;
