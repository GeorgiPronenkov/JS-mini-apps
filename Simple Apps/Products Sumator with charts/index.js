const selectId = document.getElementById('selection');
const input = document.getElementById('num');
const submitBtn = document.getElementById('submit');
const txtInput = document.getElementById('txt');
const txtBtn = document.getElementById('txtSubmit');

//costs object
const dataCosts = {
    options: ['beer', 'food', 'fuel'],
    expenses: {},
    get Total() {
       return Object.values(this.expenses)
            .reduce((a,b) => a + b);
    },
    get Entries() {
        return Object.entries(this.expenses);
    } 
};

//firstButton
submitBtn.addEventListener('click', function() {
    if (dataCosts.expenses[selectId.value]) {
        dataCosts.expenses[selectId.value] += +input.value;
    } else {
        dataCosts.expenses[selectId.value] = +input.value;
    }
    //drawBarChart(dataObj.Entries);
    doughNutChart(dataCosts.Entries);
});

//second button
txtBtn.addEventListener('click', function() {
    if (!txtInput.value) {
        return false;
    }
   dataCosts.options
            .push(txtInput.value);
   updateOpt(selectId, dataCosts.options);
});

//update option function
function updateOpt(container, options) {
    container.innerHTML = '';
    for (let index = 0; index < options.length; index++) {  
         let preselectedValue = '';
         if (index === 1) {
              preselectedValue = 'selected';
         }
        container.innerHTML += `
            <option ${preselectedValue} value="${options[index]}">${options[index]}</option>
        `;
     }     
}
updateOpt(selectId, dataCosts.options);

//barchart
function drawBarChart(chartData) {
        document.getElementById('container').innerHTML = '';

        // create a data set
        var data = anychart.data.set(chartData);
    
        // create a chart
        var chart = anychart.bar();
    
        // create a bar series and set the data
        var series = chart.bar(data);
    
        // set the chart title
        chart.title("Bar Chart: Basic Sample");
    
        // set the titles of the axes
        chart.xAxis().title("Manager");
        chart.yAxis().title("Sales, $");
    
        // set the container id
        chart.container("container");
    
        // initiate drawing the chart
        chart.draw();
 }   

//doughchart
function doughNutChart(chartData) {
    document.getElementById('container').innerHTML = '';
    var data = anychart.data.set(chartData);
      
      // create a pie chart and set the data
      chart = anychart.pie(data);
      
      /* set the inner radius
      (to turn the pie chart into a doughnut chart)*/
      chart.innerRadius("30%");
      
      // set the container id
      chart.container("container");
      
      // initiate drawing the chart
      chart.draw();
}