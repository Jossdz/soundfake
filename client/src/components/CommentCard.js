import React from "react";
import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { MyContext } from "../context";
function CommentCard({ owner, body, _id, removeComment }) {
  return (
    <MyContext.Consumer>
      {({ loggedUser }) => (
        <>
          <Card
            actions={
              loggedUser?.email === owner?.email && [
                <DeleteOutlined
                  key="delete"
                  onClick={() => removeComment(_id)}
                />,
              ]
            }
            title={`By ${owner?.email}`}
          >
            {body}
          </Card>
          <br />
        </>
      )}
    </MyContext.Consumer>
  );
}

export default CommentCard;
