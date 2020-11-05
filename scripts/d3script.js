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

const durationTypes = {
  DSS_SESSION: 'DssSession',
  PRIMARY_REPLICA: 'PrimaryReplica',
  SECONDARY_REPLICA: 'SecondaryReplica'
}

var scale = 1000;

var elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var dssElements = [
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 24, 5)},
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 24, 6)},
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 24, 7)},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.DSS_SESSION, startTime: new Date(2020, 0, 17, 3, 24, 7), endTime: new Date(2020, 0, 17, 3, 28, 7), dssSessionId: "DssSessionId1"},
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 24, 7)},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.DSS_SESSION, startTime: new Date(2020, 0, 17, 3, 28, 9), endTime: new Date(2020, 0, 17, 3, 30, 7), dssSessionId: "DssSessionId2"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.DSS_SESSION, startTime: new Date(2020, 0, 17, 3, 30, 7), endTime: new Date(2020, 0, 17, 5, 35, 7), dssSessionId: "DssSessionId3"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.PRIMARY_REPLICA, startTime: new Date(2020, 0, 17, 3, 28, 9), endTime: new Date(2020, 0, 17, 3, 30, 7), replicaId: "ReplicaId1"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.PRIMARY_REPLICA, startTime: new Date(2020, 0, 17, 3, 30, 7), endTime: new Date(2020, 0, 17, 5, 35, 7), replicaId: "ReplicaId2"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.SECONDARY_REPLICA, startTime: new Date(2020, 0, 17, 3, 28, 9), endTime: new Date(2020, 0, 17, 3, 30, 7), replicaId: "ReplicaId2"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.SECONDARY_REPLICA, startTime: new Date(2020, 0, 17, 3, 30, 7), endTime: new Date(2020, 0, 17, 5, 35, 7), replicaId: "ReplicaId3"},
];


var svg = d3.select("#dss-timeline").append("div")
.attr("id", "viewport")
.append("svg")
.attr("width", "100%")
.attr("height", "100%")
.call(d3.zoom().on("zoom", function (event) {
        svg.attr("transform", event.transform)
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

// EVENTS ---------------------------------------
svg.selectAll("events")
  .data(dssElements)
  .enter()
  .append("circle")
  .attr("r", 20)
  .attr("cx", function(d, i){
    return (d.startTime-minDate)/scale
  })
  .attr("cy", 300)
  .attr("class", "xScalable")
  .style("fill", "brown");

// Dss Sessions -------------------------------------
var durations = dssElements.filter(element => element.timelineObjectType == timelineObjectType.DURATION && element.durationType == durationTypes.DSS_SESSION);
 
const dssSessionDurationY = 20;
const dssSessionDurationHeight = 30;

svg.selectAll("dssSessionDurations")
  .data(durations)
  .enter()
  .append("rect")
  .attr("x", function(d, i){
    return CalculateCoordinateFromTime(d.startTime)
  })
  .attr("y", dssSessionDurationY)
  .attr("width", function(d, i){
    return ScaleTimeDurationToPxLength(d.startTime, d.endTime)
  })
  .attr("height", dssSessionDurationHeight)
  .attr("class", "duration xScalable")
  .style("fill", "white")
  .on("mouseover", function(event, d) {
    tooltip.transition()		
      .duration(200)		
      .style("opacity", .9);		
    tooltip.html(d.startTime + "<br/>"  + d.endTime + "<br/>")	
      .style("left", (event.pageX) + "px")		
      .style("top", (event.pageY - 28) + "px");
    d3.select(this).style("fill", "lightsteelblue");
    })
  .on("mouseout", function(d) {		
    tooltip.transition()		
      .duration(500)		
      .style("opacity", 0);
    d3.select(this).style("fill", "white");
});

var addText = svg.selectAll("duration-text")
  .data(durations)
  .enter()
  .append("text")
  .attr("class", "xScalable")
  .attr("x", function(d, i){
    return CalculateCoordinateFromTime(d.startTime) + ScaleTimeDurationToPxLength(d.startTime, d.endTime)/2
  })
  .attr("y", dssSessionDurationY+dssSessionDurationHeight/2)
  .attr("font-family", "Arial")
  .attr("font-size", "15px")
  .text(function(d, i){return d.dssSessionId;})
  .style("text-anchor", "middle");


// PRIMARY REPLICAS -----------------------------------------------

  var primaryReplicaDurations = dssElements.filter(element => element.timelineObjectType == timelineObjectType.DURATION && element.durationType == durationTypes.PRIMARY_REPLICA);

  const primaryReplicaDurationY = 100;
  const primaryReplicaDurationHeight = 30
  
  svg.selectAll("primaryReplicaDurations")
    .data(primaryReplicaDurations)
    .enter()
    .append("rect")
    .attr("x", function(d, i){
      console.log(d.startTime-minDate);
      return CalculateCoordinateFromTime(d.startTime)
    })
    .attr("y", primaryReplicaDurationY)
    .attr("width", function(d, i){
      return ScaleTimeDurationToPxLength(d.startTime, d.endTime)
    })
    .attr("height", primaryReplicaDurationHeight)
    .attr("class", "duration xScalable")
    .style("fill", "white")
    .on("mouseover", function(event, d) {		
      tooltip.transition()		
        .duration(200)		
        .style("opacity", .9);		
      tooltip.html(d.startTime + "<br/>"  + d.endTime + "<br/>")	
        .style("left", (event.pageX) + "px")		
        .style("top", (event.pageY - 28) + "px");
      d3.select(this).style("fill", "lightsteelblue");
      })
    .on("mouseout", function(d) {		
      tooltip.transition()		
        .duration(500)		
        .style("opacity", 0);
      d3.select(this).style("fill", "white");
  });
  
  var addText = svg.selectAll("duration-text")
    .data(primaryReplicaDurations)
    .enter()
    .append("text")
    .attr("class", "xScalable")
    .attr("x", function(d, i){
      return CalculateCoordinateFromTime(d.startTime) + ScaleTimeDurationToPxLength(d.startTime, d.endTime)/2
    })
    .attr("y", primaryReplicaDurationY+primaryReplicaDurationHeight/2)
    .attr("font-family", "Arial")
    .attr("font-size", "15px")
    .text(function(d, i){return d.replicaId;})
    .style("text-anchor", "middle");

// SECONDARY REPLICAS --------------------------------------------------------

var secondaryReplicaDurations = dssElements.filter(element => element.timelineObjectType == timelineObjectType.DURATION && element.durationType == durationTypes.SECONDARY_REPLICA);

const secondaryReplicaDurationY = 200;
const secondaryReplicaDurationHeight = 30

svg.selectAll("secondaryReplicaDurations")
  .data(secondaryReplicaDurations)
  .enter()
  .append("rect")
  .attr("x", function(d, i){
    console.log(d.startTime-minDate);
    return CalculateCoordinateFromTime(d.startTime)
  })
  .attr("y", secondaryReplicaDurationY)
  .attr("width", function(d, i){
    return ScaleTimeDurationToPxLength(d.startTime, d.endTime)
  })
  .attr("height", secondaryReplicaDurationHeight)
  .attr("class", "duration xScalable")
  .style("fill", "white")
  .on("mouseover", function(event, d) {		
    tooltip.transition()		
      .duration(200)		
      .style("opacity", .9);		
    tooltip.html(d.startTime + "<br/>"  + d.endTime + "<br/>")	
      .style("left", (event.pageX) + "px")		
      .style("top", (event.pageY - 28) + "px");
    d3.select(this).style("fill", "lightsteelblue");
    })
  .on("mouseout", function(d) {		
    tooltip.transition()		
      .duration(500)		
      .style("opacity", 0);
    d3.select(this).style("fill", "white");
});

var addText = svg.selectAll("duration-text")
  .data(secondaryReplicaDurations)
  .enter()
  .append("text")
  .attr("class", "xScalable")
  .attr("x", function(d, i){
    return CalculateCoordinateFromTime(d.startTime) + ScaleTimeDurationToPxLength(d.startTime, d.endTime)/2
  })
  .attr("y", secondaryReplicaDurationY+secondaryReplicaDurationHeight/2)
  .attr("font-family", "Arial")
  .attr("font-size", "15px")
  .text(function(d, i){return d.replicaId;})
  .style("text-anchor", "middle");

// Scale Slider

var sliderSimple = d3
  .sliderBottom()
  .min(1)
  .max(50)
  .width(300)
  .ticks(5)
  .default(1)
  .on('onchange', val => {
    scale = 1000*val;
    svg.selectAll('text.xScalable').attr("x", function(d){
      return CalculateCoordinateFromTime(d.startTime) + ScaleTimeDurationToPxLength(d.startTime, d.endTime)/2;
    })
    svg.selectAll('rect.xScalable').attr("x", function(d){
      return CalculateCoordinateFromTime(d.startTime);
    })
    svg.selectAll('rect.xScalable').attr("width", function(d){
      return ScaleTimeDurationToPxLength(d.startTime, d.endTime);
    })
    svg.selectAll('circle.xScalable').attr("cx", function(d){
      return CalculateCoordinateFromTime(d.startTime);
    })
  });

var gSimple = d3
  .select('div#scale-slider')
  .append('svg')
  .attr('width', 500)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(30,30)');

gSimple.call(sliderSimple);

//d3.select('#scale-slider').text(d3.format('.2%')(sliderSimple.value()));


// SCALING UTILS
function ScaleTimeDurationToPxLength(startTime, endTime){
  return (endTime-startTime)/scale;
}

function CalculateCoordinateFromTime(time){
  return (time-minDate)/scale
}


// svg.append("circle")
// .attr("cx", 0)
// .attr("cy", document.body.clientHeight / 2)
// .attr("r", 50)
// .style("fill", "#B8DEE6");