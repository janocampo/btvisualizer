// Global variables
var paper; // Used for Raphael


/* This function creates the nodes on the image. Acts like a struct.*/
function createNode(id, x, y) {
	this.id = id;
	this.circle = paper.circle(x, y, 20);
	circle.attr("stroke-width", 2);
	this.id_text = paper.text(x, y, id).attr({"font-size": 14, "font-family" : "Times New Roman"});
}

function drawTree() {
	// First Level - root
	var node_five = createNode(5, 250, 50);

	// Connectors for root
	paper.path("M232, 60 ,L210,83");
	paper.path("M267, 60 ,L287,83");

	// Second Level
	var node_three = createNode(3, 200, 100);

	// Connectors for three
	paper.path("M183, 110 ,L155,150");
	paper.path("M200, 100 ,L250,150");
	paper.path("M300, 100 ,L345,150");

	var node_seven = createNode(7, 300, 100);

	// Third level - left side
	var node_two = createNode(2, 155, 150);

	paper.path("M155, 150 ,L150,200");

	var node_four = createNode(4, 250, 150);
	// var node_six = createNode(6, 275, 150);
	// Third level - right side
	var node_eight = createNode(8, 345, 150);
	// fourth level - left side 
	var node_one = createNode(1, 150, 200);
}

function drawV(x, y) {
        this.circle = paper.circle(x, y, 23);
        this.circle.attr("stroke", "green");
        this.circle.attr("stroke-width", 2)
}

function drawP(x, y) {
        this.circle = paper.circle(x, y, 26);
        this.circle.attr("stroke", "blue");
        this.circle.attr("stroke-width", 2)
}

function drawR(x, y) {
        this.circle = paper.circle(x, y, 29);
        this.circle.attr("stroke", "red");
        this.circle.attr("stroke-width", 2)
}

function removeV(x, y) {
        this.circle = paper.circle(x, y, 23);
        this.circle.attr("stroke", "white");
        this.circle.attr("stroke-width", 2.3)
}

function removeP(x, y) {
        this.circle = paper.circle(x, y, 26);
        this.circle.attr("stroke", "white");
        this.circle.attr("stroke-width", 2.3)
}

function removeR(x, y) {
        this.circle = paper.circle(x, y, 29);
        this.circle.attr("stroke", "white");
        this.circle.attr("stroke-width", 2.3)
}


// TODO: Draw Key Guide
function drawKey() {
	var guide = paper.text(50, 50, "Pointer Key").attr({'font-size': 14, "font-family": "Times New Roman"});
	var v = paper.circle(25, 100, 10);
	var v_text = paper.text(65, 100, "= V");
	var parent = paper.circle(25, 150, 10);
	var parent_text = paper.text(65, 150, "= Parent");
	var root_ptr = paper.circle(25, 200, 10);
	var root_text = paper.text(65, 200, "= root");

	v.attr("fill", "green");
	parent.attr("fill", "blue");
	root_ptr.attr("fill", "red");

}

// TODO: Functionality


window.onload = function() {
	paper = new Raphael(document.getElementById('tree'), 500, 400);
	drawTree();
	drawKey();

	var vPtr = drawV(250, 50);
    var pPtr = drawP(250, 50);
    var rPtr = drawR(250, 50);
    removeV(250, 50);
    removeP(250, 50);
    removeR(250, 50);
}