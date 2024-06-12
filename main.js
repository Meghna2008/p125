
difference =0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 400);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#8B0000');

    document.getElementById("font-size").innerHTML = "Width and height of the font will be = " +difference+" px"
    fill('#F900943');
    textSize(difference)
    text("Meghna", 100, 100);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoses(results)
{
    if (results.length>0)
    {
        


        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("rightWristX  =" +rightWristX +" leftWristX = "+ leftWristX + "difference = "+ difference);
    }
}