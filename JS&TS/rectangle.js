function Rectangle(width, height){
    this.setW(width);
    this.setH(height);
}

Rectangle.prototype =  Object.create(Shape.prototype);

Rectangle.prototype.draw = function(ctx){
    
    ctx.beginPath();
    ctx.rect(this.getCenter().getX(), this.getCenter().getY(), this.getW(), this.getH());
    ctx.stroke();
}


Rectangle.prototype.getW = function() { return this.width;};
Rectangle.prototype.getH = function() { return this.height;};
Rectangle.prototype.setW = function(width) { this.width = width;};
Rectangle.prototype.setH = function(height) { this.height = height;};