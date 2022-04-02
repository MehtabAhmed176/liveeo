import axios from "axios";
const fetchComments = async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
    return response.data
};
export default fetchComments;