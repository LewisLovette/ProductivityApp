document.write("Testing Scripts.js Connection")

var x = 0;
var y = 0;

var arr = [
	[1, 2, 3, 4, 5, 6, 7],
	[7, 6, 5, 3, 3, 2, 1],
	[5, 2, 6, 7, 3, 4, 0],
	[2, 0, 5, 4, 5, 3, 6]
];

window.onload=function(){
    // get DOM or jQuery element
    // like: $('#canvas-demo')
    var canvas = document.getElementById('canvas-demo');

    // create pixel view container in point
    var point = new obelisk.Point(110, 150);
    var pixelView = new obelisk.PixelView(canvas, point);

    // create dimension instance
    var dimension;
    // create color instance
    var color = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.GRAY);
    var cubeColor;

    // create cube primitive
    //var cube = new obelisk.Cube(dimension, color);
    // create cube primitive wihtout border
    //var cube = new obelisk.Cube(dimension, color, false);

    //Testing 3d co-ordinate system.
    var dimension2 = new obelisk.CubeDimension(20, 20, 3);
    var cube = new obelisk.Cube(dimension2, color, false);
    var p3d = new obelisk.Point3D(0, 0, 0);
    pixelView.renderObject(cube, p3d)

    //creating graph 4x7
    for(var j = 0; j < 7; j++){
	    for(var i = 0; i < 4; i++){
	    	p3d = new obelisk.Point3D(x, y, 0)
	    	// render primitive to view
	    	pixelView.renderObject(cube, p3d);
	    	y+=20;
		}
		y = 0;
		x += 20;
	}


	x = 0;
	y = 0;
	var z = 0;	//remember to +3 to account for the base.
	var barSize;

	//Setting bar sizes;
	for(var j = 0; j < 7; j++){
	    for(var i = 0; i < 4; i++){

	    	(arr[i][j] == 0) ? barSize = 3 : barSize = 20 * arr[i][j];

	    	//Setting colors - this would be done dynamically by their 'busiest' day.
	    	if(arr[i][j] > 5){
				cubeColor = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.BLUE);
	    	}
	    	else if(arr[i][j] > 3){
				cubeColor = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.PURPLE);
	    	}
	    	else{
				cubeColor = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.PINK);
	    	}

	    	dimension = new obelisk.CubeDimension(20, 20, barSize);
		    cube = new obelisk.Cube(dimension, cubeColor, false);
	    	p3d = new obelisk.Point3D(x, y, 0)
	    	pixelView.renderObject(cube, p3d);

	    	y+=20;
		}
		y = 0;
		x += 20;
	}
}
/**
 * Initialize with current year and date. Returns reference to plugin object.
 */
var jfcalplugin = $("#mycal").jFrontierCal({
	date: new Date(),
	dayClickCallback: myDayClickHandler,
	agendaClickCallback: myAgendaClickHandler,
	agendaDropCallback: myAgendaDropHandler,
	dragAndDropEnabled: true
}).data("plugin");
/**
 * Get the date (Date object) of the day that was clicked from the event object
 */
function myDayClickHandler(eventObj){
	var date = eventObj.data.calDayDate;
	alert("You clicked day " + date.toDateString());
};
/**
 * Get the agenda item that was clicked.
 */
function myAgendaClickHandler (eventObj){
	var agendaId = eventObj.data.agendaId;
	var agendaItem = jfcalplugin.getAgendaItemById("#mycal",agendaId);
};
/**
 * get the agenda item that was dropped. It's start and end dates will be updated.
 */
function myAgendaDropHandler(eventObj){
	var agendaId = eventObj.data.agendaId;
	var date = eventObj.data.calDayDate;		
	var agendaItem = jfcalplugin.getAgendaItemById("#mycal",agendaId);		
	alert("You dropped agenda item " + agendaItem.title + 
		" onto " + date.toString() + ". Here is where you can make an AJAX call to update your database.");
};
