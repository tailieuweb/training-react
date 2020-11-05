import axios from "axios";

import * as types from "../../constants/ActionTypes";

const API_URL = "https://5f9fc01ce21bab0016dfc3f7.mockapi.io/shop-hoa/";

export const requestSetLikeList = () => async (dispatch) => {
  const res = await axios.get(API_URL + "likes");
  dispatch(setLikeList(res.data));
};
export const setLikeList = (likelist) => ({
    type: types.SET_LIKE_LIST,
    likelist,
  });
export const requestSetSuperLikeList = () => async (dispatch) => {
  const res = await axios.get(API_URL + "superlikes");
  dispatch(setSuperLikeList(res.data));
};
export const setSuperLikeList = (superlikelist) => ({
    type: types.SET_SUPER_LIKE_LIST,
    superlikelist,
  });

export const requestAddLikeList = (cat) => async (dispatch) => {
  console.log('data add like flower:' ,cat);
  const res = await axios.post(API_URL + "likes", cat);
  dispatch(addLikeList(res.data));
};
export const addLikeList = (cat) => ({
    type: types.ADD_LIKE_LIST,
    cat,
  });
export const requestAddSuperLikeList = (cat, cb) => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    const data = {
      cat,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const res = await axios.post(
      "/superlikes",
      data,
      config
    );

    if (res.data.status === 401 && res.data.err === "TokenExpiredError") {
      const res = await axios.post("/auth/refresh", {
        refreshToken,
      });
      localStorage.setItem("accessToken", res.data.accessToken);

      return dispatch(requestAddSuperLikeList(cat, cb));
    }

    dispatch(addSuperLikeList(res.data));
    alert("Super Like Success");
    cb();
  } catch (err) {
    alert(err);
  }
};
export const addSuperLikeList = (cat) => ({
    type: types.ADD_SUPER_LIKE_LIST,
    cat,
  });
