class Paper
{	constructor(x,y,r)
	{
		var options={
			isStatic:false,	
            restitution:0.3,
            friction:0,
            density:1.2
			}
		this.x=x;
		this.y=y;
		//since we are making it an ellipse so instead of width and height
		//give radius r-- radius
		this.r=r

		//loading image should be done before you make the body
		this.image=loadImage("paper.png");

		//making it into a circle
		//because of 12,13,16 line the arguments will not be x,y,r instead : this.x, this.y an so on
		//(this.r-20)/2-- so that the paper ball witll fly with a greater impact into the dustbin, try changing it and see
		this.body= Bodies.circle(this.x, this.y, (this.r-20)/2, options);
        
		//the body is not changing its angle.
		//Matter.Body.setAngle(this.body,angle);
 		World.add(world, this.body);

	}
	display()
	{		//var angle = this.body.angle;
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			//no need of a rec since we are displaying the image
			//rect(0,0,this.w, this.h);
			image(this.image,0,0,this.r,this.r);
			pop()
				}
}