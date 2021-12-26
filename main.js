noseX = 0;
noseY = 0;

function preload(){
lip_shade = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video ,0,0,300,300);
    image(lip_shade,noseX -20, noseY +15,40,25);
}
function take_snapshot(){
    save('garima.png');
}
function gotPoses(results){
    if(results.length>0)
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(results);
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }

}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
