class Chain {
constructor(bodyA,bodyB){
    var options = {
        bodyA : bodyA,
        bodyB : bodyB,
        length: 10,
        stiffness :0.04
    }
   this.c =  Constraint.create(options);
}
display(){

    var posA = this.c.bodyA.position;
    var posB = this.c.bodyB.position;
    strokeWeight(4);
    line(posA.x,posA.y,posB.x,posB.y);

}

};