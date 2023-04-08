const ctx = document.getElementById('myChart');
const form = document.getElementById('buttonForm');

form.addEventListener("submit", e => 
{

    e.preventDefault();
    let pH_1 = document.getElementById('pH_1').value;
    let pH_2 = document.getElementById('pH_2').value;
    let pH_3 = document.getElementById('pH_3').value;
    let pH_4 = document.getElementById('pH_4').value;

    let temperatura_1 = document.getElementById('temperatura_1').value;
    let temperatura_2 = document.getElementById('temperatura_2').value;
    let temperatura_3 = document.getElementById('temperatura_3').value;
    let temperatura_4 = document.getElementById('temperatura_4').value;

    let oxigenioDissolvido_1 = document.getElementById('oxigenioDissolvido_1').value;
    let oxigenioDissolvido_2 = document.getElementById('oxigenioDissolvido_2').value;
    let oxigenioDissolvido_3 = document.getElementById('oxigenioDissolvido_3').value;
    let oxigenioDissolvido_4 = document.getElementById('oxigenioDissolvido_4').value;

    let nitrito_1 = document.getElementById('nitrito_1').value;
    let nitrito_2 = document.getElementById('nitrito_2').value;
    let nitrito_3 = document.getElementById('nitrito_3').value;
    let nitrito_4 = document.getElementById('nitrito_4').value;

    let amonia_1 = document.getElementById('amonia_1').value;
    let amonia_2 = document.getElementById('amonia_2').value;
    let amonia_3 = document.getElementById('amonia_3').value;
    let amonia_4 = document.getElementById('amonia_4').value;

    let dureza_1 = document.getElementById('dureza_1').value;
    let dureza_2 = document.getElementById('dureza_2').value;
    let dureza_3 = document.getElementById('dureza_3').value;
    let dureza_4 = document.getElementById('dureza_4').value;

    let alcalinidade_1 = document.getElementById('alcalinidade_1').value;
    let alcalinidade_2 = document.getElementById('alcalinidade_2').value;
    let alcalinidade_3 = document.getElementById('alcalinidade_3').value;
    let alcalinidade_4 = document.getElementById('alcalinidade_4').value;

    let pesoPeixes_1 = document.getElementById('pesoPeixes_1').value;
    let pesoPeixes_2 = document.getElementById('pesoPeixes_2').value;
    let pesoPeixes_3 = document.getElementById('pesoPeixes_3').value;
    let pesoPeixes_4 = document.getElementById('pesoPeixes_4').value;

    let pesoPlantas_1 = document.getElementById('pesoPlantas_1').value;
    let pesoPlantas_2 = document.getElementById('pesoPlantas_2').value;
    let pesoPlantas_3 = document.getElementById('pesoPlantas_3').value;
    let pesoPlantas_4 = document.getElementById('pesoPlantas_4').value;

    let comprimentoPeixes_1 = document.getElementById('comprimentoPeixes_1').value;
    let comprimentoPeixes_2 = document.getElementById('comprimentoPeixes_2').value;
    let comprimentoPeixes_3 = document.getElementById('comprimentoPeixes_3').value;
    let comprimentoPeixes_4 = document.getElementById('comprimentoPeixes_4').value;

    let alturaPlantas_1 = document.getElementById('alturaPlantas_1').value;
    let alturaPlantas_2 = document.getElementById('alturaPlantas_2').value;
    let alturaPlantas_3 = document.getElementById('alturaPlantas_3').value;
    let alturaPlantas_4 = document.getElementById('alturaPlantas_4').value;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
            datasets: [
                {
                axis: 'y',
                label: 'pH',
                data: [pH_1, pH_2, pH_3, pH_4],
                fill: false,
                borderColor: 'rgb(0, 18, 25, 1)',
                backgroundColor: 'rgb(0, 18, 25, 0.2)',
                pointBackgroundColor: 'rgb(0, 18, 25, 1)',
                pointBorderWidth: 1,
                borderWidth: 3
                },
                {
                    axis: 'y',
                label: 'Temperatura',
                data: [temperatura_1, temperatura_2, temperatura_3, temperatura_4],
                fill: false,
                borderColor: 'rgb(0, 95, 115, 1)',
                backgroundColor: 'rgb(0, 95, 115, 0.2)',
                pointBackgroundColor: 'rgb(0, 95, 115, 1)',
                pointBorderWidth: 1,
                borderWidth: 3
                },
                {
                label: 'Oxigênio Dissolvido',
                data: [oxigenioDissolvido_1, oxigenioDissolvido_2, oxigenioDissolvido_3, oxigenioDissolvido_4],
                fill: false,
                borderColor: 'rgb(10, 147, 150, 1)',
                backgroundColor: 'rgb(10, 147, 150, 0.2)',
                pointBackgroundColor: 'rgb(10, 147, 150, 1)',
                pointBorderWidth: 1,
                borderWidth: 3
                },
                {
                label: 'Nitrito',
                data: [nitrito_1, nitrito_2, nitrito_3, nitrito_4],
                fill: false,
                borderColor: 'rgb(148, 210, 189, 1)',
                backgroundColor: 'rgb(148, 210, 189, 0.2)',
                pointBackgroundColor: 'rgb(148, 210, 189, 1)',
                pointBorderWidth: 1,
                borderWidth: 3
                },
                {
                label: 'Amonia',
                data: [amonia_1, amonia_2, amonia_3, amonia_4],
                fill: false,
                borderColor: 'rgb(233, 216, 166, 1)',
                backgroundColor: 'rgb(233, 216, 166, 0.2)',
                pointBackgroundColor: 'rgb(233, 216, 166, 1)',
                pointBorderWidth: 1,
                borderWidth: 3
                },
                {
                label: 'Dureza',
                data: [dureza_1, dureza_2, dureza_3, dureza_4],
                fill: false,
                borderColor: 'rgb(238, 155, 0, 1)',
                backgroundColor: 'rgb(238, 155, 0, 0.2)',
                pointBackgroundColor: 'rgb(238, 155, 0, 1)',
                pointBorderWidth: 1,
                borderWidth: 3
                },
                {
                label: 'Alcalinidade',
                data: [alcalinidade_1, alcalinidade_2, alcalinidade_3, alcalinidade_4],
                fill: false,
                borderColor: 'rgb(202, 103, 2, 1)',
                backgroundColor: 'rgb(202, 103, 2, 0.2)',
                pointBackgroundColor: 'rgb(202, 103, 2, 1)',
                pointBorderWidth: 1,
                borderWidth: 3
                },
                {
                label: 'Peso Peixes',
                data: [pesoPeixes_1, pesoPeixes_2, pesoPeixes_3, pesoPeixes_4],
                fill: false,
                borderColor: 'rgb(187, 62, 3, 1)',
                backgroundColor: 'rgb(187, 62, 3, 0.2)',
                pointBackgroundColor: 'rgb(187, 62, 3, 1)',
                pointBorderWidth: 1,
                borderWidth: 3
                },
                {
                label: 'Peso Plantas',
                data: [pesoPlantas_1, pesoPlantas_2, pesoPlantas_3, pesoPlantas_4],
                fill: false,
                borderColor: 'rgb(174, 32, 18, 1)',
                backgroundColor: 'rgb(174, 32, 18, 0.2)',
                pointBackgroundColor: 'rgb(174, 32, 18, 1)',
                pointBorderWidth: 1,
                borderWidth: 3
                },
                {
                label: 'Comprimento Peixes',
                data: [comprimentoPeixes_1, comprimentoPeixes_2, comprimentoPeixes_3, comprimentoPeixes_4],
                fill: false,
                borderColor: 'rgb(155, 34, 38, 1)',
                backgroundColor: 'rgb(155, 34, 38, 0.2)',
                pointBackgroundColor: 'rgb(155, 34, 38, 1)',
                pointBorderWidth: 1,
                borderWidth: 3
                },
                {
                label: 'Altura Peixes',
                data: [alturaPlantas_1, alturaPlantas_2, alturaPlantas_3, alturaPlantas_4],
                fill: false,
                borderColor: 'rgb(78, 11, 9, 1)',
                backgroundColor: 'rgb(78, 11, 9, 0.2)',
                pointBackgroundColor: 'rgb(78, 11, 9, 1)',
                pointBorderWidth: 1,
                borderWidth: 3
                }
                
            ],
                    
        },
        options: {
            responsive: true
        }
    });
});

/* pH, temperatura, Oxigênio dissolvido (OD), nitrito, amônia, dureza, alcalinidade, peso peixes, peso plantas, comprimento peixes, altura plantas, nitrato */