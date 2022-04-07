import { AiFillDelete } from "react-icons/ai";
function Delete({ handleDelete }) {
  return (
    <div>
      {" "}
      <AiFillDelete
        onClick={handleDelete}
        style={{ fontSize: "17px", color: "#84829e" }}
      />
    </div>
  );
}

export default Delete;
