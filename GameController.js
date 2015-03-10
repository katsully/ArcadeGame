#pragma strict

var brick : GameObject;

static var specialBrickXPosition : float;
static var specialBrickYPosition : float;

function Start () {

	// create a group of bricks 20 x 5
	for(var i: int=0; i < 20; i++) {
		if(i == 10 || i == 9){
			continue;
		}
		for(var j: int=0; j < 5; j++) {
			if(j % 2 == 0) {
				Instantiate(brick, Vector3(i-9.5, j*.5+2, 0), Quaternion.identity);
			} else {
				Instantiate(brick, Vector3(i-9, j*.5+2, 0), Quaternion.identity);
			}
		}
	}
	specialBrickXPosition = 3 - 9.5;
	specialBrickYPosition = 0 * .5 + 2;

}

function Update () {

}