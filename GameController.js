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
	var offsetx : int = -8.5;
	for(var i: int=0; i < 22; i++) {
		if(i == 10 || i == 11){
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
	specialBrickXPosition = 3*.7-8;
	specialBrickYPosition = 1 * .4 + 2;
	specialBrickXPosition2 = 18*.7 - 7;
	
	topWall.size = new Vector2(mainCam.ScreenToWorldPoint (new Vector3(Screen.width * 2f, 0f, 0f)).x, 1f);
	topWall.center = new Vector2(0f, mainCam.ScreenToWorldPoint(new Vector3(0f,Screen.height,0f)).y + 0.5f); 
	
	leftWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint (new Vector3(0f, Screen.height * 2f, 0f)).y);
	leftWall.center = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(0f,0f,0f)).x - 0.5f, 0f); 
	
	rightWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint (new Vector3(0f, Screen.height * 2f, 0f)).y);
	rightWall.center = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width,0f,0f)).x + 0.5f, 0f);  

}

function Update () {
	
}