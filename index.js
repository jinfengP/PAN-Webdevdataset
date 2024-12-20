yearsList = []
tempList = []

async function getData() {
    const response = await fetch("jinfeng.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
              const row = elem.split(",");
              const year = row[0];
              const temp = row[1];
              console.log(year + " " + temp)
              yearsList.push(year)
              tempList.push(temp)
            });
          }
    //end of functions
    //call the function to test if you see the image on the left in the console

async function makeChart() {
getData();
const ctx = document.getElementById('myChart');
console.log(yearsList)
console.log(tempList)
//codeblock for the chart
new Chart(ctx, {
  type: 'line',
  data: {
    labels: yearsList,
    datasets: [{
      label: 'Temperature Change',
      data: tempList,
      borderWidth: 1,
      backgroundColor: "#00D816",
      borderColor: "#F700C6"
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})}

makeChart();