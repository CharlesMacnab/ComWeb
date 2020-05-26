function Circle(radius){

    this.setR(radius);

}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function(ctx){
   
    ctx.beginPath();
    ctx.arc(this.getCenter().getX(), this.getCenter().getY(), this.getR(), 0, 2 * Math.PI);
    ctx.stroke();
}

Circle.prototype.getR = function() { return this.radius;};
Circle.prototype.setR = function(radius) { this.radius = radius;};