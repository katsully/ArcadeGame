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
	specialBrickXPosition2 = 14 - 9.5;
	specialBrickYPosition2 = 0 * .5 + 2;
	
	topWall.size = new Vector2(mainCam.ScreenToWorldPoint (new Vector3(Screen.width * 2f, 0f, 0f)).x, 1f);
	topWall.center = new Vector2(0f, mainCam.ScreenToWorldPoint(new Vector3(0f,Screen.height,0f)).y + 0.5f); 
	
	leftWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint (new Vector3(0f, Screen.height * 2f, 0f)).y);
	leftWall.center = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(0f,0f,0f)).x - 0.5f, 0f); 
	
	rightWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint (new Vector3(0f, Screen.height * 2f, 0f)).y);
	rightWall.center = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width,0f,0f)).x + 0.5f, 0f);  

}

function Update () {
	
}