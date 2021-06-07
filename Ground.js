class Ground {
    constructor(x,y,width,height) {
     

      this.body = Bodies.rectangle(x,y,width,height);
    
      this.image = loadImage("ground2.png")
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push ()
      translate (pos.x,pos.y)
      Matter.Body.setVelocity(this.body,{x : -1, y : 0})
      if(pos.x <-10 ){
        Matter.Body.setPosition(this.body,{ x: 0, y : 380})
      }
      rectMode(CENTER);
      fill("brown");
      image(this.image,0, 0, this.width, this.height);
     //rect(0,0,this.width,this.height)
     pop ();
    }
   
  };