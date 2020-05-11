import React from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Axios from "axios";

function AuthForm({ onFinish, onFinishFailed, title, setSongURL, song }) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const handleFileChange = async ({ target: { files } }) => {
    console.log(files[0]);
    const data = new FormData();
    // gracias a cloudinary el archivo siempre se debe llamar file
    data.append("file", files[0]);
    data.append("upload_preset", "soundfake2");

    // API de cloudinary
    const res = await Axios.post(
      "https://api.cloudinary.com/v1_1/joss/video/upload",
      data
    );
    setSongURL(res.data.secure_url);
  };

  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input the title!" }]}
      >
        <Input />
      </Form.Item>
      <input type="file" name="song" id="song" onChange={handleFileChange} />
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" disabled={song === ""}>
          {title}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AuthForm;
