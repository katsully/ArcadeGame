#pragma strict

var brick : GameObject;

var mainCam : Camera;

var rightWall : BoxCollider2D;
var leftWall : BoxCollider2D;
var topWall : BoxCollider2D;

static var specialBrickXPosition : float;
static var specialBrickYPosition : float;
static var specialBrickXPosition2 : float;
static var specialBrickYPosition2 : float;

function Start () {

	// create a group of bricks 20 x 5
	var offsetx : float = -9.5;
	for(var i: int=0; i < 24; i++) {
		if(i == 11 || i == 12){
			continue;
		}
		if(i > 11) {
			offsetx = -7;
		}
		for(var j: int=0; j < 5; j++) {
			if(j % 2 == 0) {
				Instantiate(brick, Vector3(i*.7+offsetx, j*.4+2, 0), Quaternion.identity);
			} else {
				Instantiate(brick, Vector3(i*.7+offsetx-.5, j*.4+2, 0), Quaternion.identity);
			}
		}
	}
	specialBrickXPosition = 4*.7-9.5;
	specialBrickYPosition = 0 * .4 + 2;
	
	topWall.size = new Vector2(mainCam.ScreenToWorldPoint (new Vector3(Screen.width * 2f, 0f, 0f)).x, 1f);
	topWall.center = new Vector2(0f, mainCam.ScreenToWorldPoint(new Vector3(0f,Screen.height,0f)).y + 0.5f); 
	
	leftWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint (new Vector3(0f, Screen.height * 2f, 0f)).y);
	leftWall.center = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(0f,0f,0f)).x - 0.5f, 0f); 
	
	rightWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint (new Vector3(0f, Screen.height * 2f, 0f)).y);
	rightWall.center = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width,0f,0f)).x + 0.5f, 0f);  

}

function Update () {
	
}

function addGem(){
	specialBrickXPosition2 = 18*.7 - 7;
	specialBrickYPosition2 = 1 * .4 + 2;
}