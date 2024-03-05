document.getElementById("form").addEventListener("click", function (event) {
    event.preventDefault()
});

let carrinhoCompras = []
let carrinho = document.getElementById('carrinhoCompras')
let total = document.getElementById('total')
let somaDosValores = 0
let valorProduto = 0

function consultarValor() {
    let inputValue = document.getElementById('inputValue').value.toLowerCase()
    let consultarValorBtn = document.getElementById('consultarValorBtn')
    let comprarProdutoBtn = document.getElementById('comprarProdutoBtn')

    if (inputValue === 'limao') {
        inputValue = 'limão'
    }

    switch (inputValue) {
        case 'morango':
            valorProduto = 5.99
            respostaProduto(valorProduto)
            break
        case 'laranja':
            valorProduto = 3.99
            respostaProduto(valorProduto)
            break
        case 'limão':
            valorProduto = 2.99
            respostaProduto(valorProduto)
            break
        case 'manga':
            valorProduto = 4.99
            respostaProduto(valorProduto)
            break
        default:
            alert('Produto não encontrado!')
    }
    
    if(valorProduto != 0){
    consultarValorBtn.style.display = 'none'
    comprarProdutoBtn.style.display = 'initial'
    }
}

function respostaProduto(a) {
    const respostaProduto = document.getElementById('respostaProduto')
    respostaProduto.innerText = `O valor do produto é R$ ${a} Kg`
}

function comprarProduto() {
    let inputValue = document.getElementById('inputValue').value.toLowerCase()
    let novoProduto = { nome: inputValue, valor: valorProduto }
    carrinhoCompras.push(novoProduto)

    let consultarValorBtn = document.getElementById('consultarValorBtn')
    let comprarProdutoBtn = document.getElementById('comprarProdutoBtn')

    consultarValorBtn.style.display = 'initial'
    comprarProdutoBtn.style.display = 'none'

    atualizarCarrinho()

    const respostaProduto = document.getElementById('respostaProduto')
    respostaProduto.innerText = ''
}

function atualizarCarrinho() {
    let conteudoCarrinho = ''
    somaDosValores = 0
    carrinhoCompras.forEach(element => {
        conteudoCarrinho += `${element.nome}: R$ ${element.valor} Kg <br>`
        somaDosValores += parseFloat(element.valor)
    });

    carrinho.innerHTML = conteudoCarrinho
    total.innerHTML = `Total: R$ ${somaDosValores.toFixed(2)}`
}
