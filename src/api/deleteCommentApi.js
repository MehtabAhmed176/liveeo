import axios from "axios";

const deleteCommentById = async (id) => {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );
  return response;
};
export default deleteCommentById;
