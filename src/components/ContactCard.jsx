import React from "react";
import user from "../images/user.png";

const CardContact = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item" key={id}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content ">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <i
          className="trash alternate outline icon"
          style={{
            color: "red",
            padding: "0px 0px 20px 0px",
          }}
        ></i>
      </div>
    </div>
  );
};
export default CardContact;
