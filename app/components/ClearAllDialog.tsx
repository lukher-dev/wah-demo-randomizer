import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ConfirmDialog from "./Dialog";
import { useLocalStorage } from "../context/localStorageContext";

const ClearAllDialog = () => {
  const { clearAllData } = useLocalStorage();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const clearLocalStorage = () => {
    clearAllData();
    closeModal();
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="bg-red-500 hover:bg-red-700 rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        Clear all seen demos
      </button>

      <ConfirmDialog
        isOpen={isOpen}
        closeModal={closeModal}
        action={clearLocalStorage}
        innerText={"Are you sure you want to clear all seen demos?"}
      />
    </>
  );
};

export default ClearAllDialog;
