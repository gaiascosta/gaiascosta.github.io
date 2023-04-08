const ctx = document.getElementById('myChart');

form.addEventListener("submit", e => 
{
    e.preventDefault();
    let phSemana_1 = document.getElementById('phSemana_1').value;
    let phSemana_2 = document.getElementById('phSemana_2').value;
    let phSemana_3 = document.getElementById('phSemana_3').value;
    let phSemana_4 = document.getElementById('phSemana_4').value;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
            
            datasets: [
                {
                axis: 'y',
                label: 'pH',
                data: [phSemana_1, phSemana_2, phSemana_3, phSemana_4],
                fill: false,
                borderColor: 'rgb(255, 186, 8, 1)',
                backgroundColor: 'rgb(255, 186, 8, 0.2)',
                pointBackgroundColor: 'rgb(255, 186, 8, 1)',
                pointBorderWidth: 1,
                borderWidth: 3
                },
            ],
              
        },
        options: {
            responsive: true
        }
    });
});

/* pH, temperatura, Oxigênio dissolvido (OD), nitrito, amônia, dureza, alcalinidade, peso peixes, peso plantas, comprimento peixes, altura plantas, nitrato */