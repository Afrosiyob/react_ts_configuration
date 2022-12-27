/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ColumnsType } from "antd/es/table";

interface IPagination {
  current: number;
  pageSize: number;
}

export interface ITableData {
  key: number | string;
  [propName: string]: unknown;
}

export interface IProps {
  className?: string;
  columns: ColumnsType<ITableData>;
  data: any;
  loading: boolean;
  pagination?: IPagination;
  handleTable?: (
    pagination?: object,
    filters?: object,
    sorted?: object
  ) => void;
}
