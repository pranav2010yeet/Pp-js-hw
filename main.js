
function preload(){
    
}

function setup(){
color=""
    canvas=createCanvas( 500,500)
    canvas.position(149, 200)
    video=createCapture(VIDEO)
    video.hide()

}

function draw(){
image(video,0,0,500,500)

rect(30, 20, 55, 55);
rect(4, 80, 55, 55, 20, 15, 10, 5);
rect(90, 80, 55, 55, 20, 15, 10, 5);

tint(color)
}

function take_snapshot(){
    save("pranav.png")
}

circle(30, 30, 20);

