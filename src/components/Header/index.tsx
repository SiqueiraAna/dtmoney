import { useState } from 'react'
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

export function Header() {
    // header cabeçalho da aplicação 
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
        <Container>
                <Content>
                <img src={logoImg} alt='dt money' />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova transação
                </button>

                <Modal 
                isOpen={isNewTransactionModalOpen} //propriedade -> isOpen e o estado. 
                onRequestClose={handleCloseNewTransactionModal}
                >
                    <h2>Cadastrar transação</h2>
                </Modal>
                </Content>
        </Container>
    )
}