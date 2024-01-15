let valorTotal;
limpar();

function adicionar() {
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorProduto = produto.split('R$')[1];
  let quantidade = document.getElementById('quantidade').value;
  let subtotal = 0;

  if(quantidade > 0){
    subtotal = valorProduto * quantidade;
    let produtosCarrinho = document.getElementById('lista-produtos');
    produtosCarrinho.innerHTML = produtosCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
    </section>`;
    quantidade = document.getElementById('quantidade').value = '';
    let total = document.getElementById('valor-total');
    valorTotal = valorTotal + subtotal;
    total.textContent = `R$${valorTotal}`;
    }else{
      alert('A quantidade digitada é inválida! Adicione no mínimo 1 unidade!');
    }
  
}

function limpar() {
  valorTotal = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$0';
}
