import axios from "axios";
export const UPDATE_LAYOUT_STATE = "layout/UPDATE_LAYOUT_STATE";
const serverHost = "http://localhost:8080";

export const getMember = (authToken) => async (dispatch) => {
  try {
    const { data: member } = await axios.get(`${serverHost}/member`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        auth_token: authToken,
      },
    });

    dispatch(updateLayoutState({ member }));
    return member;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateLayoutState = (args) => {
  return {
    type: UPDATE_LAYOUT_STATE,
    payload: args,
  };
};

export const signin = (member) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${serverHost}/member/login`, {member});
    return data;
  } catch (e) {
    console.log(e);
    return { error: "Service error" };
  }
};

export const signup = (member) => async (dispatch) => {
  try{
    const { data } = await axios.post(`${serverHost}/member`, {member});
    return data;
  }catch (e) {
    console.log(e);
    return { error: "Service error" };
  }
};
