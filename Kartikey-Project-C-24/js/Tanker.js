// Creating a tanker class
class Tanker {

        // Calling the constructor
        constructor(x, y, width, height) {

          // Adding the properties to the constructor 
          var options = {
            isStatic: true
          }

          // Creating the body
          this.body = Bodies.rectangle(x,y,width,height,options);

          // Keeping track of the height and width
          this.width = width;
          this.height = height;
            
          // Adding the body to the world
          World.add(world,this.body);
        }

        // Defining a displaying function
        display(){

          // Giving the position of the body to a variable
          var pos = this.body.position;

          // Using the push and pop funtion
          push();

          // Setting the rectangle mode as center
          rectMode(CENTER);

          // Giving the object a colour
          fill("brown");

          // Giving the object a stroke colour and it's thickness
          stroke("blue");
          strokeWeight(2);

          // Creating the rectangle at the given position
          rect(pos.x,pos.y,this.width,this.height);
          pop();
        }
}

// Creating a tanker1 class
class Tanker1 {

        // Calling the constructor
        constructor(x, y, width, height) {

          // Adding the properties to the constructor 
          var options = {
            isStatic: true
          }

          // Creating the body
          this.body = Bodies.rectangle(x,y,width,height,options);

          // Keeping track of the height and width
          this.width = width;
          this.height = height;
            
          // Adding the body to the world
          World.add(world,this.body);
        }

        // Defining a displaying function
        display(){

          // Giving the position of the body to a variable
          var pos = this.body.position;

          // Using the push and pop funtion
          push();

          // Setting the ellipse mode as center
          ellipseMode(CENTER);

          // Giving the object a colour
          fill("brown");

          // Giving the object a stroke colour and it's thickness
          stroke("blue");
          strokeWeight(2);

          // Creating the ellipse at the given position
          ellipse(pos.x,pos.y,this.width *2,this.height);
          pop();
        }
}

// Creating a tankerwheel class
class TankerWheel {

        // Calling the constructor
        constructor(x, y, radius) {

          // Adding the properties to the constructor 
          var options = {
            isStatic: true
          }

          // Creating the body
          this.body = Bodies.circle(x,y,radius,options);

          // Kaeeping track o the radius
          this.radius = radius;
            
          // Adding the body to the world
          World.add(world,this.body);
        }

        // Defining a displaying function
        display(){

          // Giving the position of the body to a variable
          var pos = this.body.position;

          // Using the push and pop funtion
          push();

          // Setting the ellipse mode as center
          ellipseMode(CENTER);

          // Giving the object a colour
          fill("white");

          // Giving the object a stroke colour and it's thickness
          stroke("grey");
          strokeWeight(2);

          // Creating the ellipse at the given position
          ellipse(pos.x,pos.y,this.radius * 2);

          // Creating the lines horizontally and vertically
          line(pos.x,pos.y,pos.x - this.radius,pos.y - (this.radius - 17));
          line(pos.x,pos.y,pos.x + this.radius,pos.y - (this.radius - 17));
          line(pos.x,pos.y,pos.x - (this.radius - 17),pos.y - this.radius);
          line(pos.x,pos.y,pos.x - (this.radius - 17),pos.y + this.radius);
          pop();
        }
}