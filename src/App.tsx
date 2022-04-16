import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyled } from "./styles/globalstyle";
import { useState } from "react";

import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }

  return (
    <>
      <Header onIsNewTransactionModalOpen={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyled />
    </>
  );
}
