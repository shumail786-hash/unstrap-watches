import axios from "axios";

// const BASE_URL = `http://localhost:4000/api/v1`;
const BASE_URL = `https://postgress-watches.vercel.app/api/v1`;

export const sendRequest = async (method, url, payload, headers) => {
  const options = {
    method,
    headers: {
      ...headers,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: payload ? new URLSearchParams({ ...payload }) : null,
    url: `${BASE_URL}/${url}`,
  };

  try {
    const { data } = await axios(options);

    if (data) return data;

    throw new Error("Something went wrong!");
  } catch (error) {
    throw new Error(error.message);
  }
};
