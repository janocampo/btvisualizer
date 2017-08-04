var paper;
var vPointer, pPointer, rPointer; // Pointers to be used
var toBeRemoved; // Can equal either 2 3 or 7. Acts as a trigger. 
var twoIsGone = false;
var threeIsGone = false;

// Used to create nodes in the drawTree Method
// x_coor and y_coor keep track of it's location
// ID can be text or integer
function createNode(id, x, y) {
        this.id = id;
        this.x_coor = x;
        this.y_coor = y;
        this.circle = paper.circle(x, y, 20);
        // circle.attr("stroke-width", 1);
        this.id_text = paper.text(x, y, id).attr({"font-size": 28, "font-family" : "Times New Roman"});
}


// Controls the user interface
function main() {

        $('.delete7').hide();
        $('.delete2').hide();
        $('.delete3').hide();
        $('.delete2').fadeIn(500);
        $('.delete3').fadeIn(500);        
        $('.delete7').fadeIn(500);

        $('.control').hide();

        $('.delete2').on('click', function() {
                $('.delete2').hide();
                $('.delete3').hide();
                $('.delete7').hide();
                toBeRemoved = 2;
                var newNode = paper.text(50, 50, "Delete Node " + toBeRemoved).attr({"font-size": 14, "font-family" : "Times New Roman"});
                $('.control').fadeIn(1000);
        });

        $('.delete3').on('click', function() {
                $('.delete3').hide();
                $('.delete2').hide();
                $('.delete7').hide();
                toBeRemoved = 3;
                var newNode = paper.text(50, 50, "Delete Node " + toBeRemoved).attr({"font-size": 14, "font-family" : "Times New Roman"});
                $('.control').fadeIn(1000);
        });

        $('.delete7').on('click', function() {
                $('.delete3').hide();
                $('.delete2').hide();               
                $('.delete7').hide();
                toBeRemoved = 3;
                var newNode = paper.text(50, 50, "Delete Node " + toBeRemoved).attr({"font-size": 14, "font-family" : "Times New Roman"});
                $('.control').fadeIn(1000);
        });

        $('.description').hide();

        $('.description-button').on('click', function() {
                $(this).next().slideToggle(500);
                $(this).toggleClass('active');
        });

}

// Controls what happens on the graphic
window.onload = function() {
        paper = new Raphael(document.getElementById('tree'), 600, 300);

        // Variable Trackers to keep track of the V Pointer
        var vCurrent_x = 280, vCurrent_y = 55;
        var pCurrent_x = 280, pCurrent_y = 55;

        var rara = paper.text(250, 100, "RARARARA");

        vPointer = paper.circle(280, 55, 21);
        vPointer.attr({'stroke' : 'green', 'stroke-width' : 4});

        pPointer = paper.circle(280, 55, 23);
        pPointer.attr({'stroke' : 'blue', 'stroke-width' : 2});


        // Level 2 Nodes
        // var node = paper.circle(100, 155, 20);
        var node_Two = new createNode(2, 100, 155);
        var node_Four = createNode(4, 220, 155);
        var node_Six = createNode(6, 340, 155);
        var node_Eight = createNode(8, 460, 155);

        // Level 1 Nodes
        var node_Three = createNode(3, 160, 105);
        var node_Seven = createNode(7, 400, 105);

        // Root Node
        var node_Five = createNode(5, 280, 55)

        // Root Paths
        var fiveToThree = paper.path("M 260, 55 ,L 160, 85");
        var fiveToSeven = paper.path("M 300, 55 ,L 400, 85");

        // 1st Level Paths
        var threeToTwo = paper.path("M 140, 105 ,L 100, 135");
        var threeToFour = paper.path("M 180, 105 ,L 220, 135");
        var sevenToSix = paper.path("M 380, 105 ,L 340, 135");
        var sevenToEight = paper.path("M 420, 105 ,L 460, 135");

        // Null Nodes
        var node_1 = createNode("X", 70, 205);
        var node_2 = createNode("X", 130, 205);
        var node_3 = createNode("X", 190, 205);
        var node_4 = createNode("X", 250, 205);
        var node_5 = createNode("X", 310, 205);
        var node_6 = createNode("X", 370, 205);
        var node_7 = createNode("X", 430, 205);
        var node_8 = createNode("X", 490, 205);

        // Null Nodes paths
        var null_1 = paper.path("M 80, 155 ,L 70, 185");
        var null_2 = paper.path("M 120, 155 ,L 130, 185");
        var null_3 = paper.path("M 200, 155 ,L 190, 185");
        var null_4 = paper.path("M 240, 155 ,L 250, 185");
        var null_5 = paper.path("M 320, 155 ,L 310, 185");
        var null_6 = paper.path("M 360, 155 ,L 370, 185");
        var null_7 = paper.path("M 440, 155 ,L 430, 185");
        var null_8 = paper.path("M 480, 155 ,L 490, 185");

        /* V functionality
                - VLeft & VRight
                - Delete V;
        */
        $("#submitBtn_V").click ( function() {
                if ( $('select#executeQuery_v').val() === "delete") {
                        // Need to analyze the parent pointer locations
                        // If the node to be removed is 2 and V is currently pointing to Node 2 and Parent is pointing to Node 3 then allow else don't
                        if (toBeRemoved == 2 && (vCurrent_x == 100 && vCurrent_y == 155) && (pCurrent_x == 160 && pCurrent_y == 105)) {
                                node_Two.id_text.remove();
                                node_Two.circle.remove();
                                twoIsGone = true;
                                // Make Remove 3 Available here
                        }
                        else if (toBeRemoved == 3 && (vCurrent_x == 100 && vCurrent_y == 155) && (pCurrent_x == 160 && pCurrent_y == 105)) {
                                threeIsGone = true;
                                // Make remove 7 available here
                        }
                        else {
                                alert("This isn't the node to be removed.");
                                history.go(0);
                        }
                        // Depending on which level the node is, the parent pointer should be one level above it
                        // V can only be deleted when the parent is in the proper place

                }
                // Accounts for the V pointer moving left
                else if ( $('select#executeQuery_v').val() === "vLeft") {
                // Account for user query to go down further after NULL has already been reaced
                        if (vCurrent_y == 205) {
                                alert("You cannot proceed further down as the pointer has reached NULL");
                                // Refresh page here
                                history.go(0);
                        }
                        // Normal Cases of moving the tree
                        // ROOT NODE TO LEVEL 1
                        else if (vCurrent_x == 280 && vCurrent_y == 55) {
                                vPointer.remove();
                                vCurrent_x = 160;
                                vCurrent_y = 105;
                                vPointer = paper.circle(vCurrent_x, vCurrent_y, 21).attr({"stroke" : "green", "stroke-width" : 4});
                        }
                        // LEVEL 2 TO NULL LEVEL
                        else if (vCurrent_y == 155) {
                                vPointer.remove();
                                vCurrent_x -= 30;
                                vCurrent_y += 50;
                                vPointer = paper.circle(vCurrent_x, vCurrent_y, 21).attr({"stroke" : "green", "stroke-width" : 4});
                        }
                        // LEVEL 1 AND BEYOND
                        else {
                                vPointer.remove();
                                vCurrent_x = vCurrent_x - 60;
                                vCurrent_y = vCurrent_y + 50;
                                vPointer = paper.circle(vCurrent_x, vCurrent_y, 23).attr({"stroke": "green", "stroke-width": 4});
                        }
                }
                // Accounts for the V pointer moving right
                else if ( $('select#executeQuery_v').val() === "vRight") {
                // Account for user query to go down further after NULL has already been reaced
                        if (vCurrent_y == 205) {
                                alert("You cannot proceed further down as the pointer has reached NULL");
                                // Refresh page here
                                history.go(0);
                        }
                        // Account for NULL Cases
                        else if (vCurrent_y == 205) {
                                alert("You have reached a NULL node.");
                        }
                        // Normal Cases of moving the tree
                        // ROOT NODE TO LEVEL 1
                        else if (vCurrent_x == 280 && vCurrent_y == 55) {
                                vPointer.remove();
                                vCurrent_x = 400;
                                vCurrent_y = 105;
                                vPointer = paper.circle(vCurrent_x, vCurrent_y, 21).attr({"stroke" : "green", "stroke-width" : 4});
                        }
                        // LEVEL 2 TO NULL LEVEL
                        else if (vCurrent_y == 155) {
                                vPointer.remove();
                                vCurrent_x += 30;
                                vCurrent_y += 50;
                                vPointer = paper.circle(vCurrent_x, vCurrent_y, 21).attr({"stroke" : "green", "stroke-width" : 4});
                        }
                        // LEVEL 1 AND BEYOND
                        else {
                                vPointer.remove();
                                vCurrent_x = vCurrent_x + 60;
                                vCurrent_y = vCurrent_y + 50;
                                vPointer = paper.circle(vCurrent_x, vCurrent_y, 23).attr({"stroke": "green", "stroke-width": 4});
                        }
                }
                else alert("Something broke!");
      }) // END SUBMIT BUTTON 

        /* P functionality
                - PLeft & PRight;
                - Assignments into children and NULL
        */
        $("#submitBtn_P").click ( function() {
                if ( $('select#executeQuery_p').val() === "pLeft") {
                // Account for user query to go down further after NULL has already been reaced
                        if (pCurrent_y == 205) {
                                alert("You cannot proceed further down as the pointer has reached NULL");
                                // Refresh page here
                                history.go(0);
                        }
                        // Normal Cases of moving the tree
                        // ROOT NODE TO LEVEL 1
                        else if (pCurrent_x == 280 && pCurrent_y == 55) {
                                pPointer.remove();
                                pCurrent_x -= 120;
                                pCurrent_y += 50;
                                pPointer = paper.circle(pCurrent_x, pCurrent_y, 21).attr({"stroke" : "blue", "stroke-width" : 6});

                        }
                        // LEVEL 2 TO NULL LEVEL
                        else if (pCurrent_y == 155) {
                                pPointer.remove();
                                pCurrent_x -= 30;
                                pCurrent_y += 50;
                                alert("You have reached a NULL node.");
                                pPointer = paper.circle(pCurrent_x, pCurrent_y, 21).attr({"stroke" : "blue", "stroke-width" : 6});
                        }
                        // LEVEL 1 AND BEYOND
                        else {
                                pPointer.remove();
                                pCurrent_x -= 60;
                                pCurrent_y += 50;
                                pPointer = paper.circle(pCurrent_x, pCurrent_y, 23).attr({"stroke": "blue", "stroke-width": 6});
                        }
                }
                // Accounts for the V pointer moving right
                else if ( $('select#executeQuery_p').val() === "pRight") {
                // Account for user query to go down further after NULL has already been reaced
                        if (pCurrent_y == 205) {
                                alert("You cannot proceed further down as the pointer has reached NULL");
                                // Refresh page here
                                history.go(0);
                        }
                        // Normal Cases of moving the tree
                        // ROOT NODE TO LEVEL 1
                        else if (pCurrent_x == 280 && pCurrent_y == 55) {
                                pPointer.remove();
                                pCurrent_x += 120;
                                pCurrent_y += 50;
                                pPointer = paper.circle(pCurrent_x, pCurrent_y, 21).attr({"stroke" : "blue", "stroke-width" : 6});
                        }
                        // LEVEL 2 TO NULL LEVEL
                        else if (pCurrent_y == 155) {
                                alert("You have reached a NULL node.");
                                pPointer.remove();
                                pCurrent_x += 30;
                                pCurrent_y += 50;
                                pPointer = paper.circle(pCurrent_x, pCurrent_y, 21).attr({"stroke" : "blue", "stroke-width" : 6});
                        }
                        // LEVEL 1 AND BEYOND
                        else {
                                pPointer.remove();
                                pCurrent_x += 60;
                                pCurrent_y += 50;
                                pPointer = paper.circle(pCurrent_x, pCurrent_y, 23).attr({"stroke": "blue", "stroke-width": 6});
                        }
                }
                // Parent -> Left = V -> Left
                else if ( $('select#executeQuery_p').val() === "pLtvL") {
                        // Pointer from Node 3 - V -> Left = 2
                        if ((vCurrent_x == 160 && vCurrent_y == 105) && (pCurrent_x == 280 && pCurrent_y == 55)) {
                                rara.remove();
                                alert("Parent's Left Pointer now points to 2");
                        }
                        // Pointer from Node 7 - V -> Left = 6
                        else if ((vCurrent_x == 400 && vCurrent_y == 105) && (pCurrent_x == 280 && pCurrent_y == 55)) {
                                alert("Parent's Left Pointer now points to 6");
                                rara.remove();
                        }
                        // If Parent Pointer is in default
                        else if (vCurrent_x == 280 && vCurrent_y == 55) {
                                alert("No Change. Parent's Left Pointer is still at 3.");
                                rara.remove();

                        }
                        // When V -> Left = NULL;
                        else if ((vCurrent_x == 100 && vCurrent_y == 155) && (pCurrent_x == 160 && pCurrent_y == 105) 
                                        || (vCurrent_x == 220 && vCurrent_y == 155) && (pCurrent_x == 160 && pCurrent_y == 105) 
                                        || (vCurrent_x == 340 && vCurrent_y == 155) && (pCurrent_x == 400 && pCurrent_y == 105) 
                                        || (vCurrent_x == 460 && vCurrent_y == 155) && (pCurrent_x == 400 && pCurrent_y == 105)) {
                                alert("Parent's Left Pointer now points to NULL");
                                                        rara.remove();

                        }
                        // When V = NULL
                        else if (vCurrent_y == 205) {
                                alert("V is NULL. There are no pointers here.");
                                history.go(0);
                                rara.remove();

                        }
                        // When Parent is disconnected
                        else {
                                alert("Parent is not in it's proper place");
                                history.go(0);
                                rara.remove();
                        }
               }
                // Parent -> Left = V -> Right
                else if ( $('select#executeQuery_p').val() === "pLtvR") {
                        // Pointer from Node 3 - V -> Right = 4
                        if ((vCurrent_x == 160 && vCurrent_y == 105) && (pCurrent_x == 280 && pCurrent_y == 55)) {
                                rara.remove();
                                alert("Parent's Left Pointer now points to 4");
                        }
                        // Pointer from Node 7 - V -> Right = 8
                        else if ((vCurrent_x == 400 && vCurrent_y == 105) && (pCurrent_x == 280 && pCurrent_y == 55)) {
                                alert("Parent's Left Pointer now points to 8");
                                rara.remove();
                        }
                        // If Parent Pointer is in default
                        else if (vCurrent_x == 280 && vCurrent_y == 55) {
                                alert("No Change. Parent's Left Pointer is still at 7.");
                                rara.remove();
                        }
                        // When V -> Right = NULL;
                        else if ((vCurrent_x == 100 && vCurrent_y == 155) && (pCurrent_x == 160 && pCurrent_y == 105) 
                                        || (vCurrent_x == 220 && vCurrent_y == 155) && (pCurrent_x == 160 && pCurrent_y == 105) 
                                        || (vCurrent_x == 340 && vCurrent_y == 155) && (pCurrent_x == 400 && pCurrent_y == 105) 
                                        || (vCurrent_x == 460 && vCurrent_y == 155) && (pCurrent_x == 400 && pCurrent_y == 105)) {
                                alert("Parent's Left Pointer now points to NULL");
                                rara.remove();
                        }
                        // When V = NULL
                        else if (vCurrent_y == 205) {
                                alert("V is NULL. There are no pointers here.");
                                history.go(0);
                                rara.remove();

                        }
                        // When Parent is disconnected
                        else {
                                alert("Parent is not in it's proper place");
                                history.go(0);
                                rara.remove();

                        }
                }
                // Parent -> Right = V -> Left
                else if ( $('select#executeQuery_p').val() === "pRtvL") {
                        // Pointer from Node 3 - V -> Left = 2
                        if ((vCurrent_x == 160 && vCurrent_y == 105) && (pCurrent_x == 280 && pCurrent_y == 55)) {
                                rara.remove();
                                alert("Parent's Right Pointer now points to 2");
                        }
                        // Pointer from Node 7 - V -> Left = 6
                        else if ((vCurrent_x == 400 && vCurrent_y == 105) && (pCurrent_x == 280 && pCurrent_y == 55)) {
                                alert("Parent's Right Pointer now points to 6");
                                rara.remove();
                        }
                        // If Parent Pointer is in default
                        else if (vCurrent_x == 280 && vCurrent_y == 55) {
                                alert("No Change. Parent's Right Pointer is still at 3.");
                        }
                        // When V -> Left = NULL;
                        else if ((vCurrent_x == 100 && vCurrent_y == 155) && (pCurrent_x == 160 && pCurrent_y == 105) 
                                        || (vCurrent_x == 220 && vCurrent_y == 155) && (pCurrent_x == 160 && pCurrent_y == 105) 
                                        || (vCurrent_x == 340 && vCurrent_y == 155) && (pCurrent_x == 400 && pCurrent_y == 105) 
                                        || (vCurrent_x == 460 && vCurrent_y == 155) && (pCurrent_x == 400 && pCurrent_y == 105)) {
                                alert("Parent's Right Pointer now points to NULL");
                                rara.remove();
                        }
                        // When V = NULL
                        else if (vCurrent_y == 205) {
                                alert("V is NULL. There are no pointers here.");
                                history.go(0);
                                rara.remove();
                        }
                        // When Parent is disconnected
                        else {
                                alert("Parent is not in it's proper place");
                                history.go(0);
                                rara.remove();
                        }
                }
                // Parent -> Right = V -> Right
                else if ( $('select#executeQuery_p').val() === "pRtvR") {
                        // Pointer from Node 3 - V -> Right = 4
                        if ((vCurrent_x == 160 && vCurrent_y == 105) && (pCurrent_x == 280 && pCurrent_y == 55)) {
                                rara.remove();
                                alert("Parent's Right Pointer now points to 4");
                        }
                        // Pointer from Node 7 - V -> Right = 8
                        else if ((vCurrent_x == 400 && vCurrent_y == 105) && (pCurrent_x == 280 && pCurrent_y == 55)) {
                                alert("Parent's Right Pointer now points to 8");
                                rara.remove();
                        }
                        // If Parent Pointer is in default
                        else if (vCurrent_x == 280 && vCurrent_y == 55) {
                                alert("No Change. Parent's Left Pointer is still at 3.");
                        }
                        // When V -> Right = NULL;
                        else if ((vCurrent_x == 100 && vCurrent_y == 155) && (pCurrent_x == 160 && pCurrent_y == 105) 
                                        || (vCurrent_x == 220 && vCurrent_y == 155) && (pCurrent_x == 160 && pCurrent_y == 105) 
                                        || (vCurrent_x == 340 && vCurrent_y == 155) && (pCurrent_x == 400 && pCurrent_y == 105) 
                                        || (vCurrent_x == 460 && vCurrent_y == 155) && (pCurrent_x == 400 && pCurrent_y == 105)) {
                                alert("Parent's Right Pointer now points to NULL")
                                rara.remove();
                        }
                        // When V = NULL
                        else if (vCurrent_y == 205) {
                                alert("V is NULL. There are no pointers here.");
                                history.go(0);
                                rara.remove();
                        }
                        // When Parent is disconnected
                        else {
                                alert("Parent is not in it's proper place");
                                history.go(0);
                                rara.remove();

                        }
                }
                // Parent -> Right = NULL
                else if ( $('select#executeQuery_p').val() === "pRtN") {
                        alert("Parent's Right Pointer now points to NULL.");
                }
                // Parent -> Left = NULL
                else if ( $('select#executeQuery_p').val() === "pLtN") {
                        alert("Parent's Right Pointer now points to NULL.");
                }
                else alert("Something broke!");
      })
}

/* main here is a callback, which means that our code will
wait until the document (in other words, the DOM) is loaded,
or ready. When it is, then it will execute the main function.
jQuery calls back to the main function, therefore it's a
callback. */
$(document).ready(main);