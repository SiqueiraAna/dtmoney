import Modal from 'react-modal';

interface NewTransactionsModalProps {
    //propriedades que ele vai receber. 
    isOpen: boolean;
    //Se o modal está aberto ou não
    onRequestClose: () => void;
    //Que é uma função que não retorna nada

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionsModalProps ) {
    return (
        <Modal 
                isOpen={isOpen} //propriedade -> isOpen e o estado. 
                onRequestClose={onRequestClose}
                //função que deve ser executada quando o usuário pedi para fechar o modal.
                
                >
                    <h2>Cadastrar transação</h2>
                    
          </Modal>

    );
}