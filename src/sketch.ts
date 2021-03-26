// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    deca:1,
    rot:1,
    taille:1,
    noiseScale:1,
    noiseAmplitude:0,
    inclinaison:1,
    Download_Image: () => save(),
}
gui.add(params, "deca", 0, 10, 0.1)
gui.add(params, "rot", 0, 10, 0.1)
gui.add(params, "taille", 0, 5, 0.1)
// gui.add(params, "noiseScale",0,0.1,0.000001) // VERSION NOISE
// gui.add(params, "noiseAmplitude",0,100,1) // VERSION NOISE
//gui.add(params, "inclinaison", 0,10,0.1) // VERSION NOISE
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    
    background('#ffffff');

    randomSeed(0)

    let k=0;
    let l=0;
    let x=0;
    let y=0;
    let color=200;
    // let circle=0; // VERSION ROUNDED SQUARE
    fill(0);
    textSize(height/60);
    textAlign(CENTER)
    text("Georg Nees , Schotter by Théo HORLAVILLE | IMAC 2023",width/2,height*0.98); 
    noFill();
    translate(width/2-width/3.5-(11/2)*30*params.taille, 0); // centrer la figure
   

    for (let i=0;i<22;i++)
    {
        
        k+=1.5*params.rot;
        l+=0.8*params.deca;
        //circle+=0.75; // VERSION ROUNDED SQUARE

        for(let j=0;j<11;j++)
        {   
            push();
                x+=30;
                let randX=random(-1*l,1*l);
                let randY=random(-1*l,1*l);
                let randRot=random(-1*k,1*k); 
                //let randX=noise(x*params.noiseScale,y*params.noiseScale)*params.noiseAmplitude; // VERSION NOISE
                //let randY=noise(x*params.noiseScale,y*params.noiseScale)*params.noiseAmplitude; // VERSION NOISE
                //let randRot=noise(x*params.rot,y*params.rot)*TWO_PI*4*params.inclinaison; // VERSION NOISE
                translate(width/3.5+x*params.taille+randX,height/8+randY+y);
                rotate(radians(randRot));
                //rect(0,0,30*params.taille,30*params.taille,circle);    // VERSION ROUNDED SQUARE
                rect(0,0,30*params.taille,30*params.taille);
            pop();
        }
        
        x=0;
        color+=11.6;
        y+=30*params.taille;
            
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