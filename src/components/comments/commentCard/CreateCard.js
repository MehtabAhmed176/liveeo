import "./CommentCard.css";
function CreateComment({
  isShow,
  handleClose,
  value,
  handleChange,
  handleSave,
})
 {
  return (
    <div
      id="myModal"
      class="modal"
      style={{ display: `${isShow ? "block" : "none"}` }}
    >
      <div class="modal-content">
        <span class="close" onClick={handleClose}>
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
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateComment;
