import { UPDATE_LAYOUT_STATE } from "../actions/layoutActions";

const initialState = {
  member: null,
};

const layoutReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case UPDATE_LAYOUT_STATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default layoutReducer;
