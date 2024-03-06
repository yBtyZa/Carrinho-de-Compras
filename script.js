document.getElementById("form").addEventListener("click", function (event) {
    event.preventDefault()
});

let carrinhoCompras = []
let total = document.getElementById('total')
let carrinho = document.getElementById('carrinhoCompras')
let qtdProdutos = document.getElementById('qtdProdutos')
let produto = ''
let valorProduto = 0
let imgProduto = ''
let somaQtdProdutos = 0
let somaDosValores = 0

let consultarValorBtn = document.getElementById('consultarValorBtn')
let comprarProdutoBtn = document.getElementById('comprarProdutoBtn')
let consultarOutroProdutoBtn = document.getElementById('consultarOutroProdutoBtn')
let imagemProduto = document.getElementById('imagemProduto')
let class_form = document.getElementById('class_form')

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
        // Criando uma variável para receber o objeto do produto consultado
        let produtoConsultadoLS = {
            nome: produto,
            valor: valorProduto
        }
        // Adicionando ao armazenamento local
        localStorage.setItem('produto_consultado', JSON.stringify(produtoConsultadoLS))
        let ultimoProdutoConsultado = localStorage.getItem('produto_consultado')
        // Criando um array para receber esses dados
        let data = []
        // Pegando o item de produtos consultados (que ainda não existe)        
        let produtosConsultadosStr = localStorage.getItem('produtos_consultados')
        
        // Se, produtos consultados existir, transformamos ele em um objeto '[{}]' => [{}]
        if(produtosConsultadosStr){
            data = JSON.parse(produtosConsultadosStr)
        }
        // Fazendo o push para esse array com o dado de produto consultado
        data.push(produtoConsultadoLS)
        // Criamos no armazenamento local o item de produtos consultados
        localStorage.setItem('produtos_consultados', JSON.stringify(data))

        console.log('ultimo produto consultado')
        console.log(ultimoProdutoConsultado)
        console.log('-----------------')
        console.log('Produtos Consultados')
        data.forEach(i =>{
            console.log(i)
        })
    }

}

function respostaProduto(a) {
    const respostaProduto = document.getElementById('respostaProduto')
    respostaProduto.innerText = `O valor do ${produto} é R$ ${a} Kg`
}

function comprarProduto() {
    let novoProduto = { nome: produto, valor: valorProduto }
    carrinhoCompras.push(novoProduto)


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
    somaQtdProdutos = carrinhoCompras.length

    carrinhoCompras.forEach(element => {
        conteudoCarrinho += `${element.nome}: R$ ${element.valor} Kg <br>`
        somaDosValores += parseFloat(element.valor)
    });

    carrinho.innerHTML = conteudoCarrinho
    total.innerHTML = `Total: R$ ${somaDosValores.toFixed(2)}`
    qtdProdutos.innerHTML = `Quantidade de produtos: ${somaQtdProdutos}`
}

console.log(carrinhoCompras)