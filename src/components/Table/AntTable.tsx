import React from "react";
import { Table } from "antd";

import { useSetKey } from "./hooks";
import { Types } from ".";

const AntTable: React.FC<Types.IProps> = ({
  columns,
  data,
  loading,
  handleTable,
  pagination,
  className,
}) => {
  const list: Types.ITableData[] = useSetKey(data);

  return (
    <Table
      data-testid="ANT_TABLE_ID"
      className={className}
      columns={columns}
      dataSource={list}
      pagination={pagination != null ? pagination : false}
      loading={loading}
      onChange={handleTable}
      scroll={{ x: "auto" }}
    />
  );
};

export default AntTable;
