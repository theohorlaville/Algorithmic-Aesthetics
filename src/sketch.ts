// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    deca:1,
    rot:1,
    taille:1,
    Download_Image: () => save(),
}
gui.add(params, "deca", 0, 10, 0.1)
gui.add(params, "rot", 0, 10, 0.1)
gui.add(params, "taille", -5, 5, 0.1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    
/*

randomSeed(0);
noStroke;
background('#03cffc');
translate(width/2, height/2);
fill(102, 255, 204);
for(let i=0; i<params.n;i++){
    rect(random(100),random(100),random(10),random(-10));
}
for(let i=0; i<params.n;i++){
    const angle=random(TWO_PI);
    let radius =randomGaussian(0, params.dispersion*width)
    while(abs(radius)>params.dispersion*width*0.8){
        radius =randomGaussian(0, params.dispersion*width)
    }
    fill(255, 255, 153);
    const p=p5.Vector.fromAngle(angle).mult(radius);
    ellipse(p.x,p.y,10);
}
fill(random(255),random(255),random(255));
ellipse(0,0,width);

for(let i=0;i<32;i++){   
   fill(random(255),random(255),random(255));
   ellipse(width/4, 0, width/2,30)
   rotate(radians(360/32));
    
   
}


let x=0;
let y=0;
background('#03cffc');
for(let i=0;i<7;i++){

    let flag=0;
    for(let j=0;j<7;j++){
        
        if(flag==0){
            fill(255,255,255);
            rect(x,y,40,40)
            flag++
        }
        else{
            fill(0,0,0)
            rect(x,y,40,40)
            flag--
        }
        x+=40;

    }
    x=0;
    y+=40;
}*/

background('#ffffff');

randomSeed(0)

let k=0;
let l=0;
let x=0;
let color=200;
let circle=0;
fill(0);
let texte=text("Georg Nees , Schotter by Théo HORLAVILLE | IMAC 2023",0,height*0.95);
texte.center();
noFill();
for (let i=0;i<22;i++)
{
    
    k+=1.5*params.rot;
    l+=0.8*params.deca;
    circle+=0.75;

    

    for(let j=0;j<11;j++)
    {   
        push();
        x+=30;
        let randX=random(-1*l,1*l)
        let randY=random(-1*l,1*l)
        let randRot=random(-1*k,1*k)
        translate(width/3.5+x*params.taille+randX,height/8+randY)  
        rotate(radians(randRot))
        //stroke(0+random(color),0+random(color),0+random(color));
        //stroke("#ffffff");
        //fill(0,0,0+random(color));
        //rect(0,0,30,30,circle)
        rect(0,0,30*params.taille,30*params.taille)
        pop() 
    }
    
    x=0;
    color+=11.6;
    translate(0,30*params.taille)       
}

}

// -------------------
//    Initialization    
// -------------------

function setup() {
    rectMode(CENTER)
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}