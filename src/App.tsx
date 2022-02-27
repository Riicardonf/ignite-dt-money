import { Dashboard } from "components/Dashboard";
import { Header } from "components/Header";
import Modal from 'react-modal';
import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "components/NewTransactionModal";
import {TransactionsProvider } from "TransactionsContext";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModal(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    
      <GlobalStyle/>
    </TransactionsProvider>
  );
}