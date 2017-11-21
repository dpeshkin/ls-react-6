import { combineReducers } from "redux";
import { MOVE_ORDER_TO_CUSTOMER } from "../../actions/farmTypes";
import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM
} from "../../actions/marketTypes";

const profit = (state = 0, action) => {
  return action.type === CREATE_ORDER
    ? state + action.payload.price
    : state;
};
const marketExpanse = (state = 0, action) => {
  return action.type === CREATE_ORDER ? state + 20 : state;
};
const farmExpanse = (state = 0, action) => {
  return action.type === MOVE_ORDER_TO_FARM
    ? state + 100
    : state;
};
const deliveryExpanse = (state = 0, action) => {
  return action.type === MOVE_ORDER_TO_CUSTOMER
    ? state + 20
    : state;
};
export default combineReducers({
  profit,
  marketExpanse,
  farmExpanse,
  deliveryExpanse
});
