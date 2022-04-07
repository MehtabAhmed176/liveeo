
import { AiFillDelete } from "react-icons/ai";
// const handleDelete = ()=>{
//     console.log('Handle delete working')
// }
function Delete({handleDelete}) {
  return <div> <AiFillDelete onClick={handleDelete}/></div>;
}

export default Delete;
