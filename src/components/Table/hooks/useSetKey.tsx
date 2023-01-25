/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProps {
  key: string | number;
  [propsName: string]: any;
}

const useSetKey = (items: any): IProps[] => {
  if (items !== null && items.length > 0) {
    return items.map((item: object, index: number) => ({
      key: index,
      ...item,
    }));
  } else {
    return [];
  }
};

export default useSetKey;
