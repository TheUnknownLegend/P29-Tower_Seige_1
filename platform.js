class platform {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("light_saber.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
     // fill("orange");
      //rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image, 0 , 0 , this.width, this.height);
    }
  };
