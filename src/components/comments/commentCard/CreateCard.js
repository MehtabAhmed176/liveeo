import "./CommentCard.css";
function CreateComment({
  isShow,
  isEdit,
  handleClose,
  value,
  handleChange,
  handleSave,
}) {
  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: `${isShow ? "block" : "none"}` }}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>Add new Comments..</p>
        <div>
          <form>
            <div>
              <input
                type="text"
                value={value.body}
                onChange={handleChange}
                placeholder="type your comments..."
                className="form-input-create"
              />
            </div>
            <div>
              <button className="save-btn" onClick={handleSave}>
                {isEdit ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateComment;
