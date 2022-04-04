import "./CommentCard.css";

function Card({ name, email, body, index }) {
  return (
    <div className={[`card ${(index===4||index===5||index===10||index===11)?"long-card" : ""}`]} >
      <div className="container">
        <div className="card-header">
          <div>
            <p style={{ paddingLeft: "20px" }}>
              <b> {name.slice(0, 5)} </b>{" "}
            </p>{" "}
          </div>{" "}
          <div>
            <p style={{ paddingRight: "20px" }}> {email} </p>{" "}
          </div>{" "}
        </div>{" "}
        <p className="card-body"> {body.slice(0, 85)} </p>{" "}
      </div>{" "}
    </div>
  );
}

export default Card;
