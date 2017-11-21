import { combineReducers } from "redux";
import budget from "./budjet";
import farm from "./farm";
import market from "./market";

export default combineReducers({
  budget,
  farm,
  market
});
