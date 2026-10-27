//
//-------------------------------------------------------------------------------------------
//                                 B R E A K P O I N T
//-------------------------------------------------------------------------------------------
//

// Objective: Create a backgrond full of little squares (pixels?) and the squares are black 
// but the cursor hovers over the squares they become brighter.

let w = document.body.clientWidth;
let h = w / 1920 * 1080; //16:9 ratio

// this determines the size of the squares, the grid, and the distance at which the squares will be affected by the cursor
let SquareSize = 25;
let gridX = 20;
let gridY = 20;
let maxDistance = 100;

function setup(){
	createCanvas(w, h);
	stroke('#0e0f0f');
	noCursor();
}

function draw(){
	background('#000000');

	for (let x = 0; x <= w; x += gridX) {
		for (let y = 0; y <= h; y += gridY) {
            let random = 0;
            let offsetSize = 0;
            let distance = dist(mouseX, mouseY, x, y);

            fill('#000000');

            if (distance < maxDistance) {
                random = map(distance,maxDistance,0,0,30);
                //offsetSize = map(distance, maxDistance, 0, 0, -15);
                fill(map(distance,maxDistance,0,0, 255));
            }
            square(x, y, SquareSize);   
		}
	}
}