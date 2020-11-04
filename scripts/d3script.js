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



// var chart = d3.timeline();

// var svg = d3.select("#test-timeline").append("svg").attr("width", 1000)
//   .datum(testData).call(chart);

// var timeline = d3.select("#dss-timeline").append("svg").attr("viewBox", "0,0,15,30")
//   .append("rect")
//   .attr("width", 30)
//   .attr("height", 30)
//   .attr("fill", "steelblue")
//   .attr("x", 0)
//   .attr("y", 0);




// var container = d3.select("#dss-timeline").append("div")
//   .attr("id", "viewport");

// var svgContainer = container.append('svg')
//   //.attr('height', 100)
//   //.attr('width', 100)
//   .attr('id', 'timeline-container')
//   .call(d3.zoom().on("zoom", function () {
//     svgContainer.attr("transform", d3.event.transform)
// }))
// .append("g");

// svgContainer.selectAll("rects1")
//   .data(elements)
//   .enter()
//   .append("rect")
//   .attr("width", 50)
//   .attr("height", 20)
//   .attr("x", 475)
//   .attr("y", function(d, i){
//       return 100 * i;
//   })
//   .style("fill", "brown");




// svgContainer.selectAll("events")
//   .data(dssElements)
//   .enter()
//   .append("circle")
//   .attr("width", 20)
//   .attr("height", 20)
//   .attr("x", function(d, i){
//     return 100 * i;
//   })
//   .attr("y", 300)
//   .style("fill", "brown");
  

const timelineObjectType = {
  EVENT: 'event',
  DURATION: 'duration',
}

const scale = 1000;

var elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var dssElements = [
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 24, 5)},
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 24, 6)},
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 24, 7)},
  {timelineObjectType: timelineObjectType.DURATION, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 24, 7), endTime: new Date(2020, 0, 17, 3, 28, 7)},
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 24, 7)},
  {timelineObjectType: timelineObjectType.DURATION, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 28, 9), endTime: new Date(2020, 0, 17, 3, 30, 7)},
  {timelineObjectType: timelineObjectType.DURATION, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 30, 7), endTime: new Date(2020, 0, 17, 3, 35, 7)},
];


var svg = d3.select("#dss-timeline").append("div")
.attr("id", "viewport")
.append("svg")
.attr("width", "100%")
.attr("height", "100%")
.call(d3.zoom().on("zoom", function () {
        svg.attr("transform", d3.event.transform)
}))
.append("g");

var timelineContainerWidth = svg.node().getBoundingClientRect().width;

var startTimes = []

dssElements.forEach(element => {
  startTimes.push(element.startTime)
});

var maxDate=new Date(Math.max.apply(null,startTimes));
var minDate=new Date(Math.min.apply(null,startTimes));
var dateDifference = maxDate - minDate;

var tooltip = d3.select("#viewport").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

//var eventOverflowOffset = 0;

svg.selectAll("events")
  .data(dssElements)
  .enter()
  .append("circle")
  .attr("r", 20)
  .attr("cx", function(d, i){
    console.log(d.startTime-minDate);
    return (d.startTime-minDate)/1000
  })
  .attr("cy", 300)
  .style("fill", "brown");

var durations = dssElements.filter(element => element.timelineObjectType == timelineObjectType.DURATION);

svg.selectAll("durations")
  .data(durations)
  .enter()
  .append("rect")
  .attr("x", function(d, i){
    console.log(d.startTime-minDate);
    return CalculateCoordinateFromTime(d.startTime)
  })
  .attr("y", 20)
  .attr("width", function(d, i){
    console.log(d.endTime)
    console.log(d.startTime)
    console.log(d.endTime-d.startTime);
    return ScaleTimeDurationToPxLength(d.startTime, d.endTime)
  })
  .attr("height", 30)
  .attr("cy", 400)
  .attr("class", "duration")
  .style("fill", "green")
  .on("mouseover", function(d) {		
    tooltip.transition()		
      .duration(200)		
      .style("opacity", .9);		
    tooltip.html(d.startTime + "<br/>"  + d.endTime + "<br/>"  + d.eventId)	
      .style("left", (d3.event.pageX) + "px")		
      .style("top", (d3.event.pageY - 28) + "px");	
    })
  .on("mouseout", function(d) {		
    tooltip.transition()		
      .duration(500)		
      .style("opacity", 0);
});;



function ScaleTimeDurationToPxLength(startTime, endTime){
  return (endTime-startTime)/scale;
}

function CalculateCoordinateFromTime(time){
  return (time-minDate)/1000
}


// svg.append("circle")
// .attr("cx", 0)
// .attr("cy", document.body.clientHeight / 2)
// .attr("r", 50)
// .style("fill", "#B8DEE6");