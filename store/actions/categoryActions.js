import axios from "axios";
export const UPDATE_CATEGORY = "category/UPDATE_CATEGORY";

const serverHost = "http://localhost:8080";

export const getCategory = (category) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${serverHost}/category/${category}`);

    dispatch(updateCategory({ category: data }));
    return data;
  } catch (error) {
    return null;
  }
};

export const updateCategory = (args) => {
  return {
    type: UPDATE_CATEGORY,
    payload: args,
  };
};
