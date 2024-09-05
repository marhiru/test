document.getElementById('couponBtn').addEventListener('click', function() {
  const couponCode = 'PRIME5'; // O texto do cupom
  navigator.clipboard.writeText(couponCode).then(() => {
    // Exibe uma mensagem de confirmaçãos
    // message.style.display = 'block';
    alert('Cupom copiado para a área de transferência.');
    document.getElementById('couponBtn').textContent = 'Cupom copiado!';
    
    // Esconde a mensagem após 2 segundos
    setTimeout(() => {
      message.style.display = 'none';
    }, 2000);
  }).catch(err => {
    console.error('Falha ao copiar o texto: ', err);
  });
});

  