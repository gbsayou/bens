import { UPDATE_CATEGORY } from "../actions/categoryActions";

const initialState = {
  category: {},
};

const categoryReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case UPDATE_CATEGORY:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default categoryReducer;
