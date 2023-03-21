const form = document.getElementById('form');
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

form.addEventListener("submit", e => 
{
    e.preventDefault();
    lerAtualizar();
});

function lerAtualizar(){
    let ph = document.getElementById('ph').value;
    let temperature = document.getElementById('temperature').value;
    let alcalinidade = document.getElementById('alcalinidade').value;
    let nitrito = document.getElementById('nitrito').value;
    drawChart(ph, temperature, alcalinidade, nitrito);
    //alert(parseInt(ph) + parseInt(temperature) + parseInt(alcalinidade) + parseInt(nitrito))
}

function drawChart(w, x, y, z) {
    var data = google.visualization.arrayToDataTable([
        ['', ''],
        ['pH',  parseFloat(w)],
        ['Temperatura',  parseFloat(x)],
        ['Alcalinidade',  parseFloat(y)],
        ['Nitrito',  parseFloat(z)]
      ]);


    var options = {
      title: 'Aquaponia',
      hAxis: {title: 'Dados',  titleTextStyle: {color: '#333'}},
      vAxis: {minValue: 0}
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
