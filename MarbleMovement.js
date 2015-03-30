#pragma strict

var Gem : GameObject;

function Start () {

}

function Update () {
	if (rigidbody2D.position.y < -7){
		ResetBall();
	}
}

function OnCollisionEnter2D( coll : Collision2D){
	if(coll.gameObject.tag == "Wall"){
		//rigidbody2D.velocity.x *= -1;
	} else if(coll.gameObject.tag == "Brick"){
		var newY = rigidbody2D.velocity.y/-2;
		var intNewY : int = newY;
		//rigidbody2D.velocity.y += intNewY;
		ScoreManager.score += 1;
		if(coll.transform.position.x == GameController.specialBrickXPosition && coll.transform.position.y == GameController.specialBrickYPosition) {
			Debug.Log("here");
			Instantiate(Gem, Vector3(GameController.specialBrickXPosition, GameController.specialBrickYPosition, 0), Quaternion.identity);
		}
		Destroy(coll.gameObject);
	} else if(coll.collider.tag == "Player") {
		rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + coll.collider.rigidbody2D.velocity.y/3;
	}
}

function ResetBall() {
	rigidbody2D.velocity.x = 0;
	rigidbody2D.velocity.y = 0;
	transform.position.x = -6;
	transform.position.y = -1.4;
}