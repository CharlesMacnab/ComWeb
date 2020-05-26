  
class Circle1 extends Shape1 {
    protected radius : number;
    constructor(rad : number){
        super(0,0);
        this.radius = rad;
    }
    draw1(ctx : any) : void{
        ctx.beginPath();
        ctx.arc(this.getCenter1().getX(),this.getCenter1().getY(), this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}