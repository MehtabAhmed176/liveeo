import { AiTwotoneEdit } from "react-icons/ai";
function Edit({ handleUpdate }) {
  return (
    <div>
      {" "}
      <AiTwotoneEdit
        onClick={handleUpdate}
        style={{ fontSize: "17px", color: "#8698a1" }}
      />
    </div>
  );
}

export default Edit;
