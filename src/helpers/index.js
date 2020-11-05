import axios from "axios";

const API_URL = "https://5f9fc01ce21bab0016dfc3f7.mockapi.io/shop-hoa/";

export const getFlowers = async () => {
    const cats = await axios.get(API_URL + "flowers");
    return cats.data;
  };

  export const getLikes = async () => {
    const likes = await axios.get(API_URL + "likes");
    return likes.data;
  };
  
  export const getSuperLikes = async () => {
    const superlikes = await axios.get(API_URL + "superlikes");
    return superlikes.data;
  };
  