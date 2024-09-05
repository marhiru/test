// Função para calcular a data futura ignorando fins de semana
function addBusinessDays(startDate, days) {
    let currentDate = new Date(startDate.getTime());
    let addedDays = 0;
    while (addedDays < days) {
        currentDate.setDate(currentDate.getDate() + 1);
        // Se não for sábado (6) ou domingo (0), incrementa o contador de dias úteis
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            addedDays++;
        }
    }
    return currentDate;
}

// Data inicial (hoje)
const today = new Date();

// Calcula as datas iniciais e finais do intervalo de dias úteis
const minDeliveryDate = addBusinessDays(today, 7);
const maxDeliveryDate = addBusinessDays(today, 12);

// Formata as datas para um formato legível
const options1 = { day: 'numeric', month: 'long' };
const options = { day: 'numeric', };
const minFormattedDate = minDeliveryDate.toLocaleDateString('pt-BR', options);
const maxFormattedDate = maxDeliveryDate.toLocaleDateString('pt-BR', options1);

// Exibe o intervalo de datas no parágrafo
document.getElementById('date').textContent = `${minFormattedDate} - ${maxFormattedDate}`;