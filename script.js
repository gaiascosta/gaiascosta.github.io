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
    drawChart(ph, temperature);
    alert(parseInt(ph) + parseInt(temperature))
}

function drawChart(x, y) {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales'],
        ['2013',  parseInt(x)],
        ['2014',  parseInt(y)],
        ['2015',  660],
        ['2016',  1030]
      ]);


    var options = {
      title: 'Company Performance',
      hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
      vAxis: {minValue: 0}
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }