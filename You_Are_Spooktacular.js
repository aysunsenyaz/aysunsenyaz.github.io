counter = 1;
let background;
let spider;
spiderX = 50
spiderY = 150


function preload() {
    background = loadImage("https://aysunsenyaz.github.io/yeni.png");

    spider = loadImage("https://aysunsenyaz.github.io/minion-spider.png");


    spookyAudio = createAudio("https://aysunsenyaz.github.io/spooky-audio.wav");
}


function setup() {
    createCanvas(1300, 700);
    image(background, 0, 0);
    spookyAudio.autoplay(true);
}

function draw() {
    spiderX = random(1, 1000);
    spiderY = random(1, 500);

}

function mousePressed() {
    if (counter <= 5) {
        image(spider, spiderX, spiderY);
    }
    counter = counter + 1;
    print("Counter:" + counter)
}

function keyPressed() {
    textSize(45);
    textStyle("bold")
    textFont("Clarendon");
    fill("#FD7A07")
    text("YOU ARE SPOOKTACULAR", 370, 300);
}
