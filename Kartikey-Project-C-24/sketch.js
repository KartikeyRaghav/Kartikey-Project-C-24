// Adding physics to the project
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

// Creating various variable
var engine,world;
var take1;
var p,p1,p2,p3,p4,p5,p6,p7;
var canvasmouse, mConstraint;
var particles = [],particles1 = [],particles2 = [],particles3 = [],particles4 = [],particles5 = [],particles6 = [],
particles7 = [];






// Calling the function setup
function setup() {

          // Creating a canvas
          var canvas = createCanvas(1200,400); 

          // Creating an engine and adding the world to the engine
          engine = Engine.create();
          world = engine.world;

          // Creating a canvas mouse
          canvasmouse = Mouse.create(canvas.elt);

          // Changing the pixel ratio of the mouse acoording the density of the pixels of the screen so that the program runs smoothly in high density screens also 
          canvasmouse.pixelRatio = pixelDensity();

          // Adding canvas mouse to the mouse constraint
          var op = {
            Mouse: canvasmouse
          }

          // Creating the mouse constraint
          mConstraint = MouseConstraint.create(engine, op);

          // Adding it to the world
          World.add(world,mConstraint);




          // Building the first chain
          // Creating an object that will keep track of the previous particle
          var prev = null;

          // Creating a chain at the left side
          for(x = 15; x > -300; x -= 40) {

            // Creating a variable fixed
            var fixed = false;

            // Making the fixed true if there is no previous particle
            if(!prev) {
              fixed = true;
            }

            // Creating a particle
            p = new SideChain(x,20,10,fixed);

            // Adding it to particles array
            particles.push(p);

            // Adding the particle to the world
            World.add(world,p);

            // Creating an invisible chain with the previous particle
            if(prev) {

              // Adding the properties to the chain with the help of a variable
              var options = {
              
              // Setting the chain start and end point
              bodyA: p.body,
              bodyB: prev.body,

              // Setting the length of the chain
              length: 20,

              // Setting the stiffness of the chain
              stiffness: 0.4
            }

            // Creating a constraint
            var constre = Constraint.create(options);

            // Adding the constraint to the world
            World.add(world,constre);
            }

            // Adding the particle to the previous
            prev = p;
          }




          // Building the second chain
          // Creating an object that will keep track of the previous particle
          var prev1 = null;

          // Creating a chain at the left side
          for(y = 75; y > -300; y -= 40) {

            // Creating a variable fixed
            var fixed = false;

            // Making the fixed true if there is no previous particle
            if(!prev1) {
              fixed = true;
            }

            // Creating a particle
            p1 = new SideChain(y,20,10,fixed);

            // Adding it to particles array
            particles1.push(p1);

            // Adding the particle to the world
            World.add(world,p1);

            // Creating an invisible chain with the previous particle
            if(prev1) {

              // Adding the properties to the chain with the help of a variable
              var options = {
              
              // Setting the chain start and end point
              bodyA: p1.body,
              bodyB: prev1.body,

              // Setting the length of the chain
              length: 20,

              // Setting the stiffness of the chain
              stiffness: 0.4
            }

            // Creating a constraint
            var constra = Constraint.create(options);

            // Adding the constraint to the world
            World.add(world,constra);
            }

            // Adding the particle to the previous
            prev1 = p1;
          }




          // Building the third chain
          // Creating an object that will keep track of the previous particle
          var prev2 = null;

          // Creating a chain at the left side
          for(z = 135; z > -270; z -= 40) {

            // Creating a variable fixed
            var fixed = false;

            // Making the fixed true if there is no previous particle
            if(!prev2) {
              fixed = true;
            }

            // Creating a particle
            p2 = new SideChain(z,20,10,fixed);

            // Adding it to particles array
            particles2.push(p2);

            // Adding the particle to the world
            World.add(world,p2);

            // Creating an invisible chain with the previous particle
            if(prev2) {

              // Adding the properties to the chain with the help of a variable
              var options = {
              
              // Setting the chain start and end point
              bodyA: p2.body,
              bodyB: prev2.body,

              // Setting the length of the chain
              length: 20,

              // Setting the stiffness of the chain
              stiffness: 0.4
            }

            // Creating a constraint
            var constrb = Constraint.create(options);

            // Adding the constraint to the world
            World.add(world,constrb);
            }

            // Adding the particle to the previous
            prev2 = p2;
          }




          // Building the fourth chain
          // Creating an object that will keep track of the previous particle
          var prev3 = null;

          // Creating a chain at the left side
          for(a = 195; a > -240; a -= 40) {

            // Creating a variable fixed
            var fixed = false;

            // Making the fixed true if there is no previous particle
            if(!prev3) {
              fixed = true;
            }

            // Creating a particle
            p3 = new SideChain(a,20,10,fixed);

            // Adding it to particles array
            particles3.push(p3);

            // Adding the particle to the world
            World.add(world,p3);

            // Creating an invisible chain with the previous particle
            if(prev3) {

              // Adding the properties to the chain with the help of a variable
              var options = {
              
              // Setting the chain start and end point
              bodyA: p3.body,
              bodyB: prev3.body,

              // Setting the length of the chain
              length: 20,

              // Setting the stiffness of the chain
              stiffness: 0.4
            }

            line(p3.body.x,p3.body.y,prev3.body.x,prev3.body.x);

            // Creating a constraint
            var constrc = Constraint.create(options);

            // Adding the constraint to the world
            World.add(world,constrc);
            }

            // Adding the particle to the previous
            prev3 = p3;
          }




          // Building the fifth chain
          // Creating an object that will keep track of the previous particle
          var prev4 = null;

          // Creating a chain at the left side
          for(b = 255; b > -300; b -= 40) {

            // Creating a variable fixed
            var fixed = false;

            // Making the fixed true if there is no previous particle
            if(!prev4) {
              fixed = true;
            }

            // Creating a particle
            p4 = new SideChain(b,20,10,fixed);

            // Adding it to particles array
            particles4.push(p4);

            // Adding the particle to the world
            World.add(world,p4);

            // Creating an invisible chain with the previous particle
            if(prev4) {

              // Adding the properties to the chain with the help of a variable
              var options = {
              
              // Setting the chain start and end point
              bodyA: p4.body,
              bodyB: prev4.body,

              // Setting the length of the chain
              length: 20,

              // Setting the stiffness of the chain
              stiffness: 0.4
            }

            // Creating a constraint
            var constrd = Constraint.create(options);

            // Adding the constraint to the world
            World.add(world,constrd);
            }

            // Adding the particle to the previous
            prev4 = p4;
          }




          // Building the sixth chain
          // Creating an object that will keep track of the previous particle
          var prev5 = null;

          // Creating a chain at the left side
          for(c = 305; c > -300; c -= 40) {

            // Creating a variable fixed
            var fixed = false;

            // Making the fixed true if there is no previous particle
            if(!prev5) {
              fixed = true;
            }

            // Creating a particle
            p5 = new SideChain(c,20,10,fixed);

            // Adding it to particles array
            particles5.push(p5);

            // Adding the particle to the world
            World.add(world,p5);

            // Creating an invisible chain with the previous particle
            if(prev5) {

              // Adding the properties to the chain with the help of a variable
              var options = {
              
              // Setting the chain start and end point
              bodyA: p5.body,
              bodyB: prev5.body,

              // Setting the length of the chain
              length: 20,

              // Setting the stiffness of the chain
              stiffness: 0.4
            }

            // Creating a constraint
            var constrf = Constraint.create(options);

            // Adding the constraint to the world
            World.add(world,constrf);
            }

            // Adding the particle to the previous
            prev5 = p5;
          }




          // Building the seventh chain
          // Creating an object that will keep track of the previous particle
          var prev6 = null;

          // Creating a chain at the left side
          for(d = 365; d > -270; d -= 40) {

            // Creating a variable fixed
            var fixed = false;

            // Making the fixed true if there is no previous particle
            if(!prev6) {
              fixed = true;
            }

            // Creating a particle
            p6 = new SideChain(d,20,10,fixed);

            // Adding it to particles array
            particles6.push(p6);

            // Adding the particle to the world
            World.add(world,p6);

            // Creating an invisible chain with the previous particle
            if(prev6) {

              // Adding the properties to the chain with the help of a variable
              var options = {
              
              // Setting the chain start and end point
              bodyA: p6.body,
              bodyB: prev6.body,

              // Setting the length of the chain
              length: 20,

              // Setting the stiffness of the chain
              stiffness: 0.4
            }

            // Creating a constraint
            var constrg = Constraint.create(options);

            // Adding the constraint to the world
            World.add(world,constrg);
            }

            // Adding the particle to the previous
            prev6 = p6;
          }




          // Building the eigth chain
          // Creating an object that will keep track of the previous particle
          var prev7 = null;

          // Creating a chain at the left side
          for(h = 425; h > -240; h -= 40) {

            // Creating a variable fixed
            var fixed = false;

            // Making the fixed true if there is no previous particle
            if(!prev7) {
              fixed = true;
            }

            // Creating a particle
            p7 = new SideChain(h,20,10,fixed);

            // Adding it to particles array
            particles7.push(p7);

            // Adding the particle to the world
            World.add(world,p7);

            // Creating an invisible chain with the previous particle
            if(prev7) {

              // Adding the properties to the chain with the help of a variable
              var options = {
              
              // Setting the chain start and end point
              bodyA: p7.body,
              bodyB: prev7.body,

              // Setting the length of the chain
              length: 20,

              // Setting the stiffness of the chain
              stiffness: 0.4
            }

            // Creating a constraint
            var constrh = Constraint.create(options);

            // Adding the constraint to the world
            World.add(world,constrh);
            }

            // Adding the particle to the previous
            prev7 = p7;
          }




          // Creating a ground
          ground = new Ground(600,height-10,1200,20);

          // Creating the tanker
          take1 = new Tanker(150,230,100,30);
          take2 = new Tanker(150,295,200,100);   
          take3 = new Tanker(150,210,50,10);
          take4 = new Tanker1(50,295,20,100);
          take5 = new Tanker1(250,295,20,100);
          take6 = new Tanker1(100,230,3,30);
          take7 = new Tanker1(200,230,3,30);
          take8 = new Tanker1(125,210,5,10);
          take9 = new Tanker1(175,210,5,10);

          // Creating the shooting part
          shootpart1 = new Tanker(300,295,100,20,PI/2);
          shootpart2 = new Tanker(350,295,30,30,PI/2);

          // Creating the wheels of the tanker
          wheel1 = new TankerWheel(70,362,17);
          wheel2 = new TankerWheel(110,362,17);
          wheel3 = new TankerWheel(150,362,17);
          wheel4 = new TankerWheel(190,362,17);
          wheel5 = new TankerWheel(230,362,17);

}







// Main part of the code called
function draw() {

          // Colouring the background
          background(0,0,0);

          // Updating the engine
          Engine.update(engine);

          // Displaying the ground
          ground.display();

          // Displaying the shooting parts
          shootpart1.display();
          shootpart2.display();

          // Displaying the parts of the tanker
          take4.display();
          take5.display();
          take6.display();
          take7.display();
          take8.display();
          take9.display();
          take1.display();
          take2.display();
          take3.display();

          // DIsplaying the wheels of the tanker
          wheel1.display();
          wheel2.display();
          wheel3.display();
          wheel4.display();
          wheel5.display();

          // Displaying the first chain
          for(var j = 0; j < particles.length; j++) {
            particles[j].show();
          }
          
          // Displaying the second chain
          for(var i = 0; i < particles.length; i++) {
            particles1[i].show();
          }

          // Displaying the third chain
          for(var k = 0; k < particles.length; k++) {
            particles2[k].show();
          }
        
          // Displaying the fourth chain
          for(var l = 0; l < particles.length; l++) {
            particles3[l].show();
          }

          // Displaying the fifth chain
          for(var j = 0; j < particles.length; j++) {
            particles4[j].show();
          }
        
          // Displaying the sixth chain
          for(var i = 0; i < particles.length; i++) {
            particles5[i].show();
          }

          // Displaying the seventh chain
          for(var k = 0; k < particles.length; k++) {
            particles6[k].show();
          }

          // Displaying the eigth chain
          for(var l = 0; l < particles.length; l++) {
            particles7[l].show();
          }

          // Drawing a line between the mouse and the particle which is clicked 
          if(mConstraint.body) {
            var pos = mConstraint.body.position;
            var offset = mConstraint.constraint.pointB;
            var m = mConstraint.mouse.position;
            line(pos.x + offset.x,pos.y + offset.y,m.x,m.y)
          }
    
}






// Calling the key released function
function keyReleased() {
          // Call the shoot method for the cannon.
}