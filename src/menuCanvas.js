let canvas = document.getElementById('menu-canvas');

canvas.width = 800;
canvas.height = 300;

let ctx = canvas.getContext('2d');

// // ctx.fillRect(x, y, width, height);
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillRect(400, 100, 100, 100);
// ctx.fillStyle = "rgba(255, 0, 0, 0.3)"; //fills style of whatever comes after
// ctx.fillRect(300, 300, 100, 100);

// console.log(canvas)

//Line

// ctx.beginPath();
// // ctx.moveTo(x,y);
// ctx.moveTo(150, 300); //starting coord for line a point;
// ctx.lineTo(300, 50); //invisible untill stroke method called;
// ctx.lineTo(450, 300);
// ctx.strokeStyle = "blue";
// ctx.stroke();

//Circles/Arcs

// ctx.arc(x, y, radius, startAngle, endAngle, DrawCounterClockwise
// ctx.beginPath(); //this seperates from any previous path that started
// ctx.arc(300, 300, 50, 0, Math.PI * 2, false); //Draws Circle
// ctx.strokeStyle = "red";
// ctx.stroke();

// for (let i = 0; i < 100; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     ctx.beginPath(); //this seperates from any previous path that started
//     ctx.arc(x, y, 25, 0, Math.PI * 2, false); //Draws Circle
//     ctx.strokeStyle = "red";
//     ctx.stroke();
// }
let mouse = {
    x: undefined,
    y: undefined,
}

const maxRadius = 15;
// const minRadius = 4;

const colorsArray = [
    '#090909',
    // '#F5DAD1',
    '#AF1313',
    // '#A7A3B4',
    '#282F3F',
]

window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    })


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorsArray[Math.floor(Math.random() * colorsArray.length)]

    this.draw = function () {
        // ctx.clearRect(0, 0, innerWidth, innerHeight) //Clears canvas whenever we want to clear page
        ctx.beginPath(); //this seperates from any previous path that started
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); //Draws Circle
        // ctx.strokeStyle = "red";
        // ctx.stroke();
        // ctx.fillStyle = colorsArray[Math.floor(Math.random() * colorsArray.length)] // makes colors keep changing everytime updates
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    this.update = function () {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //when mouse interacts with circles
        if (mouse.x - this.x < 30 && mouse.x - this.x > -30 && mouse.y - this.y < 30 && mouse.y - this.y > -30) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

// circle.draw


// let x = Math.random() * window.innerWidth;
// let y = Math.random() * window.innerWidth;
// let dx = (Math.random() - 0.5) * 10;
// let dy = (Math.random() - 0.5) * 10;
// let radius = 30;

// let circle = new Circle(200, 200, 3, 3, 30);

let circleArray = [];

for (let i = 0; i < 500; i++) {
    // let radius = 30; // move to top so some circles dont get sstuck and can use;
    let radius = Math.random() * 3 + 1;
    let x = Math.random() * (canvas.width - radius * 2) + radius; //multiply by diameter to remove circles spawning at edge of screen
    let y = Math.random() * (canvas.height - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray)

// function animate() {
//     requestAnimationFrame(animate); //takes a function as argument that creates a loop for us
//     // console.log('whatever'); //test to make sure loop working
//     ctx.clearRect(0, 0, innerWidth, innerHeight) //Clears canvas whenever we want to clear page
//     circle.update();
//     ctx.beginPath(); //this seperates from any previous path that started
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false); //Draws Circle
//     ctx.strokeStyle = "red";
//     ctx.stroke();


// }

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();