import { MOVE_ORDER_TO_CUSTOMER } from "../../actions/farmTypes";
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../../actions/marketTypes";
const budget = (state = [], action) => {
  switch (action.type) {
    // case CREATE_ORDER:
    //   return (state.profit = state.profit + action.payload.price);
    // case MOVE_ORDER_TO_FARM:
    //   return (state.deliveryExpanse = state.deliveryExpance + 20);
    // case MOVE_ORDER_TO_CUSTOMER:
    //   return (state.farmExpanse = state.farmExpanse + 10);
    default:
      return state;
  }
};
export default budget;
