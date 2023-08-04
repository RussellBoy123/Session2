var splashimg
var gameState = "wait"
var playbutton, soundonbutton, soundoffbutton

function preload() {
    splashimg = loadImage("Rumble_runner.gif")


}

function setup() 
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("play.png")
    playbutton.position(width / 2 - 200, height - height / 5)
    playbutton.size(150, 150)

    
    soundonbutton = createImg("soundon.png")
    soundonbutton.position(playbutton.x+ 200, height - height / 5)
    soundonbutton.size(150, 150)

    soundoffbutton = createImg("sounoff.png")
    soundoffbutton.position(width / 2 - 200, height - height / 5)
    soundoffbutton.size(150, 150)



function draw() {

    if (gameState == "wait") {
        background(plashimg)


    }
}