import { getDate } from "@/utils/dateHelper";
import axios from "axios";

const instance = axios.create();

export const getAllBlogs = async () => {
  try {
    const response = await instance.get("http://localhost:5000/api/blogs");
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getAllBlogsHighlights = async () => {
  try {
    const response = await instance.get("http://localhost:5000/api/blogs", {
      params: {
        highlights: 1,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getBlogBy = async (id) => {
  try {
    const response = await instance.get(
      `http://localhost:5000/api/blogs/${id}`
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getBlogsByAuthor = async (author) => {
  try {
    const response = await instance.get(`http://localhost:5000/api/search`, {
      params: {
        author,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const postBlog = async ({ title, subtitle, author, content }) => {
  try {
    const response = await instance.post("http://localhost:5000/api/blogs", {
      title,
      subtitle,
      author,
      content,
      createdAt: getDate(),
      rating: [],
      average: 0,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const deleteBlogById = async (id) => {
  try {
    const response = await instance.delete(
      `http://localhost:5000/api/blogs/${id}`
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const putRatingBlog = async ({ id_blog, rating, id_user }) => {
  try {
    const response = await instance.put(
      `http://localhost:5000/api/blogs/${id_blog}`,
      {
        id: id_user,
        rating,
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async ({ username, password }) => {
  try {
    const response = await instance.post(
      "http://localhost:5000/api/users/login",
      {
        username,
        password,
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
