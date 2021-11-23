import { FormEvent, useState } from 'react';
import Modal from 'react-modal'; // importando o modal 
import incomeImg from '../../assets/income.svg'; // Importando a img incomeImg
import outcomeImg from '../../assets/outcome.svg'; // Importando a img  outcomeImg
import closeImg  from '../../assets/close.svg'; // Importando a img closeImg 


import { Container, TransactionTypeContainer, RadioBox } from './styles';
// Importando o Container e TransactionTypeContainer

interface NewTransactionModalProps {
    //Propriedades que ele vai receber. 
    isOpen: boolean;
    //Se o modal está aberto ou não
    onRequestClose: () => void;
    //Que é uma função que não retorna nada

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps ) {
    //criação do estado 
    const [title, setTitle] =useState('');
    const [value, setValue] =useState(0);
    const [category, setCategory] =useState('');
    const [type, setType] = useState('deposit');

    // type tipo da transação e o tipo de entrada (deposit)

    function hadleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
    }
   

    return (
        <Modal 
                isOpen={isOpen} //propriedade -> isOpen e o estado. 
                onRequestClose={onRequestClose}
                //função que deve ser executada quando o usuário pedi para fechar o modal.
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                >     

                    <button //Botão
                        type="button" 
                        onClick={onRequestClose} 
                        className="react-modal-close"
                        >
                        <img src={closeImg} alt="Fechar modal" />
                    </button>

                    <Container onSubmit={hadleCreateNewTransaction}> 

                        <h2>Cadastrar transação</h2>
                        <input 
                            placeholder="Títutlo" 
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                            // toda vez que acontece uma digitação no input 
                            // aparecer uma troca de valor no input
                            // salva o novo valor digitado dentro da propriedade setTitle
                        />
                        <input 
                            type="number"
                            placeholder="Valor"
                            value={value}
                            onChange={event => setValue(Number(event.target.value))} 
            
                            
                        />

                        <TransactionTypeContainer>
                            <RadioBox 
                                type="button"
                                onClick={() => {setType('deposit'); }}
                                isActive={type === 'deposit'}
                                activecolor="green"
                            >
                                <img src={incomeImg} alt="Entrada" />
                                <span>Entrada</span> 
                            </RadioBox>

                            <RadioBox 
                                type="button"
                                onClick={() => {setType('withdraw'); }}
                                isActive={type === 'withdraw'}
                                activecolor="red"
                            >
                                <img src={outcomeImg} alt="Saída" />
                                <span>Saída</span>
                            </RadioBox>
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