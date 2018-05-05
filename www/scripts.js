document.write("Testing Scripts.js Connection")

var x = 0;
var y = 0;

var arr = [
	[1, 2, 3, 4, 5, 6, 7],
	[7, 6, 5, 4, 3, 2, 1],
	[5, 2, 6, 7, 3, 4, 2],
	[2, 1, 5, 4, 5, 3, 6]
];

window.onload=function(){
    // get DOM or jQuery element
    // like: $('#canvas-demo')
    var canvas = document.getElementById('canvas-demo');

    // create pixel view container in point
    var point = new obelisk.Point(130, 130);
    var pixelView = new obelisk.PixelView(canvas, point);

    // create dimension instance
    var dimension;
    // create color instance
    var color = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.GRAY);

    // create cube primitive
    //var cube = new obelisk.Cube(dimension, color);
    // create cube primitive wihtout border
    //var cube = new obelisk.Cube(dimension, color, false);

    //Testing 3d co-ordinate system.
    var dimension2 = new obelisk.CubeDimension(30, 30, 3);
    var cube = new obelisk.Cube(dimension2, color, false);
    var p3d = new obelisk.Point3D(0, 0, 0);
    pixelView.renderObject(cube, p3d)

    //creating graph 4x7
    for(var j = 0; j < 7; j++){
	    for(var i = 0; i < 4; i++){
	    	p3d = new obelisk.Point3D(x, y, 0)
	    	// render primitive to view
	    	pixelView.renderObject(cube, p3d);
	    	y+=30;
		}
		y = 0;
		x += 30;
	}


	x = 0;
	y = 0;
	var z = 0;	//remember to +3 to account for the base.
	var barSize = 30;

	//Setting bar sizes;
	for(var j = 0; j < 7; j++){
	    for(var i = 0; i < 4; i++){
	    	barSize = 20 * arr[i][j];

	    	dimension = new obelisk.CubeDimension(30, 30, barSize);
		    cube = new obelisk.Cube(dimension, color, false);
	    	p3d = new obelisk.Point3D(x, y, 0)
	    	pixelView.renderObject(cube, p3d);

	    	y+=30;
		}
		y = 0;
		x += 30;
	}


}