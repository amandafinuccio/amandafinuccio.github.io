      $(document).ready(function() {
        /*
         Load the data from the CSV file. This is the contents of the file:
         
          Item1,Item2,Item3,Item4,Item5
          Year1,8,4,6,5
          Year2,3,4,2,3
          Year3,86,76,79,77
          Year4,3,16,13,15
          
         */ 
        $.get('data.csv', function(csv) {
            $('#container').highcharts({
                chart: {
                  type: 'column'
                },
                data: {
                    csv: csv
                },
                title: {
              text: 'Bar Chart of Items/Years'
            },
            yAxis: {
              title: {
                text: 'Units'
              }
            }
            });
        });
        
        
      });
