import axios from "axios";

let initialState = {
  loading: false,
  articles: []
};

const REQUEST_ARTICLES = "REQUEST_ARTICLES";

export const requestArticles = () => {
  let articles = axios.get("api/reddit").then(res => res.data);
  return {
    type: REQUEST_ARTICLES,
    payload: articles
  };
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_ARTICLES + "_PENDING":
      return { ...state, loading: true };
    case REQUEST_ARTICLES + "_FULLFILLED":
      return { articles: payload, loading: false };
    case REQUEST_ARTICLES + "_REJECTED":
      return { ...state, loading: true };
    default:
      return state;
  }
}
