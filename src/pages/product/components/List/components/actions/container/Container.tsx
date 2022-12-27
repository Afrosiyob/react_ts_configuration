/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { useDelete } from "modules/product/hooks";

import Actions from "../Actions";

interface IProps {
  showModal: () => void;
  id: string | number;
  handleItemId: (id: string | number) => void;
}

const Container: React.FC<IProps> = ({ showModal, id, handleItemId }) => {
  const { loading: deleteLoading, handleDelete } = useDelete();
  const handleClickEdit = (): void => {
    showModal();
    handleItemId(id);
  };

  const handleClickDelete = (): void => {
    handleDelete(id);
  };

  const componentProps = {
    handleClickDelete,
    handleClickEdit,
    deleteLoading,
  };

  return <Actions {...componentProps} />;
};

export default Container;
