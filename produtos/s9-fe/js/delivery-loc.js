async function fetchIPAndLocation() {
    try {
        // Faz a requisição à API IPinfo.io para obter informações de localização
        const ipInfoResponse = await fetch('https://ipinfo.io/json'); // Substitua 'YOUR_API_TOKEN' pelo seu token da API IPinfo
        const ipData = await ipInfoResponse.json();

        // Extrai as informações necessárias
        const cep = ipData.postal;
        const city = ipData.city;

        // Formata a localização como "Cidade, Estado - CEP"
        const formattedLocation = `${city}, ${cep}`;

        // Exibe a localização no parágrafo
        document.getElementById('delivery-location').textContent = `Entregando em ${formattedLocation} (Localização aproximada)`;
    } catch (error) {
        console.error('Erro ao obter a geolocalização:', error);
        document.getElementById('delivery-location').textContent = 'Não foi possível determinar a localização.';
    }
}

// Chama a função para obter e exibir a geolocalização e o CEP
fetchIPAndLocation();