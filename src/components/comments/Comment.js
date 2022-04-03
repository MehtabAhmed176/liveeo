import Card from "./commentCard/CommentCard";
import fetchComments from "../../api/commentsApi";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import './commentCard/CommentCard.css'
const main = {
  display: "flex",
  flexWrap: "wrap",
};

function Comment() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, seTotalPages] = useState(1);
  async function fetchData(page_number) {
   //setLoading(true);
    const response = await fetchComments(page_number);
    console.log("response", response);
    seTotalPages(response.totalPages)
   // setLoading(false);
    setComments(response.data);
  }
  useEffect(() => {
    fetchData(1);
  }, []);
  const List = comments.map((item) => {
    return (
      <Card
        key={item.id}
        name={item.name}
        email={item.email}
        body={item.body}
      />
    );
  });

  const handlePageClick = (e) => {
      fetchData(e.selected);
    }
  return (
    <div>
      <div style={main}>

        {loading ? 'loading...' : List}
      </div>
      <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination"
        />
    </div>
  );
}

export default Comment;
