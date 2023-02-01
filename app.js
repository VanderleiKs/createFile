import * as fs from 'fs/promises';
import axios from 'axios';

let listNova = []

const dados = axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.data)

//console.log(await dados())


/* axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        const lista = response.data

        lista.forEach((o) => {
            const li = [o.userId, o.id, o.title, o.completed].filter(d => d != null).join('|');
            if (listNova.length > 0) {
                listNova = [...listNova, "\r\n", li]
            }
            else {
                listNova = [li]
            }
        })
        listNova = listNova.filter(d => d != null);
        fs.writeFile('teste.txt', listNova).then(() => console.log('concluido'))


        return response.data
    }) */

const list = [
    {
        "nome": "Maria",
        "idade": 25,
        "sexo": "F"
    },
    {
        "nome": "Joao",
        "idade": 32,
        "sexo": "M"
    },
    {
        "nome": "Fernanda",
        "idade": null,
        "sexo": "F"
    }
]


/* userId: 1,
id: 11,
title: 'vero rerum temporibus dolor',
completed: true
 */
/* for (var i = 1; i < list.length; i++) {
    listNova = [...listNova, "\r\n", list[i].nome, list[i].idade, list[i].sexo]
} */


async function montarArquivo() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            response.data.forEach((o) => {
                const li = [o.userId, o.id, o.title, o.completed].filter(d => d != null).join('|');
                if (listNova.length > 0) {
                    listNova = [...listNova, "\r\n", li]
                }
                else {
                    listNova = [li]
                }
            })
            listNova = listNova.filter(d => d != null);
            fs.writeFile('CONTRATO.txt', listNova).then(() => console.log('concluido'))
        })
}



//console.log(listNova.filter(d => d != null))

montarArquivo()
