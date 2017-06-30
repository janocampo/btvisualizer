// Global variables
var paper, v_ptr, p_ptr, r_ptr; // Used for Raphael
// POinters as globals 

/* This function creates the nodes on the image. Acts like a struct.*/
function createNode(id, x, y) {
	this.id = id;
	this.circle = paper.circle(x, y, 20);
	circle.attr("stroke-width", 2);
	this.id_text = paper.text(x, y, id).attr({"font-size": 14, "font-family" : "Times New Roman"});
}


// Draws the actual tree into the document
function drawTree() {
	// First Level - root
	var node_five = createNode(5, 250, 50);

	// Connectors for root
	paper.path("M232, 60 ,L210,83");
	paper.path("M267, 60 ,L287,83");

	// Second Level
	var node_three = createNode(3, 200, 100);

	// Connectors for three and seven
	paper.path("M183, 110 ,L150,130"); // 3 - 2
	paper.path("M218, 110 ,L250,130"); // 3 - 4
	paper.path("M318, 110 ,L345,130"); // 7 - 8

	var node_seven = createNode(7, 300, 100);

	// Third level - left side
	var node_two = createNode(2, 150, 150);

	paper.path("M150, 170 ,L150,180"); // 2 - 1

	var node_four = createNode(4, 250, 150);
	// var node_six = createNode(6, 275, 150);

	// Third level - right side
	var node_eight = createNode(8, 350, 150);

	// fourth level - left side 
	var node_one = createNode(1, 150, 200);

	// fifth level - NULL NODES
	var null_node_one = createNode("NULL", 150, 250);
	var null_node_four = createNode("NULL", 250, 250);
	var null_node_eight = createNode("NULL", 350, 250);
	var null_node_seven = createNode("NULL", 300, 250);

	// add lines to null Nodes
	paper.path("M150, 220, L150, 230"); // 1 - NULL
	paper.path("M250, 170, L250, 230"); // 4 - NULL
	paper.path("M300, 120, L300, 230"); // 7 - NULL
	paper.path("M350, 170, L350, 230"); // 8 - NULL
	paper.path("M170, 150, L250, 230"); // 2 - NULL
}



//  Draw Key Guide with colors 
function drawKey() {
	paper.text(50, 50, "Pointer Key").attr({'font-size': 14, "font-family": "Times New Roman"});
	var v = paper.circle(25, 100, 10);
	paper.text(65, 100, "= V");
	var parent = paper.circle(25, 150, 10);
	paper.text(65, 150, "= Parent");
	var root_ptr = paper.circle(25, 200, 10);
	paper.text(65, 200, "= root");

	v.attr("fill", "green");
	parent.attr("fill", "blue");
	root_ptr.attr("fill", "red");
}

window.onload = function() {
	paper = new Raphael(document.getElementById('tree'), 500, 300);
	drawTree();
	drawKey();

	// Used to keep track of the pointer coordinates
	var current_x = 250, current_y = 50;

	// Setting up the pointers
	v_ptr = paper.circle(250, 50, 23);
	v_ptr.attr("stroke", "green");
	v_ptr.attr("stroke-width", 2);

	r_ptr = paper.circle(250, 50, 27);
	r_ptr.attr("stroke", "red");
	r_ptr.attr("stroke-width", 2);

	p_ptr = paper.text(250, 5, "NULL");
	p_ptr.attr({"fill" : "blue", "font-size" : 14, "font-family": "Times New Roman"});

	$("#submitBtn").click ( function() {
        if ( $('select#executeQuery').val() === "pToV") {
        	p_ptr.remove();
        	p_ptr = paper.circle(current_x, current_y, 25);
        	p_ptr.attr("stroke", "blue");
        	p_ptr.attr("stroke-width", 2);
        	if (current_y == 250) {
        		alert("Parent has reached Null");
        	}
        }
        else if ( $('select#executeQuery').val() === "vLeft") {
        	// Account for user query to go down further after NULL has already been reaced
        	if (current_y == 250) {
        		alert("You cannot proceed further down as the pointer has reached NULL");
        		// Refresh page here
        		history.go(0);

        	}
        	// Account for NULL Cases
        	else if ((current_x == 350 && current_y == 150) || (current_x == 300 && current_y == 100) || (current_x == 250 && current_y == 150) || (current_x == 150 & current_y == 200)) {
        		v_ptr.remove();
        		current_y = 250;
        		v_ptr = paper.circle(current_x, current_y, 23).attr({"stroke" : "green", "stroke-width" : 2});
        		alert("V Pointer has reached Null");
        	}
        	else if (current_x == 150 && current_y == 150) {
        		v_ptr.remove();
        		current_y = current_y + 50;
        		v_ptr = paper.circle(current_x, current_y, 23).attr({"stroke": "green", "stroke-width": 2});
        	}
        	// Normal Case
        	else {
        		v_ptr.remove();
        		current_x = current_x - 50;
        		current_y = current_y + 50;
        		v_ptr = paper.circle(current_x, current_y, 23).attr({"stroke": "green", "stroke-width": 2});
        	}

        }
        else if ( $('select#executeQuery').val() === "vRight") {
        	// CASE !: IF ALREADY ON NULL -> MSG
        	if (current_y == 250) {
        		alert("You cannot proceed further down as the pointer has reached NULL");
        		history.go(0);
        	}
        	// CASE 2: IF V WILL LEAD TO NULL -> MSG
        	else if ((current_x == 150) || (current_x == 250 && current_y == 150) || (current_x == 350 && current_y == 150)) {
        		v_ptr.remove();
        		current_y = 250;
        		v_ptr = paper.circle(current_x, current_y, 23).attr({"stroke" : "green", "stroke-width" : 2});
        		alert("V pointer has reached NULL");
        	}
        	// CASE 4: NORMAL 
        	else {
        		v_ptr.remove();
        		current_x = current_x + 50;
        		current_y = current_y + 50;
        		v_ptr = paper.circle(current_x, current_y, 23).attr({"stroke": "green", "stroke-width": 2});

        	}
        }
        else alert("Something broke!");
      }) // END SUBMIT BUTTON 
}