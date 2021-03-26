var gui = new dat.GUI();
var params = {
    deca: 1,
    rot: 1,
    taille: 1,
    noiseScale: 1,
    noiseAmplitude: 0,
    inclinaison: 1,
    Download_Image: function () { return save(); },
};
gui.add(params, "deca", 0, 10, 0.1);
gui.add(params, "rot", 0, 10, 0.1);
gui.add(params, "taille", 0, 5, 0.1);
gui.add(params, "Download_Image");
function draw() {
    background('#ffffff');
    randomSeed(0);
    var k = 0;
    var l = 0;
    var x = 0;
    var y = 0;
    var color = 200;
    fill(0);
    textSize(height / 60);
    textAlign(CENTER);
    text("Georg Nees , Schotter by Théo HORLAVILLE | IMAC 2023", width / 2, height * 0.98);
    noFill();
    translate(width / 2 - width / 3.5 - (11 / 2) * 30 * params.taille, 0);
    for (var i = 0; i < 22; i++) {
        k += 1.5 * params.rot;
        l += 0.8 * params.deca;
        for (var j = 0; j < 11; j++) {
            push();
            x += 30;
            var randX = random(-1 * l, 1 * l);
            var randY = random(-1 * l, 1 * l);
            var randRot = random(-1 * k, 1 * k);
            translate(width / 3.5 + x * params.taille + randX, height / 8 + randY + y);
            rotate(radians(randRot));
            rect(0, 0, 30 * params.taille, 30 * params.taille);
            pop();
        }
        x = 0;
        color += 11.6;
        y += 30 * params.taille;
    }
}
function setup() {
    rectMode(CENTER);
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map