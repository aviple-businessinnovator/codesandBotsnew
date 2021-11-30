import axios from "axios";

const url = "https://codesandbotsapi.herokuapp.com";
export const Fetchdata = async () => {
  try {
    const { data } = await axios.get(`${url}/products`);
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
  }
};
export const FetchContentData = async (coursename, setcurr_Topic) => {
  try {
    const { data } = await axios.get(`${url}/course`);
    // console.log(data);
    data.map(course => {
      if (course.courseName.toLowerCase() == coursename.toLowerCase()) {
        setcurr_Topic(course);
      }
    })
  } catch (error) {
    console.log(error);
  }
};

export const Getcartdata = async () => {
  try {
    const config = {
      method: "get",
      url: `${url}/cart`,
      headers: {
        Authorization: localStorage.getItem("Token"),
      },
    };
    const { data } = await axios(config);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const axioss = axios.create({ baseURL: "https://codesandbotsapi.herokuapp.com" });
