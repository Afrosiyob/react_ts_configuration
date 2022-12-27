import useSyncSingle from "../mutations/useSyncSingle";

interface IReturnProps {
  loading: boolean;
  handleDelete: (id: string | number) => void;
}

const useDelete = (): IReturnProps => {
  const { mutate, isLoading } = useSyncSingle();

  const handleDelete = (id: string | number): void => {
    mutate({
      id,
    });
  };

  return {
    loading: isLoading,
    handleDelete,
  };
};

export default useDelete;
