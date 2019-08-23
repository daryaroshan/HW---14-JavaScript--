// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Function build table
function displayData(data){
    tbody.html("");
    //loop through to add to the table in html
    data.forEach(sighting => {
        console.table(sighting);
        let row = tbody.append("tr");

       console.table(Object.values(sighting));
       Object.values(sighting).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
}

// Event that calls a function  name it handleClick
function handleClick(){
    // prevent from refreshing
    d3.event.preventDefault()  
    
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check to see if a date was entered and filter the data using that date
    if (date){
        // Apply filter to the table data to only keep the 
        // rows where the datetime value matches the filter value
        filterData = filterData.filter((row) => row.datetime === date);

    }

    displayData(filterData);
}



d3.selectAll("#filter-btn").on("click", handleClick);
displayData(tableData);