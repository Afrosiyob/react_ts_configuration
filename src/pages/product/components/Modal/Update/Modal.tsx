import React from "react";
import { Modal as AntModal } from "antd";

import Update from "../../Form/Update/Update";

interface IProps {
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  title: string;
  itemId: string | number;
}

const UpdateModal: React.FC<IProps> = ({
  isVisible: isModalOpen,
  handleOk,
  handleCancel,
  itemId,
}) => {
  return (
    <AntModal
      title="Edit Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
      <Update itemId={itemId} handleSuccess={handleOk} />
    </AntModal>
  );
};

export default UpdateModal;
