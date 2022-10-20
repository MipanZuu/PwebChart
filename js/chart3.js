google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1rnDMuUJLhypPlOVnq-6_WjAYFkMs4Xzkkzqyvrw5qsg/edit?usp=sharing');
        query.send(handleQueryResponse);
        function handleQueryResponse(response) {
            if (response.isError()) {
              alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
              return;
            }
          
        var options = {
          title: 'IPS Denta',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
        var data = response.getDataTable();
        var chart = new google.visualization.ColumnChart(document.getElementById('ColumnChart'));
        chart.draw(data, options);
    }
      }