var shapes = [];


function onMouseDown(event){
  // console.log('you pressed');

  var mouseClick = Math.round(Math.random()*25);
  //console.log(Object.keys(whichKey)[mouseClick]);

  var mouseClickLetter = Object.keys(whichKey)[mouseClick];

  var maxPoint = new Point(view.size.width, view.size.height);
        //generates a random color 

        var randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
        var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);

        var randomPoint1 = Point.random();
        var randomPoint2 = Point.random();
        var randomPoint3 = Point.random();

        var point1 = maxPoint * randomPoint1;
        var point2 = maxPoint * randomPoint2;
        var point3 = maxPoint * randomPoint3;

        var newCircle = new Path.Circle(point1, 250);

        var newReactangle = new Rectangle(point3, point2);
        var rectangle = new Path.Rectangle(newReactangle);

        newCircle.fillColor = randomColor1;
        rectangle.fillColor = randomColor2;

        whichKey[mouseClickLetter].sound.play();

        shapes.push(newCircle);
        shapes.push(rectangle);
}

function onKeyDown(event) {
    if(whichKey[event.key]) {
        var maxPoint = new Point(view.size.width, view.size.height);
        //generates a random color 

        var randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
        var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);

        var randomPoint1 = Point.random();
        var randomPoint2 = Point.random();
        var randomPoint3 = Point.random();

        var point1 = maxPoint * randomPoint1;
        var point2 = maxPoint * randomPoint2;
        var point3 = maxPoint * randomPoint3;

        var newCircle = new Path.Circle(point1, 500);

        var newReactangle = new Rectangle(point3, point2);
        var rectangle = new Path.Rectangle(newReactangle);

        newCircle.fillColor = randomColor1;
        rectangle.fillColor = randomColor2;

        whichKey[event.key].sound.play();

        shapes.push(newCircle);
        shapes.push(rectangle);
    }
}

function onFrame() {
    for(var i = 0; i < shapes.length; i++) {
        shapes[i].fillColor.hue += 2;
        shapes[i].scale(.94);

        shapes[i].rotate(4);

        //removing that shape from the array whose area becomes less than 2px;
        if(shapes[i].area < 2){
              shapes[i].remove();
              shapes.splice(i, 1);
            }
    }			
}
