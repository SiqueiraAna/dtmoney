import Modal from 'react-modal';
import { Container } from './styles';


interface NewTransactionModalProps {
    //propriedades que ele vai receber. 
    isOpen: boolean;
    //Se o modal está aberto ou não
    onRequestClose: () => void;
    //Que é uma função que não retorna nada

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps ) {
    return (
        <Modal 
                isOpen={isOpen} //propriedade -> isOpen e o estado. 
                onRequestClose={onRequestClose}
                //função que deve ser executada quando o usuário pedi para fechar o modal.
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                >       
                    <Container> 
                        
                        <h2>Cadastrar transação</h2>
                        <input 
                            placeholder="Títutlo" 
                        />
                        <input 
                            type="number"
                            placeholder="Valor" 
                        />
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