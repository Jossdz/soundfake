import React from "react";
import { MyContext } from "../context";
import { Card, Button } from "antd";

const { Meta } = Card;

function Profile({ history }) {
  const imgProps = {
    src:
      "https://los40es00.epimg.net/los40/imagenes/2019/10/21/musica/1571674924_397865_1571676084_noticia_normal.jpg",
  };

  return (
    <MyContext.Consumer>
      {({ loggedUser }) => (
        <section className="diuritainer">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="profile_photo" {...imgProps} />}
          >
            <Meta title={loggedUser.email} />
          </Card>
          <Button
            style={{ marginTop: "50px" }}
            onClick={() => history.push("/song/create")}
            type="primary"
          >
            Create Song
          </Button>
        </section>
      )}
    </MyContext.Consumer>
  );
}

export default Profile;
