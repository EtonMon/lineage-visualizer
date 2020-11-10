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

const dssSessionDurationTypes = {
  ACTIVE_SESSION: 'Session',
  HIBERNATED_SESSION: 'Hibernated'
}

const dssEventTypes = {
  REPLICA_CREATED: 1,
  REPLICA_DELETED: 2,
  SESSION_CREATED: 3,
  SESSION_DELETED: 4,
  CLIENT_JOINED: 5,
  CLIENT_LEFT: 6,
  FAILOVER: 7,
}

var scale = 1000;

var elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var dssElements = [
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.CLIENT_JOINED, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 24, 7)},
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 24, 5)},
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 24, 6)},
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 28, 7)},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.DSS_SESSION, startTime: new Date(2020, 0, 17, 3, 24, 7), endTime: new Date(2020, 0, 17, 3, 28, 7), dssSessionId: "DssSessionId1"},
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 50, 7)},
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 4, 24, 7)},
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 4, 24, 7)},
  {timelineObjectType: timelineObjectType.EVENT, eventId: "aaaa", startTime: new Date(2020, 0, 17, 4, 25, 7)},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.DSS_SESSION, startTime: new Date(2020, 0, 17, 3, 28, 9), endTime: new Date(2020, 0, 17, 3, 30, 7), dssSessionId: "DssSessionId2"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.DSS_SESSION, startTime: new Date(2020, 0, 17, 3, 30, 7), endTime: new Date(2020, 0, 17, 5, 35, 7), dssSessionId: "DssSessionId3"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.PRIMARY_REPLICA, startTime: new Date(2020, 0, 17, 3, 28, 9), endTime: new Date(2020, 0, 17, 3, 30, 7), replicaId: "ReplicaId1"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.PRIMARY_REPLICA, startTime: new Date(2020, 0, 17, 3, 30, 7), endTime: new Date(2020, 0, 17, 5, 35, 7), replicaId: "ReplicaId2"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.SECONDARY_REPLICA, startTime: new Date(2020, 0, 17, 3, 28, 9), endTime: new Date(2020, 0, 17, 3, 30, 7), replicaId: "ReplicaId2"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.SECONDARY_REPLICA, startTime: new Date(2020, 0, 17, 3, 30, 7), endTime: new Date(2020, 0, 17, 5, 35, 7), replicaId: "ReplicaId3"},
];

var dssElements = [
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.CLIENT_JOINED, eventId: "aaaa", startTime: new Date(2020, 0, 17, 3, 10, 7, 100), clientId: "ClientId1"},
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.REPLICA_CREATED, eventId: "aaab", startTime: new Date(2020, 0, 17, 3, 10, 7, 200), replicaId: "ReplicaId1", creationReason: "InitialCreation", isPrimary: true},
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.REPLICA_CREATED, eventId: "aaab", startTime: new Date(2020, 0, 17, 3, 10, 7, 250), replicaId: "ReplicaId2", creationReason: "InitialCreation", isPrimary: false},
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.SESSION_CREATED, eventId: "aaac", startTime: new Date(2020, 0, 17, 3, 10, 7, 300), sessionId: "DssSessionId1"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.DSS_SESSION, dssSessionDurationType: dssSessionDurationTypes.ACTIVE_SESSION, startTime: new Date(2020, 0, 17, 3, 10, 7, 300), endTime: new Date(2020, 0, 17, 4, 5, 20, 500), dssSessionId: "DssSessionId1"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.PRIMARY_REPLICA, startTime: new Date(2020, 0, 17, 3, 10, 7, 200), endTime: new Date(2020, 0, 17, 4, 50, 15, 100), replicaId: "ReplicaId1"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.SECONDARY_REPLICA, startTime: new Date(2020, 0, 17, 3, 10, 7, 200), endTime: new Date(2020, 0, 17, 4, 50, 15, 100), replicaId: "ReplicaId2"},
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.SESSION_DELETED, eventId: "aaad", startTime: new Date(2020, 0, 17, 4, 5, 20, 500), sessionId: "DssSessionId1", sessionDeletedReason: "SessionHibernated"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.DSS_SESSION, dssSessionDurationType: dssSessionDurationTypes.HIBERNATED_SESSION, startTime: new Date(2020, 0, 17, 4, 5, 20, 500), endTime: new Date(2020, 0, 17, 4, 30, 15, 100), dssSessionId: null},
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.FAILOVER, eventId: "aaae", startTime: new Date(2020, 0, 17, 4, 30, 14, 100), failoverReason: "NoDssSession", isSuccess: true},
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.SESSION_CREATED, eventId: "aaac", startTime: new Date(2020, 0, 17, 4, 30, 15, 100), sessionId: "DssSessionId2"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.DSS_SESSION, dssSessionDurationType: dssSessionDurationTypes.ACTIVE_SESSION, startTime: new Date(2020, 0, 17, 4, 30, 15, 100), endTime: new Date(2020, 0, 17, 4, 50, 15, 100), dssSessionId: "DssSessionId2"},
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.FAILOVER, eventId: "aaae", startTime: new Date(2020, 0, 17, 4, 50, 15, 100), failoverReason: "MachineShutdown", isSuccess: true},
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.SESSION_DELETED, eventId: "aaad", startTime: new Date(2020, 0, 17, 4, 50, 17, 100), sessionDeletedReason: "MachineShutdown", sessionId: "DssSessionId2"},
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.REPLICA_DELETED, eventId: "aaae", startTime: new Date(2020, 0, 17, 4, 50, 15, 100), replicaId: "ReplicaId1", replicaDeletedReason: "MachineShutdown"},
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.REPLICA_CREATED, eventId: "aaab", startTime: new Date(2020, 0, 17, 4, 50, 19, 100), replicaId: "ReplicaId3", creationReason: "MachineShutdown", isPrimary: false},
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.SESSION_CREATED, eventId: "aaac", startTime: new Date(2020, 0, 17, 4, 50, 20, 100), sessionId: "DssSessionId3"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.DSS_SESSION, dssSessionDurationType: dssSessionDurationTypes.ACTIVE_SESSION, startTime: new Date(2020, 0, 17, 4, 50, 20, 100), endTime: new Date(2020, 0, 17, 5, 18, 20, 500), dssSessionId: "DssSessionId3"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.PRIMARY_REPLICA, startTime: new Date(2020, 0, 17, 4, 50, 19, 100), endTime: new Date(2020, 0, 17, 5, 18, 20, 500), replicaId: "ReplicaId2"},
  {timelineObjectType: timelineObjectType.DURATION, durationType: durationTypes.SECONDARY_REPLICA, startTime: new Date(2020, 0, 17, 4, 50, 19, 100), endTime: new Date(2020, 0, 17, 5, 19, 12, 500), replicaId: "ReplicaId3"},
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.SESSION_DELETED, eventId: "aaad", startTime: new Date(2020, 0, 17, 5, 18, 20, 500), sessionDeletedReason: "SaveFailure", sessionId: "DssSessionId3"},
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.REPLICA_DELETED, eventId: "aaae", startTime: new Date(2020, 0, 17, 5, 18, 20, 500), replicaId: "ReplicaId2", replicaDeletedReason: "SaveFailure"},
  {timelineObjectType: timelineObjectType.EVENT, dssEventType: dssEventTypes.REPLICA_DELETED, eventId: "aaae", startTime: new Date(2020, 0, 17, 5, 19, 12, 500), replicaId: "ReplicaId3", replicaDeletedReason: "Zombie"},
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

var startTimes = [];

dssElements.forEach(element => {
  startTimes.push(element.startTime)
});

var maxDate=new Date(Math.max.apply(null,startTimes));
var minDate=new Date(Math.min.apply(null,startTimes));
var dateDifference = maxDate - minDate;

var endTimes = [];

dssElements.forEach(element => {
  if(element.endTime != null)
  {
    endTimes.push(element.endTime)
  }
});

var maxEndTime=new Date(Math.max.apply(null,endTimes));

var tooltip = d3.select("#viewport").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

//var eventOverflowOffset = 0;

// EVENTS ---------------------------------------
var dssEvents = dssElements.filter(element => element.timelineObjectType == timelineObjectType.EVENT).sort(function(a, b){ return a.startTime - b.startTime});



var dssEventY = 300;
var maxStackLevel = 0;

AddYAxisLabel(dssEventY, 0, "Events");


var eventShapes = svg.selectAll("events")
  .data(dssEvents)
  .enter()
  .append("rect")
  .attr("width", 10)
  .attr("height", 10)
  .attr("x", function(d, i){
    return (d.startTime-minDate)/scale
  })
  .attr("y", dssEventY)
  .attr("class", "xScalableEvent")
  .style("fill", function(d){ return GetEventFill(d);})
  .on("mouseover", function(event, d) {		
    tooltip.transition()		
      .duration(200)		
      .style("opacity", .9);		
      tooltip.html(PrintEventInfo(d))
      .style("left", (event.pageX) + "px")		
      .style("top", (event.pageY) + "px");
    d3.select(this).style("stroke-width", "1").style("stroke", "red");
    })
  .on("mouseout", function(d) {		
    tooltip.transition()		
      .duration(500)		
      .style("opacity", 0);
      d3.select(this).style("stroke-width", "0");
  });

console.log(eventShapes);
StackEventShapesIfOverlapping();

function StackEventShapesIfOverlapping(){
  console.log("Test")
  var lastShape = null;
  maxStackLevel = 0;
  var stackLevel = 0;

  svg.selectAll("rect.xScalableEvent").attr("y", function(){return CalculateYForEventShape(d3.select(this))});

  function CalculateYForEventShape(selection){
    if(lastShape == null){
      lastShape = selection;
      stackLevel = 0;
      return dssEventY;
    }
    if(AreShapesOverlapping(lastShape, selection)){
      stackLevel++;
      if(maxStackLevel < stackLevel){
        maxStackLevel = stackLevel;
      }
      lastShape = selection;
      return dssEventY+15*stackLevel;
    }
    else{
      stackLevel = 0;
      lastShape = selection;
      return dssEventY;
    }
  }
}

function AreShapesOverlapping(selection1, selection2){
  console.log()
  return !(selection1.attr("x")+5 < selection2.attr("x")-5 || 
  selection1.attr("x")-5 > selection2.attr("x")+5);
}

function PrintEventInfo(d){
  if(d.dssEventType == dssEventTypes.SESSION_CREATED){
    return "<b>Event: Session Created</b><br/>" + PrintBaseEventInfo(d) + "<br/>SessionId: " + d.sessionId;
  }else if(d.dssEventType == dssEventTypes.SESSION_DELETED){
    return "<b>Event: Session Deleted</b><br/>" + PrintBaseEventInfo(d) + "<br/>SessionId: " + d.sessionId + "<br/>Reason: " + d.sessionDeletedReason;
  }else if(d.dssEventType == dssEventTypes.REPLICA_CREATED){
    return "<b>Event: Replica Created</b><br/>" + PrintBaseEventInfo(d) + "<br/>ReplicaId: " + d.replicaId + "<br/>Reason: " + d.creationReason;
  }else if(d.dssEventType == dssEventTypes.REPLICA_DELETED){
    return "<b>Event: Replica Deleted</b><br/>" + PrintBaseEventInfo(d) + "<br/>ReplicaId: " + d.replicaId + "<br/>Reason: " + d.replicaDeletedReason;
  }else if(d.dssEventType == dssEventTypes.CLIENT_JOINED){
    return "<b>Event: Client Joined</b><br/>" + PrintBaseEventInfo(d) + "<br/>ClientId: " + d.clientId;
  }else if(d.dssEventType == dssEventTypes.CLIENT_LEFT){
    return "<b>Event: Client Left</b><br/>" + PrintBaseEventInfo(d) + "<br/>ClientId: " + d.clientId;
  }else if(d.dssEventType == dssEventTypes.FAILOVER){
    return "<b>Event: Failover</b><br/>" + PrintBaseEventInfo(d) + "<br/>FailoverReason: " + d.failoverReason + "<br/>IsSuccess: " + d.isSuccess;
  }
}

function PrintBaseEventInfo(d){
  return "EventId: " + d.eventId + "<br/>Time: " + FormatDateTime(d.startTime)
}

function GetEventFill(d){
  if(d.dssEventType == dssEventTypes.SESSION_CREATED){
    return "blue";
  }else if(d.dssEventType == dssEventTypes.SESSION_DELETED){
    return "green";
  }else if(d.dssEventType == dssEventTypes.REPLICA_CREATED){
    return "orange";
  }else if(d.dssEventType == dssEventTypes.REPLICA_DELETED){
    return "grey";
  }else if(d.dssEventType == dssEventTypes.CLIENT_JOINED){
    return "purple";
  }else if(d.dssEventType == dssEventTypes.CLIENT_LEFT){
    return "yellow";
  }else if(d.dssEventType == dssEventTypes.FAILOVER){
    return "lime";
  }
}

// Dss Sessions -------------------------------------
var dssSessionDurations = dssElements.filter(element => element.timelineObjectType == timelineObjectType.DURATION && element.durationType == durationTypes.DSS_SESSION);
 
const dssSessionDurationY = 20;
const dssSessionDurationHeight = 30;

AddYAxisLabel(dssSessionDurationY, dssSessionDurationHeight, "DSS Sessions");

svg.selectAll("dssSessionDurations")
  .data(dssSessionDurations)
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
  .style("fill", function(d){ return GetDssSessionFill(d)})
  .on("mouseover", function(event, d) {
    tooltip.transition()		
      .duration(200)		
      .style("opacity", .9);		
    tooltip.html("Id: " + d.dssSessionId + "<br/>Start Time: " + FormatDateTime(d.startTime) + "<br/>End Time: " + FormatDateTime(d.endTime) + "<br/>")
      .style("left", (event.pageX + 20) + "px")		
      .style("top", (event.pageY + 20) + "px");
    d3.select(this).style("fill", "lightsteelblue");
    })
  .on("mouseout", function(d) {		
    tooltip.transition()		
      .duration(500)		
      .style("opacity", 0);
    d3.select(this).style("fill", function(d){ return GetDssSessionFill(d)});
});

var addText = AddDurationText(dssSessionDurations, dssSessionDurationY, dssSessionDurationHeight, function(d){return d.dssSessionId;});

function GetDssSessionFill(d){
  if(d.dssSessionDurationType == dssSessionDurationTypes.HIBERNATED_SESSION){
    return "yellow";
  }else{
    return "white";
  }
  
}

// PRIMARY REPLICAS -----------------------------------------------

  var primaryReplicaDurations = dssElements.filter(element => element.timelineObjectType == timelineObjectType.DURATION && element.durationType == durationTypes.PRIMARY_REPLICA);

  const primaryReplicaDurationY = 100;
  const primaryReplicaDurationHeight = 30
  
  AddYAxisLabel(primaryReplicaDurationY, primaryReplicaDurationHeight, "Primary Replicas");

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
      tooltip.html("Id: " + d.replicaId + "<br/>Start Time: " + FormatDateTime(d.startTime) + "<br/>End Time: " + FormatDateTime(d.endTime) + "<br/>")
      .style("left", (event.pageX + 20) + "px")		
      .style("top", (event.pageY + 20) + "px");
      d3.select(this).style("fill", "lightsteelblue");
      })
    .on("mouseout", function(d) {		
      tooltip.transition()		
        .duration(500)		
        .style("opacity", 0);
      d3.select(this).style("fill", "white");
  });
  
  var addText = AddDurationText(primaryReplicaDurations, primaryReplicaDurationY, primaryReplicaDurationHeight, function(d){return d.replicaId;});

// SECONDARY REPLICAS --------------------------------------------------------

var secondaryReplicaDurations = dssElements.filter(element => element.timelineObjectType == timelineObjectType.DURATION && element.durationType == durationTypes.SECONDARY_REPLICA);

const secondaryReplicaDurationY = 200;
const secondaryReplicaDurationHeight = 30

AddYAxisLabel(secondaryReplicaDurationY, secondaryReplicaDurationHeight, "Secondary Replicas");

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
      tooltip.html("Id: " + d.replicaId + "<br/>Start Time: " + FormatDateTime(d.startTime) + "<br/>End Time: " + FormatDateTime(d.endTime) + "<br/>")
      .style("left", (event.pageX + 20) + "px")		
      .style("top", (event.pageY + 20) + "px");
    d3.select(this).style("fill", "lightsteelblue");
    })
  .on("mouseout", function(d) {		
    tooltip.transition()		
      .duration(500)		
      .style("opacity", 0);
    d3.select(this).style("fill", "white");
});

var addText = AddDurationText(secondaryReplicaDurations, secondaryReplicaDurationY, secondaryReplicaDurationHeight, function(d){return d.replicaId;});

function AddYAxisLabel(yCoord, rowHeight, text){
  return svg
    .append("text")
    .attr("x", -70)
    .attr("y", yCoord+rowHeight/2)
    .attr("font-family", "Arial")
    .attr("font-size", "15px")
    .text(text)
    .style("text-anchor", "end")
    .style("alignment-baseline", "middle");
}

function AddDurationText(data, durationYCoord, durationHeight, textCallback){
  return svg.selectAll("duration-text")
  .data(data)
  .enter()
  .append("text")
  .attr("class", "xScalable")
  .attr("x", function(d, i){
    return CalculateCoordinateFromTime(d.startTime) + ScaleTimeDurationToPxLength(d.startTime, d.endTime)/2
  })
  .attr("y", durationYCoord+durationHeight/2)
  .attr("font-family", "Arial")
  .attr("font-size", "15px")
  .attr("pointer-events", "none")
  .text(textCallback)
  .style("text-anchor", "middle")
  .style("alignment-baseline", "middle");
}

// X TIME AXIS

function CreateXAxis(){
  var xScale = d3.scaleTime()
  .domain([minDate, maxEndTime])
  .range([0, CalculateCoordinateFromTime(maxEndTime)])

  var ticks = xScale.ticks(CalculateCoordinateFromTime(maxEndTime)/50);
  ticks.push(minDate);
  ticks.push(maxEndTime);
  return d3.axisBottom(xScale)
    .tickFormat(d3.timeFormat("%H:%M:%S"))
    .tickValues(ticks);
}

var xAxis = CreateXAxis();

var xAxisY = dssEventY + 20 + maxStackLevel*15;

svg.append("g")
  .attr("class", "xAxis xScalable")
  .attr("transform", "translate(0, " + xAxisY + ")")
  .call(xAxis)
  .selectAll("text")
  .attr("class", "xAxisLabels")
  .attr("y", 0)
  .attr("x", 50)
  .attr("transform", "rotate(70)");

// Scale Slider
var sliderSimple = d3
  .sliderBottom()
  .min(1)
  .max(100)
  .width(300)
  .ticks(5)
  .default(10)
  .on('onchange', val => {
    scale = 100*val;
    svg.selectAll('text.xScalable').attr("x", function(d){
      return CalculateCoordinateFromTime(d.startTime) + ScaleTimeDurationToPxLength(d.startTime, d.endTime)/2;
    });
    svg.selectAll('rect.xScalable').attr("x", function(d){
      return CalculateCoordinateFromTime(d.startTime);
    }).attr("width", function(d){
      return ScaleTimeDurationToPxLength(d.startTime, d.endTime);
    });
    svg.selectAll('rect.xScalableEvent').attr("x", function(d){
      return CalculateCoordinateFromTime(d.startTime);
    });
    StackEventShapesIfOverlapping();
    svg.selectAll('circle.xScalable').attr("cx", function(d){
      return CalculateCoordinateFromTime(d.startTime);
    });

    svg.selectAll('circle.xScalable').attr("cx", function(d){
      return CalculateCoordinateFromTime(d.startTime);
    });

    xAxis = CreateXAxis();
    xAxisY = dssEventY + 20 + maxStackLevel*15;
    svg.select('g.xScalable').attr("transform", "translate(0, " + xAxisY + ")").call(xAxis).selectAll("text")
    .attr("y", 0)
    .attr("x", 30)
    .attr("transform", "rotate(70)");
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

function FormatDateTime(dateTime){
  return `${
    (dateTime.getMonth()+1).toString().padStart(2, '0')}/${
      dateTime.getDate().toString().padStart(2, '0')}/${
        dateTime.getFullYear().toString().padStart(4, '0')} ${
          dateTime.getHours().toString().padStart(2, '0')}:${
            dateTime.getMinutes().toString().padStart(2, '0')}:${
              dateTime.getSeconds().toString().padStart(2, '0')}`;
}

// svg.append("circle")
// .attr("cx", 0)
// .attr("cy", document.body.clientHeight / 2)
// .attr("r", 50)
// .style("fill", "#B8DEE6");