import React from "react";
import { Col } from "antd";

import { Types } from "modules/product";

import { Header, List, Modal } from "./components";

import styles from "./scss/style.module.scss";

interface IModalProps {
  isVisible: boolean;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  itemId: string | number;
  handleItemId: (id: string | number) => void;
}

interface IProps {
  items: Types.IEntity.IProduct[];
  isFetching: boolean;
  createModalProps: IModalProps;
  updateModalProps: IModalProps;
}

const Product: React.FC<IProps> = ({
  items,
  isFetching,
  createModalProps,
  updateModalProps,
}) => {
  return (
    <div className={`${styles.wrapper}`}>
      <Modal.CreateModal
        isVisible={createModalProps.isVisible}
        handleOk={createModalProps.handleOk}
        handleCancel={createModalProps.handleCancel}
        title={"title"}
      />
      <Modal.UpdateModal
        isVisible={updateModalProps.isVisible}
        handleOk={updateModalProps.handleOk}
        handleCancel={updateModalProps.handleCancel}
        title={"title"}
        itemId={updateModalProps.itemId}
      />
      <Col xs={24} sm={24} md={18}>
        <Header showModal={createModalProps.showModal} />
        <List
          list={items}
          listLoading={isFetching}
          showModal={updateModalProps.showModal}
          handleItemId={updateModalProps.handleItemId}
        />
      </Col>
    </div>
  );
};

export default Product;
