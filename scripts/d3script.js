// var width = 300;
// var height = 300;
// var svg = d3.select("#svgcontainer")
//    .append("svg").attr("width", width).attr("height", height);
// //Create and append rectangle element
// svg.append("rect")
//     .attr("x", 20)
//     .attr("y", 20)
//     .attr("width", 200)
//     .attr("height", 100)
//     .attr("fill", "green");

var testData = [
    {label: "person a", times: [
      {"starting_time": 1355752800000, "ending_time": 1355759900000},
      {"starting_time": 1355767900000, "ending_time": 1355774400000}]},
    {label: "person b", times: [
      {"starting_time": 1355759910000, "ending_time": 1355761900000}]},
    {label: "person c", times: [
      {"starting_time": 1355761910000, "ending_time": 1355763910000}]}
    ];

var chart = d3.timeline();

var svg = d3.select("#timeline1").append("svg").attr("width", 1000)
  .datum(testData).call(chart);