import React from "react";
import get from "lodash/get";

import { Types } from "modules/product";

import { Table } from "components";

import { ActionContainer } from "./components/actions";

import styles from "./scss/style.module.scss";

interface IProps {
  list: Types.IEntity.IProduct[] | undefined;
  listLoading: boolean;
  showModal: () => void;
  handleItemId: (id: string | number) => void;
}

const List: React.FC<IProps> = ({
  list = [],
  listLoading,
  showModal,
  handleItemId,
}) => {
  const columns = [
    {
      key: 1,
      title: "title",
      dataIndex: "title",
    },
    {
      key: 2,
      title: "price",
      dataIndex: "price",
    },
    {
      key: 3,
      title: "description",
      dataIndex: "description",
    },
    {
      key: 4,
      title: "actions",
      render: (_: unknown, record: unknown): JSX.Element => {
        return (
          <ActionContainer
            handleItemId={handleItemId}
            showModal={showModal}
            id={get(record, "productId", "")}
          />
        );
      },
    },
  ];

  return (
    <div className={`${styles.wrapper}`}>
      <Table
        columns={columns}
        data={list}
        loading={listLoading}
        pagination={undefined}
      />
    </div>
  );
};

export default List;
