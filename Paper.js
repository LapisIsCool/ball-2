class Paper{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:1.0,
			density:1.2
			}

		this.image = loadImage("Image Files/paper.png")

		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			image(this.image,0,0,100,100)
			pop()
			
	}

}