import React from "react";
import { Modal as AntModal } from "antd";

import Create from "../../Form/Create/Create";

interface IProps {
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  title: string;
}

const CreateModal: React.FC<IProps> = ({
  isVisible: isModalOpen,
  handleOk,
  handleCancel,
}) => {
  return (
    <AntModal
      title="Create Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
      <Create handleSuccess={handleOk} />
    </AntModal>
  );
};

export default CreateModal;
