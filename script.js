document.getElementById("form").addEventListener("click", function (event) {
    event.preventDefault()
});

let data = []
let produto = ''
let valorProduto = 0
let imgProduto = ''
let somaQtdProdutos = 0
let somaDosValores = 0
let total = document.getElementById('total')
let carrinho = document.getElementById('carrinhoCompras')
let qtdProdutos = document.getElementById('qtdProdutos')

let consultarValorBtn = document.getElementById('consultarValorBtn')
let comprarProdutoBtn = document.getElementById('comprarProdutoBtn')
let consultarOutroProdutoBtn = document.getElementById('consultarOutroProdutoBtn')
let imagemProduto = document.getElementById('imagemProduto')
let class_form = document.getElementById('class_form')

let carroselImg = document.getElementById('carroselImg')

function consultarValor() {
    let inputValue = document.getElementById('inputValue').value.toLowerCase()

    if (inputValue === 'limao') {
        inputValue = 'limão'
    }

    switch (inputValue) {
        case 'morango':
        case '1':
            valorProduto = 5.99
            produto = 'Morango'
            imgProduto = './assets/img/pngegg.png'
            respostaProduto(valorProduto)
            break
        case 'laranja':
        case '2':
            valorProduto = 3.99
            produto = 'Laranja'
            imgProduto = './assets/img/pngegg (2).png'
            respostaProduto(valorProduto)
            break
        case 'limão':
        case '3':
            valorProduto = 2.99
            produto = 'Limão'
            imgProduto = './assets/img/pngegg (1).png'
            respostaProduto(valorProduto)
            break
        case 'manga':
        case '4':
            valorProduto = 4.99
            produto = 'Manga'
            imgProduto = './assets/img/pngegg (3).png'
            respostaProduto(valorProduto)
            break
        default:
            alert('Produto não encontrado!')
            valorProduto = 0
    }

    if (valorProduto != 0) {
        imagemProduto.src = imgProduto

        class_form.style.display = 'none'
        consultarValorBtn.style.display = 'none'
        comprarProdutoBtn.style.display = 'initial'
        consultarOutroProdutoBtn.style.display = 'initial'

    }

}

function respostaProduto(a) {
    const respostaProduto = document.getElementById('respostaProduto')
    respostaProduto.innerText = `O valor do ${produto} é R$ ${a} Kg`
}

function comprarProduto() {
    let produtoConsultadoLS = {
        nome: produto,
        valor: valorProduto
    }

    localStorage.setItem('produto_consultado', JSON.stringify(produtoConsultadoLS))

    let produtosConsultadosStr = localStorage.getItem('produtos_consultados')

    if (produtosConsultadosStr) {
        data = JSON.parse(produtosConsultadosStr)
    }

    data.push(produtoConsultadoLS)

    localStorage.setItem('produtos_consultados', JSON.stringify(data))

    imagemProduto.src = ''
    inputValue.value = ''
    class_form.style.display = 'flex'
    consultarValorBtn.style.display = 'initial'
    comprarProdutoBtn.style.display = 'none'
    consultarOutroProdutoBtn.style.display = 'none'

    atualizarCarrinho()

    const respostaProduto = document.getElementById('respostaProduto')
    respostaProduto.innerText = ''

}

function consultarOutroProduto() {
    const respostaProduto = document.getElementById('respostaProduto')

    imagemProduto.src = ''
    respostaProduto.innerText = ''

    inputValue.value = ''
    class_form.style.display = 'flex'
    consultarValorBtn.style.display = 'initial'
    comprarProdutoBtn.style.display = 'none'
    consultarOutroProdutoBtn.style.display = 'none'

}

function atualizarCarrinho() {
    let conteudoCarrinho = ''
    somaDosValores = 0
    somaQtdProdutos = data.length

    data.forEach(element => {
        conteudoCarrinho += `${element.nome}: R$ ${element.valor} Kg <br>`
        somaDosValores += parseFloat(element.valor)
    });

    carrinho.innerHTML = conteudoCarrinho
    total.innerHTML = `Total: R$ ${somaDosValores.toFixed(2)}`
    qtdProdutos.innerHTML = `Quantidade de produtos: ${somaQtdProdutos}`

}

function limparCarrinho() {
    localStorage.clear()
    data = []
    carrinho.innerHTML = 'Seu carrinho está vazio!'
    total.innerHTML = 'Total: R$ 0'
    qtdProdutos.innerHTML = 'Quantidade de produtos: 0'
}

let carrossel = ['./assets/img/Morango.png', './assets/img/Laranja.png', './assets/img/Limão.png', './assets/img/Manga.png']
let index = 0;
carrossel.forEach(i => {
    carroselImg.innerHTML += `<img src="${i}">`
})
