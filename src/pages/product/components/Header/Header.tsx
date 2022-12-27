import React from "react";
import { Col, Row } from "antd";

import { Button } from "components";

interface IProps {
  showModal: () => void;
}

const Header: React.FC<IProps> = ({ showModal }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    showModal();
  };

  return (
    <Row gutter={[16, 16]} justify="space-between">
      <Col>Product List</Col>
      <Col>
        {" "}
        <Button size="large" type="primary" onClick={handleClick}>
          Add Product
        </Button>
      </Col>
    </Row>
  );
};

export default Header;
