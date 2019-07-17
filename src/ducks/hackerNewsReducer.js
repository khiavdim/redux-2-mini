import axios from "axios";

let initialState = {
  loading: false,
  articles: []
};

const REQUEST_ARTICLES = "REQUEST_ARTICLES";

export const requestArticles = () => {
  let articles = axios.get("/api/hacker-news").then(res => res.data);
  return {
    type: REQUEST_ARTICLES,
    payload: articles
  };
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_ARTICLES + "_PENDING":
      return { ...state, loading: true }; //Needs ...state, so that articles still exists for payload to be passed in as articles.
    case REQUEST_ARTICLES + "_FULLFILLED":
      return { articles: payload, loading: false };
    case REQUEST_ARTICLES + "_REJECTED":
      return { ...state, loading: false };
    default:
      return state; //Don't need to make copy of state because it wasn't changed
  }
}
