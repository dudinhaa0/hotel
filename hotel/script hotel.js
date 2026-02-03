// Hotel
// Quartos "Ocupados"
// Adicionar taxa de turismo (R$ 10)
// Somar receita da noite

const listaQuartos = [
    {id: 1, nome: 'Quarto 01', preco: 600.00, disponivel: false},
    {id: 2, nome: 'Quarto 02', preco: 1500.00, disponivel: true},
    {id: 3, nome: 'Quarto 03', preco: 1250.00, disponivel: true},
    {id: 4, nome: 'Quarto 04', preco: 500.00, disponivel: false},
    {id: 5, nome: 'Quarto 05', preco: 900.00, disponivel: false},

];

//filter (novo)
const quartosOcupados = listaQuartos.filter(produto => !produto.disponivel);
// console.log(quartosOcupados);

//map (novo)
const quartosComTaxa = quartosOcupados.map(produto =>{
    return{
         ...produto,
        precoFinal:produto.preco + 10
    }
})
console.log(quartosComTaxa);

// // Somar receita da noite
const receitaTotal = quartosComTaxa.reduce((total, quarto) => total + quarto.precoFinal, 0);
console.log(`Receita total da noite: R$ ${receitaTotal.toFixed(2)}`);

