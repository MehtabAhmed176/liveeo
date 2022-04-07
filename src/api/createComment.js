import axios from "axios";

const addNewComment = async(body) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/comments/',body); 
    console.log('response from create comment', response)
    return  response
};
export default addNewComment;