import { useEffect } from "react";
import { Container } from "./styles";


 export function TransactionsTable() {
    useEffect(() => {
        fetch('http://localhost:3001')

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
                    <td>Desenvolvimento de websites</td>
                    <td className="deposit">R$6.000,00</td>
                    <td>Desenvolvimento</td>
                    <td>05/02/2021</td>
                    </tr>
                    <tr>
                    <td>Monitor Samsung</td>
                    <td className="deposit">R$900,00</td>
                    <td>Trabalho</td>
                    <td>05/02/2021</td>
                    </tr>
                    <tr>
                    <td>Aluguel do apartamento</td>
                    <td className="withdraw">-R$1.100,00</td>
                    <td>Casa</td>
                    <td>15/02/2021</td>
                    </tr>
                    <tr>
                    <td>Internet</td>
                    <td className="withdraw">-R$150,00</td>
                    <td>Internet</td>
                    <td>10/02/2021</td>
                    </tr>
                    <tr>
                    <td>Luz</td>
                    <td className="withdraw">-R$120,00</td>
                    <td>Casa</td>
                    <td>27/02/2021</td>
                    </tr>
                    <tr>
                    <td>Gás</td>
                    <td className="withdraw">-R$80,00</td>
                    <td>Casa</td>
                    <td>28/02/2021</td>
                    </tr>
                    <tr>
                    <td>Água</td>
                    <td className="withdraw">-R$40,00</td>
                    <td>Casa</td>
                    <td>28/02/2021</td>
                    </tr>
                 
                </tbody>
            </table>
        </Container>
    ); 
}