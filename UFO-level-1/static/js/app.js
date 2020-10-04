// Retrieve the UFO sightings from data.js
let tableData = data;

//Get a reference to the table body from D3
let tbody = d3.select("tbody");

//Select the table from D3
let table = d3.select("table");

let filterButton = d3.select("#filter-btn"),
    form = d3.select("#form");

//Fill the table with the UFO sighting data
data.forEach(UFOsighting => {
    let row = tbody.append("tr");
    row.append("td").text(UFOsighting.datetime);
    row.append("td").text(UFOsighting.city);
    row.append("td").text(UFOsighting.state);
    row.append("td").text(UFOsighting.country);
    row.append("td").text(UFOsighting.shape);
    row.append("td").text(UFOsighting.durationMinutes);
    row.append("td").text(UFOsighting.comments);
});

// Complete the event handler function
const runEnter = () => {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    let inputEntry = d3.select("#datetime"), 
        inputValue = inputEntry.property("value");

        console.log(inputEntry);
        console.log(inputValue);

    let filteredData = tableData.filter(UFOsighting => UFOsighting.datetime === inputValue);

    //Remove all UFO sighting data from the table
    tbody.html("");

    //Create a new filtered table
    filteredData.forEach(UFOsighting => {
        let row = tbody.append("tr");
        row.append("td").text(UFOsighting.datetime);
        row.append("td").text(UFOsighting.city);
        row.append("td").text(UFOsighting.state);
        row.append("td").text(UFOsighting.country);
        row.append("td").text(UFOsighting.shape);
        row.append("td").text(UFOsighting.durationMinutes);
        row.append("td").text(UFOsighting.comments);
    });
}; 

// Create event handlers 
filterButton.on("click", runEnter);
form.on("submit",runEnter);
