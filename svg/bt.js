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
	// var root = paper.circle(250, 50, 20); 
	// root.attr("stroke-width", 2);
	var node_five = createNode(5, 250, 50);
	var node_three = createNode(3, 200, 100);
	var node_seven = createNode(7, 300, 100);
	var node_two = createNode(2, 175, 150);
	var node_four = createNode(4, 225, 150);
	// var node_six = createNode(6, 275, 150);
	var node_eight = createNode(8, 325, 150);
	var node_one = createNode(1, 150, 200);
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
}