import React from "react";
import { Modal as AntModal } from "antd";

import { Forms } from "modules/product";

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
      {/* <Create handleSuccess={handleOk} /> */}

      <Forms.Create onSuccess={handleOk} />
    </AntModal>
  );
};

export default CreateModal;
