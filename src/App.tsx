import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyled } from "./styles/globalstyle";
import { useState } from "react";

import Modal from "react-modal";

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
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyled />
    </>
  );
}
