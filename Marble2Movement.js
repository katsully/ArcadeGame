#pragma strict

var Gem : GameObject;
var player : Collider2D;
var oppPlayer : Collider2D;
var enemyHit : boolean = false;
var otherPaddle : PaddleMovement;

static var rightFreeze : boolean = false;

function Start () {
	rigidbody2D.velocity.y = -5;	
}

function Update () {
	if(rigidbody2D.position.y < -7) {
		ResetBall();
	}
	if(rightFreeze) {
		rigidbody2D.velocity.y = 0;
		rigidbody2D.velocity.x = 0;
	}
}

function OnCollisionEnter2D( coll : Collision2D){
	if(coll.gameObject.tag == "Wall"){
		rigidbody2D.velocity.y = -3;
	} else if(coll.gameObject.tag == "Brick"){
		rigidbody2D.velocity.y = -5;
		var currColor = coll.gameObject.GetComponent(SpriteRenderer).color;
		if(!enemyHit) {
			if(coll.transform.position.x == GameController.specialBrickXPosition2 && coll.transform.position.y == GameController.specialBrickYPosition2) {
				Instantiate(Gem, Vector3(GameController.specialBrickXPosition2, GameController.specialBrickYPosition, 0), Quaternion.identity);
			}
			if(currColor != Color(1.0f, 1.0f, 1.0f, 1.0f)) {
				if(currColor == Color(.5f, .12f, .15f, 1f)) {
					coll.gameObject.GetComponent(SpriteRenderer).color = Color(.5f, 5.0f, 5.0f);
				} else if(currColor == Color(.5f, 5f, 5f, 1f)) {
					coll.gameObject.GetComponent(SpriteRenderer).color = Color(1f, 1f, 1.0f);
				} else if(currColor == Color(.75f, .5f, .5f, 1f)) {
					coll.gameObject.GetComponent(SpriteRenderer).color = Color(1f, 1f, 1.0f);
				}
			} else {
				Destroy(coll.gameObject);
				Score2Manager.score += 1;
			}
		} else if(otherPaddle.canPass){
			if(currColor == Color(1.0f, 1.0f, 1.0f, 1.0f)) {
				coll.gameObject.GetComponent(SpriteRenderer).color = new Color(.75f, .5f, .5f, 1f);
			} else if(currColor == Color(.75f, .5f, .5f, 1f)) {
				coll.gameObject.GetComponent(SpriteRenderer).color = new Color(.5f, .12f, .15f, 1f);
			}
		}
	} else if(coll.gameObject.tag == "Player"){
		if(coll.gameObject.name == player.name){
			enemyHit = false;
			Paddle2Movement.leftCanPass = false;
			if(rightFreeze){
				rigidbody2D.velocity.y = 10;
				rightFreeze = false;
			}
		}
		else if(coll.gameObject.name == oppPlayer.name){
			enemyHit = true;
		}
	}
	
}

function ResetBall() {
	yield WaitForSeconds(5.0);
	rigidbody2D.velocity.x = 0;
	rigidbody2D.velocity.y = -5;
	transform.position.x = 6;
	transform.position.y = -1.4;
}

function unFreeze() {
	rightFreeze = false;
	rigidbody2D.velocity.y = -5;
}

function stop(){
	rigidbody2D.transform.position.y = 0;
	rightFreeze = true;
}