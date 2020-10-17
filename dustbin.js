class dustbin{

    constructor(x,y,width,height){
        this.object=Bodies.rectangle(x,y,width,height, {isStatic:true});
        this.width=width;
        this.height=height;
        World.add(world,this.object);
        this.img=loadImage("dustbingreen.png");
        }
    
    display(){ 
        push ();

translate(this.object.position.x, this.object.position.y);
imageMode(CENTER);
image(this.img,0,0, 120, 150);
pop ();
}
    }

















