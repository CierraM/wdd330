document.querySelector('.redbox').addEventListener('click', (e) => {
    e.target.classList.toggle('go')
})

// Canvas
function createRect() {
    let canvas = document.querySelector('#canvas');
    // set up context: the place where the drawing is rendered
    let context = canvas.getContext('2d');
    context.strokeStyle = "red";
    context.fillStyle = "rgba(0, 0, 255, .5)";

    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
}

createRect()
// Drawing patterns
function drawPattern() {
    let newCanvas = document.getElementById('demo2');
    let newContext = newCanvas.getContext('2d');
    newContext.strokeStyle = "red";

    let img = new Image();
    img.src = "https://dzone.com/storage/temp/12846157-triangular-pattern.png"
    img.onload = function () {
        let pattern = newContext.createPattern(img, "repeat");
        newContext.fillStyle = pattern;
        newContext.fillRect(0, 0, 300, 200);
        newContext.strokeRect(0, 0, 300, 200);
    };
}

drawPattern();

function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 300, 200);
    context.strokeRect(0, 0, 300, 200);
}

drawGradient();

// Drawing other shapes with paths
// Layout the path. stroke the path, fill the path

function drawCircle() {
    let canvas = document.getElementById('demo4')
    let context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI * 2, true);
    context.closePath();

    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}

drawCircle();

function saveDrawing() {
    let canvas4 = document.getElementById('demo4');
    window.open(canvas4.toDataURL("image/png"));
}

let button = document.getElementById('saveButton');
button.addEventListener('click', saveDrawing, false);

window.addEventListener('load', drawImage, false)

function drawImage() {
    let canvas = document.getElementById('demo6')
    let context = canvas.getContext('2d');
    let image = document.getElementById("myImage");
    context.drawImage(image, 0, 0)
}

function getImage() {
    let canvas = document.getElementById('demo6');
    let context = canvas.getContext('2d');
    let image = document.getElementById('myImage');
    context.drawImage(image, 68, 68)
    let imageData = context.getImageData(0, 0, 1, 1);
    let pixelData = imageData.data;
    console.log(pixelData.length);
}



let mice = document.querySelectorAll("#mouseContainer img")
let mouse

for (let i = 0; i < mice.length; i++) {
    mouse = mice[i];
    mouse.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData("text/plain", this.id);
        let cat = document.getElementById("cat");
        cat.addEventListener("dragover", function (e) {
            e.preventDefault();
        })

        cat.addEventListener("drop", function (e) {
            let mouseHash = {
                mouse1: 'NOMNOMNOMNOM',
                mouse2: 'Meow',
                mouse3: 'Purrr ...'
            }
            let catHeading = document.getElementById('catHeading');
            let mouseID = e.originalEvent.dataTransfer.getData("text/plain");
            catHeading.innerHTML = mouseHash[mouseID];
            let mousey = document.getElementById('mouseID');
            mousey.parentNode.removeChild(mousey)
        })
    })
}