import { useState } from "react";

interface IProps {
  isVisible: boolean;
  itemId: string | number;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  handleItemId: (id: string | number) => void;
}

const useModal = (): IProps => {
  const [isVisible, setIsVisible] = useState(false);
  const [itemId, setItemId] = useState<string | number>("");

  const showModal = (): void => {
    setIsVisible(true);
  };

  const handleOk = (): void => {
    setIsVisible(false);
  };

  const handleCancel = (): void => {
    setIsVisible(false);
  };

  const handleItemId = (id: string | number): void => {
    setItemId(id);
  };

  return {
    isVisible,
    itemId,
    showModal,
    handleOk,
    handleCancel,
    handleItemId,
  };
};

export default useModal;
