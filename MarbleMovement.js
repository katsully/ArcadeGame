#pragma strict

var Gem : GameObject;
var player : Collider2D;
var oppPlayer : Collider2D;
var enemyHit : boolean = false;

static var freeze : boolean = false;


function Start () {
	
}

function Update () {
	if (rigidbody2D.position.y < -7){
		ResetBall();
	}
	if(freeze) {
		rigidbody2D.velocity.y = 0;
		rigidbody2D.gravityScale = 0;
	}
}

function OnCollisionEnter2D( coll : Collision2D){
	if(coll.gameObject.tag == "Wall"){
		var newY = rigidbody2D.velocity.y/-2;
		rigidbody2D.velocity.y = newY;
	} else if(coll.gameObject.tag == "Brick"){
		newY = rigidbody2D.velocity.y/2;
		if (newY > 0){
			newY *= -1;
		}
		rigidbody2D.velocity.y = newY;
		if(!enemyHit) {
			ScoreManager.score += 1;
			if(coll.transform.position.x == GameController.specialBrickXPosition && coll.transform.position.y == GameController.specialBrickYPosition) {
				Instantiate(Gem, Vector3(GameController.specialBrickXPosition, GameController.specialBrickYPosition, 0), Quaternion.identity);
			}
			if(coll.transform.localScale.x > 2) {
				coll.transform.localScale -= new Vector3(2F, 2F, 0);
			} else {
				Destroy(coll.gameObject);
			}
		} else {
			Score2Manager.score += 1;
			coll.transform.localScale += new Vector3(2F, 2F, 0);
		}
	} else if(coll.collider.tag == "Player") {
		if(coll.gameObject.name == player.name){
			enemyHit = false;
			PaddleMovement.canPass = false;
			if(freeze){
				rigidbody2D.velocity.y = 10;
				freeze = false;
			}
		}
		else if(coll.gameObject.name == oppPlayer.name){
			enemyHit = true;
		}
	}
	
}

function ResetBall() {
	yield WaitForSeconds(3.0);
	rigidbody2D.velocity.x = 0;
	rigidbody2D.velocity.y = 0;
	transform.position.x = -6;
	transform.position.y = -1.4;
	freeze = false;
}