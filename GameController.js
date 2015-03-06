#pragma strict

var brick : GameObject;

function Start () {

	// create a group of bricks 20 x 5
	for(var i: int=0; i < 20; i++) {
		for(var j: int=0; j < 5; j++) {
			if(j % 2 == 0) {
				Instantiate(brick, Vector3(i-9.5, j*.5+2, 0), Quaternion.identity);
			} else {
				Instantiate(brick, Vector3(i-9, j*.5+2, 0), Quaternion.identity);
			}
		}
	}
	

}

function Update () {

}