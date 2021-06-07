class Coin{
    constructor(x,y){
        var options = {
            //isStatic : true,
            restitution : 0.7            
        }
        this.body = Bodies.rectangle(x,y,20,20,options);
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        Matter .Body.setVelocity(this.body,{x: -3,y :0})
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y,20,20);
    }
}