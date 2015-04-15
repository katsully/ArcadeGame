#pragma strict

var Gem : GameObject;
var slowDown : boolean = false;

function Start () {
	
}

function slowDownMarble() {
	slowDown = true;
}

function Update () {
	if (rigidbody2D.position.y < -7){
		ResetBall();
	}
	if(slowDown) {
		rigidbody2D.velocity.y *= .35;
	}
}

function OnCollisionEnter2D( coll : Collision2D){
	if(coll.gameObject.tag == "Wall"){
		//rigidbody2D.velocity.x *= -1;
		var newY = rigidbody2D.velocity.y/-2;
		rigidbody2D.velocity.y = newY;
	} else if(coll.gameObject.tag == "Brick"){
		newY = rigidbody2D.velocity.y/-2;
		rigidbody2D.velocity.y = newY;	
		ScoreManager.score += 1;
		if(coll.transform.position.x == GameController.specialBrickXPosition && coll.transform.position.y == GameController.specialBrickYPosition) {;
			Instantiate(Gem, Vector3(GameController.specialBrickXPosition, GameController.specialBrickYPosition, 0), Quaternion.identity);
		}
		Destroy(coll.gameObject);
	} else if(coll.collider.tag == "Player" && slowDown) {;
		rigidbody2D.velocity.y = 10;
		slowDown = false;
		
	}
	
}

function ResetBall() {
	rigidbody2D.velocity.x = 0;
	rigidbody2D.velocity.y = 0;
	transform.position.x = -6;
	transform.position.y = -1.4;
}