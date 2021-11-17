import { useState } from 'react';
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  //compontente pai ou mãe 
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  // estato do modal se está aberto ou fechado. 

    function handleOpenNewTransactionModal(){
    // função para abrir o modal 
    setIsNewTransactionModalOpen(true);
    //setar a informação que o modal está aberto.

    }

    function handleCloseNewTransactionModal(){
    // função para fechar o modal
    setIsNewTransactionModalOpen(false);
    //setar a informação que o modal está fechado.
    }

    return (
      //componentes filhos para alterar informações do componente pai
      //através do repasse de funções.
      <>
        <Header onOpenNewTransactionModal = { handleOpenNewTransactionModal } />

        <Dashboard />

        <Modal 
                isOpen={isNewTransactionModalOpen} //propriedade -> isOpen e o estado. 
                onRequestClose={handleCloseNewTransactionModal}
                //função que deve ser executada quando o usuário pedi para fechar o modal.
                
                >
                    <h2>Cadastrar transação</h2>
                    
          </Modal>

        <GlobalStyle />
      </>
    );
}
