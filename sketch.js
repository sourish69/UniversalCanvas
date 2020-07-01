var ball, position;

var drawing = [];


function setup(){
    canvas = createCanvas(500,500);
    
}

function draw(){
    background(0);
    
    if(mouseIsPressed)
    {

        var points = [mouseX,mouseY];      
        
        drawing.push(points);
    }
    
    beginShape();
    stroke(255);
    strokeWeight(4);
    noFill();
    for(var i = 0; i < drawing.length; i++)
    {
        vertex(drawing[i][0],drawing[i][1]);
    }
    endShape();
   
    
    //coordinates.push(xPosition,yposition)
}


/*

function readPosition(data)
{
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}
function writePosition(x,y)
{
    database.ref('ball/position').set({
        'x':position.x + x,
        'y':position.y + y
    })*/
    //form = new Form();
    //form.display();
//}