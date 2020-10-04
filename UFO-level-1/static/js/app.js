// Retrieve the UFO sightings from data.js
let tableData = data;

//Get a reference to the table body from D3
let tbody = d3.select("tbody");

//Select the table from D3
let table = d3.select("table");

//Fill the table with the UFO sighting data
data.forEach(UFOsighting => {
    let row = tbody.append("tr");
    row.append("td").text(UFOsighting.datetime);
    row.append("td").text(UFOsighting.city);
    row.append("td").text(UFOsighting.state);
    row.append("td").text(UFOsighting.country);
    row.append("td").text(UFOsighting.shape);
    row.append("td").text(UFOsighting.comments);
});


