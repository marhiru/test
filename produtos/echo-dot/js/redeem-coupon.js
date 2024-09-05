function applyCoupon() {
    // Muda o texto do preço
    const priceElement = document.querySelector('.price');
    priceElement.textContent = 'R$ 126,90';

    // Muda o link do botão de compra
    const purchaseButton = document.getElementById('purchaseLink');
    purchaseButton.href = 'https://sualoja.com/comprar-com-desconto';

    // Opcional: Desativa o botão de resgatar cupom após o uso
    const couponButton = document.querySelector('.btn-cupom');
    couponButton.disabled = true;
    couponButton.textContent = 'Cupom Aplicado';
    couponButton.style.backgroundColor = '#6c757d'; // Cor de desativado
}
