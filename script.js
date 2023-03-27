const ctx = document.getElementById('myChart');

form.addEventListener("submit", e => 
{
    e.preventDefault();
    let phSegunda = document.getElementById('phSegunda').value;
    let temperaturaSegunda = document.getElementById('temperaturaSegunda').value;
    let phTerça = document.getElementById('phTerça').value;
    let temperaturaTerça = document.getElementById('temperaturaTerça').value;
    let phQuarta = document.getElementById('phQuarta').value;
    let temperaturaQuarta = document.getElementById('temperaturaQuarta').value;
    let phQuinta = document.getElementById('phQuinta').value;
    let temperaturaQuinta = document.getElementById('temperaturaQuinta').value;
    let phSexta= document.getElementById('phSexta').value;
    let temperaturaSexta = document.getElementById('temperaturaSexta').value;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
            
            datasets: [
                {
                axis: 'y',
                label: 'pH',
                data: [phSegunda, phTerça, phQuarta, phQuinta, phSexta],
                fill: false,
                borderColor: 'rgb(255, 186, 8, 1)',
                backgroundColor: 'rgb(255, 186, 8, 0.2)',
                pointBackgroundColor: 'rgb(255, 186, 8, 1)',
                pointBorderWidth: 1,
                borderWidth: 3
                },
                {
                    axis: 'y',
                    label: 'Temperatura',
                    data: [temperaturaSegunda, temperaturaTerça, temperaturaQuarta, temperaturaQuinta, temperaturaSexta],
                    fill: false,
                    borderColor: 'rgb(193, 18, 31, 1)',
                    backgroundColor: 'rgb(193, 18, 31, 0.2)',
                    pointBackgroundColor: 'rgb(193, 18, 31, 1)',
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