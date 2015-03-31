#pragma strict

var Gem : GameObject;

function Start () {

}

function Update () {
	if(rigidbody2D.position.y < -7) {
		ResetBall();
	}
	
}

function OnCollisionEnter2D( coll : Collision2D){
	if(coll.gameObject.tag == "Wall"){
		var newY = rigidbody2D.velocity.y/-2;
		rigidbody2D.velocity.y = newY;
	} else if(coll.gameObject.tag == "Brick"){
		newY = rigidbody2D.velocity.y/-2;
		rigidbody2D.velocity.y = newY;
		Score2Manager.score += 1;
		if(coll.transform.position.x == GameController.specialBrickXPosition && coll.transform.position.y == GameController.specialBrickYPosition) {
			Instantiate(Gem, Vector3(GameController.specialBrickXPosition, GameController.specialBrickYPosition, 0), Quaternion.identity);
		}
		Destroy(coll.gameObject);
	}
}

function ResetBall() {
	rigidbody2D.velocity.x = 0;
	rigidbody2D.velocity.y = 0;
	transform.position.x = 6;
	transform.position.y = -1.4;
}