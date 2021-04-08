
    nosex = 0;
    nosey = 0; 

function preload(){
    mustache = loadImage("https://i.postimg.cc/Y23QGq80/moustache-png-transparent-4.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("model initiated");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x - 22;
        nosey = results[0].pose.nose.y + 10;
        console.log("nose x = " +results[0].pose.nose.x);
        console.log("nose y = " +results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, nosex, nosey, 50, 35);
}

function Snapshot(){
    save("My_filter_image.png");
}