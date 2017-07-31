var paper; // SVG
var vPointer, pPointer, rPointer; // Pointers to be used 

function main() {
        $('.control').hide();
        $('.control').fadeIn(1000);

        $('.controlV').hide();
        $('.controlP').hide();
        $('.fill').hide();
        $('.submitBtn').hide();

        $('.control').on('click', function() {
                $('.controlV').show();
        });

        $('.controlV').on('click', function() {
                $('.controlP').show();
        });

        $('.controlP').on('click', function() {
                $('.fill').show();
        });

        $('.fill').on('click', function() {
                $('.submitBtn').show();
        });

}

// Used to create nodes in the drawTree Method
// x_coor and y_coor keep track of it's location
// ID can be text or integer
function createNode(id, x, y) {
        this.id = id;
        this.x_coor = x;
        this.y_coor = y;
        this.circle = paper.circle(x, y, 20);
        circle.attr("stroke-width", 1);
        this.id_text = paper.text(x, y, id).attr({"font-size": 14, "font-family" : "Times New Roman"});
}

// Used to create a null node in the drawTree method
function createNullNode(id, x, y) {
        this.id = id;
        this.circle = paper.circle(x, y, 10);
        circle.attr("stroke-width", 1);
        this.id_text = paper.text(x, y, id).attr({"font-size": 14, "font-family" : "Times New Roman"});
}

// Changes the Node's contents
function changeNodeID(node, element) {
        var temp_node = node;
        temp_node.id = element;
        createNode(temp_node.id, node.x_coor, node.y_coor);
        node.remove(); // Removes the old node
}

function drawTree() {

        // Level 4 Nodes
        var null_node1 = createNullNode('X', 55, 245);
        var null_node2 = createNullNode('X', 85, 245);
        var null_node3 = createNullNode('X', 115, 245);
        var null_node4 = createNullNode('X', 145, 245);
        var null_node5 = createNullNode('X', 175, 245);
        var null_node6 = createNullNode('X', 205, 245);
        var null_node7 = createNullNode('X', 235, 245);
        var null_node8 = createNullNode('X', 265, 245);
        var null_node9 = createNullNode('X', 295, 245);
        var null_node10 = createNullNode('X', 325, 245);
        var null_node11 = createNullNode('X', 355, 245);
        var null_node12 = createNullNode('X', 385, 245);
        var null_node13 = createNullNode('X', 415, 245);
        var null_node14 = createNullNode('X', 445, 245);
        var null_node15 = createNullNode('X', 475, 245);
        var null_node16 = createNullNode('X', 505, 245);

        // Level 3 Nodes
        var node_1 = createNode(1, 70, 205);
        var node_2 = createNode(1, 130, 205);
        var node_3 = createNode(1, 190, 205);
        var node_4 = createNode(1, 250, 205);
        var node_5 = createNode(1, 310, 205);
        var node_6 = createNode(1, 370, 205);
        var node_7 = createNode(1, 430, 205);
        var node_8 = createNode(1, 490, 205);

        // Level 2 Nodes
        var node_a = createNode(1, 100, 155);
        var node_b = createNode(1, 220, 155);
        var node_c = createNode(1, 340, 155);
        var node_d = createNode(1, 460, 155);

        // Level 1 Nodes
        var node_A = createNode(1, 160, 105);
        var node_B = createNode(1, 400, 105);

        // Root Node
        var rootNode = createNode('ROOT', 280, 55)

        paper.path("M 280, 55 ,L 160, 105");
        paper.path("M 280, 55 ,L 400, 105");

        paper.path("M 160, 105 ,L 100, 155");
        paper.path("M 160, 105 ,L 220, 155");
        paper.path("M 400, 105 ,L 340, 155");
        paper.path("M 400, 105 ,L 460, 155");

        paper.path("M 100, 155 ,L 70, 205");
        paper.path("M 100, 155 ,L 130, 205");
        paper.path("M 220, 155 ,L 190, 205");
        paper.path("M 220, 155 ,L 250, 205");
        paper.path("M 340, 155 ,L 310, 205");
        paper.path("M 340, 155 ,L 370, 205");
        paper.path("M 460, 155 ,L 430, 205");
        paper.path("M 460, 155 ,L 490, 205");

        paper.path("M 70, 205,L 55, 245");
        paper.path("M 70, 205,L 85, 245");
        paper.path("M 130, 205,L 115, 245");
        paper.path("M 130, 205,L 145, 245");
        paper.path("M 190, 205,L 175, 245");
        paper.path("M 190, 205,L 205, 245");
        paper.path("M 250, 205,L 235, 245");
        paper.path("M 250, 205,L 265, 245");
        paper.path("M 310, 205,L 295, 245");
        paper.path("M 310, 205,L 325, 245");
        paper.path("M 370, 205,L 355, 245");
        paper.path("M 370, 205,L 385, 245");
        paper.path("M 430, 205,L 415, 245");
        paper.path("M 430, 205,L 445, 245");
        paper.path("M 490, 205,L 475, 245");
        paper.path("M 490, 205,L 505, 245");
}

window.onload = function() {
        paper = new Raphael(document.getElementById('tree'), 600, 300);
        drawTree();
}

/* main here is a callback, which means that our code will
wait until the document (in other words, the DOM) is loaded,
or ready. When it is, then it will execute the main function.
jQuery calls back to the main function, therefore it's a
callback. */
$(document).ready(main);