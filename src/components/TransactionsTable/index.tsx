import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


 export function TransactionsTable() {
    useEffect(() => {
        api.get('/transactions')
        //fazendo uma requisição do tipo get
        // buscando uma informação de*-transactions-*
        // a lista de transactions.
            // .the(response => console.log(response.data))

    }, []);

     

    return (
         <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>Desenvolvimento de Websites</td>
                    <td className="deposit">R$6.000,00</td>
                    <td>Desenvolvimento</td>
                    <td>07/02/2021</td>
                    </tr>
                    <tr>
                    <td>Monitor Samsung</td>
                    <td className="deposit">R$900,00</td>
                    <td>Venda</td>
                    <td>09/02/2021</td>
                    </tr>
                    <tr>
                    <td>Aluguel do Apartamento</td>
                    <td className="withdraw">-R$1.100,00</td>
                    <td>Casa</td>
                    <td>10/02/2021</td>
                    </tr>
                    <tr>
                    <td>Internet</td>
                    <td className="withdraw">-R$150,00</td>
                    <td>Casa</td>
                    <td>10/02/2021</td>
                    </tr>
                    <tr>
                    <td>Alimentos</td>
                    <td className="withdraw">-R$500,00</td>
                    <td>Casa</td>
                    <td>10/02/2021</td>
                    </tr>
                    


                  
                 
                </tbody>
            </table>
        </Container>
    ); 
}