import axios from "axios";

const addNewComment = async (body) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/comments/",
    body
  );
  return response;
};
export default addNewComment;
