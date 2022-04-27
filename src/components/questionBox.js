import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./qBox.css";

export default function QuestionBox() {
  const user = useSelector(selectUser);

  return (
    <div className="qBox">
      <div className="q__info">
        <Avatar
          src={
            user.photo
              ? user.photo
              : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          }
          className=""
        />
        <h5>{user.displayName ? user.displayName : user.email}</h5>
      </div>
      <div className="q__I">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}
