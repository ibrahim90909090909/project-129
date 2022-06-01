song1 = "";
song2 = "";
scorerightWrist="";
rightWristX="";
rightWristY="";
scoreleftWrist="";
leftWristX="";
leftWristY="";

function preload() {
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");

}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500 );
    
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500 );
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
} if (rightWristY > 100 && rightWristY <= 200) {
    document.getElementById("song 1").innerHTML = "Playing song 1";
    song.rate(1);
} else if (leftWristY > 400 && leftWristY <= 500) {
    document.getElementById("song2").innerHTML = "Playing song 2";
    song.rate(1);
}

function modelLoaded(){
console.log('Posenet Is Initialized');

}
function gotPoses(results){
if(results.length > 0){
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX + " leftWristY = "+ leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + " rightWristY = "+ rightWristY);
}
}
function isPlaying(){

}