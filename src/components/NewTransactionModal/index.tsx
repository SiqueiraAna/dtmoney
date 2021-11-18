import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg  from '../../assets/close.svg';
import { useState } from 'react';

import { Container, TransactionTypeContainer } from './styles';


interface NewTransactionModalProps {
    //propriedades que ele vai receber. 
    isOpen: boolean;
    //Se o modal está aberto ou não
    onRequestClose: () => void;
    //Que é uma função que não retorna nada

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps ) {
    //criação do estado 
    const [type, setType] = useState('deposit');

    
    return (
        <Modal 
                isOpen={isOpen} //propriedade -> isOpen e o estado. 
                onRequestClose={onRequestClose}
                //função que deve ser executada quando o usuário pedi para fechar o modal.
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                >     

                    <button 
                        type="button" 
                        onClick={onRequestClose} 
                        className="react-modal-close"
                        >
                        <img src={closeImg} alt="Fechar modal" />
                    </button>

                    <Container> 

                        <h2>Cadastrar transação</h2>
                        <input 
                            placeholder="Títutlo" 
                        />
                        <input 
                            type="number"
                            placeholder="Valor" 
                        />

                        <TransactionTypeContainer>
                            <button 
                                type="button"
                            >
                                <img src={incomeImg} alt="Entrada" />
                                <span>Entrada</span>
                            </button>

                            <button 
                                type="button"
                            >
                                <img src={outcomeImg} alt="Saída" />
                                <span>Saída</span>
                            </button>
                        </TransactionTypeContainer>

                        <input 
                            placeholder="Categoria" 
                        />
                        <button type="submit">
                            Cadastrar
                        </button>
                        
                    </Container>
          </Modal>

    );
}