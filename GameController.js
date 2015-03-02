#pragma strict

var brick : GameObject;

static var score : int = 0;

static function Score(){
	score += 1;
}

function Start () {

	// create a group of bricks 20 x 5
	for(var i: int=0; i < 20; i++) {
		for(var j: int=0; j < 5; j++) {
			Instantiate(brick, Vector3(i-9.5, j*.5+2, 0), Quaternion.identity);
		}
	}
	

}

function Update () {

}