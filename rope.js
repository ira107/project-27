class Rope {
    constructor(body1,body2,offSetX,offSetY){
        var options = {
            bodyA: body1,
            bodyB:body2,
            pointB:{x:this.offSetX,y:this.offSetY}
        }
        
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
  display(){
      var pointA = this.rope.bodyA.position;
      var pointB = this.rope.bodyB.position;
      strokeWeight(4);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
      
  }

}