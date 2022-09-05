import axios from "axios";

export const fetchApi = async (queryParmeters, requestType) => {
  try {
    const url =
      `https://bayut.p.rapidapi.com/${
        requestType === "list"
          ? "properties/list?"
          : requestType === "detail"
          ? "properties/detail?"
          : "properties/list?"
      }` + queryParmeters;
    const { data } = await axios.request(url, {
      headers: {
        "X-RapidAPI-Key": "f613e3a8c6msh2915d0a5c533270p1334fcjsne2f3c06051bc",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
