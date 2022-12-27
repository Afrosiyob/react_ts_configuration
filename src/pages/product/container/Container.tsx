/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useModal } from "hooks";

import { useList } from "modules/product/hooks";

import Product from "../Product";

const Container: React.FC = () => {
  const { items, isFetching } = useList({});
  const createModalProps = useModal();
  const updateModalProps = useModal();

  const props = {
    items,
    isFetching,
    createModalProps,
    updateModalProps,
  };

  return <Product {...props} />;
};

export default Container;
