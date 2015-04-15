#pragma strict

var Gem : GameObject;
var oppPlayer : Collider2D;
var enemyHit : boolean = false;

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
		if(!enemyHit) {
			Score2Manager.score += 1;
			if(coll.transform.position.x == GameController.specialBrickXPosition && coll.transform.position.y == GameController.specialBrickYPosition) {
				Instantiate(Gem, Vector3(GameController.specialBrickXPosition, GameController.specialBrickYPosition, 0), Quaternion.identity);
			}
			Destroy(coll.gameObject);
		} else {
			Debug.Log("YEahhhh");
			coll.transform.localScale.x = 2;
			coll.transform.localScale.y = 2;
		}
	} else if(coll.gameObject.name == oppPlayer.name){
		enemyHit = true;
	}
	
}

function ResetBall() {
	rigidbody2D.velocity.x = 0;
	rigidbody2D.velocity.y = 0;
	transform.position.x = 6;
	transform.position.y = -1.4;
}