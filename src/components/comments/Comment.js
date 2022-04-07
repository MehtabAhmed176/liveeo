import Card from "./commentCard/CommentCard";
import fetchComments from "../../api/commentsApi";
import deleteCommentById from "../../api/deleteCommentApi";
import addComment from "../../api/createComment";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CreateComment from "./commentCard/CreateCard";
import "./Comments.css";

const main = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
};
const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "19px 13px 12px 25px",
};

function Comment() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggle, settoggle] = useState(false);
  const [edit, setEdit] = useState(false);
  const [totalPages, seTotalPages] = useState(1);
  const [formData, setFormData] = useState({
    id: "",
    name: "kabeer khan",
    email: "kabeer@gmail.com",
    body: "",
  });

  async function fetchData(page_number) {
    //setLoading(true);
    const response = await fetchComments(page_number);
    console.log("response", response);
    seTotalPages(response.totalPages);
    // setLoading(false);
    setComments(response.data);
  }

  const createOrUpdateComment = async () => {
    if (edit) {
      console.log("I am from Edit");
      console.log("id and body is", formData.id, formData.body);
      // @Todo Find the object in the Comment array and update it , dont mutate the state directly
      settoggle(!toggle);
      setEdit(!edit);
    } else {
      let randomId = Math.floor(Math.random() * 1000) + 500;
      let newValue = { ...formData, id: randomId };
      setFormData(newValue);
      const updatedCommentArray = [...comments, newValue];
      await addComment(newValue);
      setComments(updatedCommentArray);
      settoggle(!toggle);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const List = comments.map((item, index) => {
    return (
      <Card
        key={item.id}
        index={index}
        name={item.name}
        email={item.email}
        body={item.body}
        handleDelete={() => handleDelete(item.id)}
        handleUpdate={() => handleUpdate(item.id, item.body)}
      />
    );
  });

  const handlePageClick = (e) => {
    fetchData(e.selected);
  };

  const handleDelete = async (id) => {
    await deleteCommentById(id);
    const newComments = comments.filter((comment) => comment.id !== id);
    setComments(newComments);
  };

  const handleUpdate = async (id, data) => {
    let newValue = { ...formData, id: id, body: data };
    setFormData(newValue);
    settoggle(!toggle);
    setEdit(!edit);
  };

  const handleChange = (e) => {
    let newValue = { ...formData, body: e.target.value };
    setFormData(newValue);
  };

  const handleToggle = () => settoggle(!toggle);
  return (
    <div style={{ maxWidth: "1000px" }}>
      <div style={header}>
        <h3>Comments</h3>
        <button className="create-button" onClick={handleToggle}>
          Create comment
        </button>
      </div>
      <div style={main}>{loading ? "loading..." : List}</div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        nextClassName="next-nav"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={totalPages}
        previousLabel="<"
        previousClassName="prev-nav"
        renderOnZeroPageCount={null}
        className="pagination"
        pageClassName="list"
        pageLinkClassName="link"
      />
      <div>
        <CreateComment
          isShow={toggle}
          isEdit={edit}
          handleClose={handleToggle}
          value={formData}
          handleChange={handleChange}
          handleSave={createOrUpdateComment}
        />
      </div>
    </div>
  );
}

export default Comment;
