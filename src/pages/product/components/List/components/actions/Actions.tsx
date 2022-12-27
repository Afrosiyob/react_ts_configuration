import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space } from "antd";

import { Button } from "components";

interface IProps {
  deleteLoading: boolean;
  handleClickEdit: () => void;
  handleClickDelete: () => void;
}

const Actions: React.FC<IProps> = ({
  deleteLoading,
  handleClickDelete,
  handleClickEdit,
}) => {
  return (
    <Space>
      <Button icon={<EditOutlined />} onClick={handleClickEdit}>
        Edit
      </Button>
      <Button
        icon={<DeleteOutlined />}
        onClick={handleClickDelete}
        danger
        type="primary"
        loading={deleteLoading}
      >
        Delete
      </Button>
    </Space>
  );
};

export default Actions;
