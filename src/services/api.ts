//services
//Definição: Serviço de dados, todos os lugares que possa
//buscar dados, enviar dados

import axios from "axios";

export const api = axios.create({
    //criando uma instância  do axios.
    //  Setar algumas informações que serão padrãos
    // para todas as requisições da api.

    baseURL:'http://localhost:3002/api'

})