interface IProps {
  key: string | number;
  [propsName: string]: unknown;
}

const useSetKey = (items = []): IProps[] => {
  if (items !== null && items.length > 0) {
    return items.map((item: object, index: number) => ({
      ...item,
      key: index,
    }));
  } else {
    return [];
  }
};

export default useSetKey;
