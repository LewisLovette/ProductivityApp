// get DOM or jQuery element
// like: $('#canvas-demo')
var canvas = document.getElementById('canvas-demo');

// create pixel view container in point
var point = new obelisk.Point(270, 120);
var pixelView = new obelisk.PixelView(canvas, point);

// create dimension instance
var dimension = new obelisk.CubeDimension(80, 100, 120);
// create color instance
var color = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.GRAY);

// create cube primitive
var cube = new obelisk.Cube(dimension, color);
// create cube primitive wihtout border
//var cube = new obelisk.Cube(dimension, color, false);

// render primitive to view
pixelView.renderObject(cube);