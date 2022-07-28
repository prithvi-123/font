function setup( ){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 550);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background("#969A97");

    document.getElementById("square_side").innerHTML = "Font size the text is  =" + difference+"px";
    fill("#F90093");
    stroke('#F90093');
    textSize(difference);
    text("prithvi",30,100);
    
}




function modelLoaded(){
    console.log('PoseNet Is Intialized !');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}



difference = 0;
rightWristX = 0;
leftWristX = 0;


function gotPoses(results)
{
    if(results.length > 0)
    {
        console,log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWrist = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);

    }
}






















