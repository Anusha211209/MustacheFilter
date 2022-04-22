x = 0;
y = 0;

function preload(){
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        x = results[0].pose.nose.x -25;
        y = results[0].pose.nose.y;
        console.log("nose x = " + x);
        console.log("nose y = " + y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, x, y, 50, 30);
}

function take_snapshot(){
    save('myImage.png');
}
