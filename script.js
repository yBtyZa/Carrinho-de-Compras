document.getElementById("form").addEventListener("click", function (event) {
    event.preventDefault()
});

let carrinhoCompras = []
let valorProduto = 0
let carrinho = document.getElementById('carrinhoCompras')

function consultarValor() {
    let inputValue = document.getElementById('inputValue').value.toLowerCase()
    let consultarValorBtn = document.getElementById('consultarValorBtn')
    let comprarProdutoBtn = document.getElementById('comprarProdutoBtn')

    if(inputValue === 'limao'){
        inputValue = 'limão'
    }

    switch (inputValue) {
        case 'morango':
            valorProduto = 5.99
            break
        case 'laranja':
            valorProduto = 3.99
            break
        case 'limão':
            valorProduto = 2.99
            break
        case 'manga':
            valorProduto = 4.99
            break
    }
    respostaProduto(valorProduto)
    consultarValorBtn.style.display = 'none'
    comprarProdutoBtn.style.display = 'initial'
}

function respostaProduto(a) {
    const respostaProduto = document.getElementById('respostaProduto')
    respostaProduto.innerText = `O valor do produto é R$ ${a} Kg`
}

function comprarProduto(){
    let inputValue = document.getElementById('inputValue').value.toLowerCase()
    let novoProduto = {nome: inputValue, valor: valorProduto}
    carrinhoCompras.push(novoProduto)

    let consultarValorBtn = document.getElementById('consultarValorBtn')
    let comprarProdutoBtn = document.getElementById('comprarProdutoBtn')

    consultarValorBtn.style.display = 'initial'
    comprarProdutoBtn.style.display = 'none'

    atualizarCarrinho()
}

function atualizarCarrinho(){
    let conteudoCarrinho = ''
    carrinhoCompras.forEach(element => {
        conteudoCarrinho += `${element.nome}: R$ ${element.valor} Kg <br>`
    });
    carrinho.innerHTML = conteudoCarrinho
}