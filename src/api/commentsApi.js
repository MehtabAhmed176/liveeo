/* eslint-disable */
import axios from "axios";

const fetchComments = async(page_number = 1) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page_number}&_limit=12`);
    // eslint-disable-line // 
    const totalPages = parseInt(response.headers["x-total-count"]) / 12;
    return {
        data: response.data,
        totalPages
    }

};
export default fetchComments;