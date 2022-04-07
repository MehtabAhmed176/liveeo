import Card from "./commentCard/CommentCard";
import fetchComments from "../../api/commentsApi";
import deleteCommentById from '../../api/deleteCommentApi'
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
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
  margin:"19px 13px 12px 25px"
};

function Comment() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, seTotalPages] = useState(1);
  async function fetchData(page_number) {
    //setLoading(true);
    const response = await fetchComments(page_number);
    console.log("response", response);
    seTotalPages(response.totalPages);
    // setLoading(false);
    setComments(response.data);
  }

  useEffect(() => {
    fetchData(1);
    console.log('component did updated or did loaded firstime')
  }, []);
  const List = comments.map((item,index) => {
    return (
      <Card
        key={item.id}
        index={index}
        name={item.name}
        email={item.email}
        body={item.body}
        handleDelete={()=>handleDelete(item.id)}
      />
    );
  });

  const handlePageClick = (e) => {
    fetchData(e.selected);
  };

  const handleDelete = async(id) => {
   await deleteCommentById(id)
   const newComments = comments.filter((comment) => comment.id !== id);
   setComments(newComments);
  };

  return (
    <div style={{maxWidth:"1000px"}}>
      <div style={header}>
        <h3>Comments</h3>
        <button
          className="create-button"
          onClick={() => console.log("working...")}
        >
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
    </div>
  );
}

export default Comment;
