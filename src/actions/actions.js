import { NOP_ACTION } from "../constants/action-types";

// action creators
export const nopAction = () => {
  return {
    type: NOP_ACTION,
  }
};
