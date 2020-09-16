class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 70, 38, 150);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            
            if(pointA.x < 220) {
                strokeWeight(8);
                line(pointA.x - 20, pointA.y - 5, pointB.x + 25, pointB.y + 15);
                bird.display();
                line(pointA.x - 20, pointA.y - 5, pointB.x - 15, pointB.y + 10);                
                image(this.sling3, pointA.x - 25, pointA.y - 15, 10, 25);
            } else {
                strokeWeight(5);
                line(pointA.x + 25, pointA.y + 5, pointB.x + 25, pointB.y + 15);
                bird.display();
                line(pointA.x + 25, pointA.y + 5, pointB.x - 15, pointB.y + 10);
                image(this.sling3, pointA.x + 25, pointA.y - 5, 10, 25);
            }
            pop();
        }
        image(this.sling2, 175, 65, 38, 100);
    }
    
}