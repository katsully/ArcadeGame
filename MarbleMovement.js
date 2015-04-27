#pragma strict

var Gem : GameObject;
var player : Collider2D;
var oppPlayer : Collider2D;
var enemyHit : boolean = false;
var otherPaddle : Paddle2Movement;

static var freeze : boolean = false;

var gameController : GameController;


function Start () {
	rigidbody2D.velocity.y = -5;
}

function Update () {
	if (rigidbody2D.position.y < -7){
		ResetBall();
	}
	if(freeze) {
		rigidbody2D.velocity.y = 0;
		rigidbody2D.velocity.x = 0;
	}
}

function OnCollisionEnter2D( coll : Collision2D){
	if(coll.gameObject.tag == "Wall"){
		if (rigidbody2D.velocity.y < 0) {
			rigidbody2D.velocity.y = -3;
		} else {
			rigidbody2D.velocity.y = 4;
		}
	} else if(coll.gameObject.tag == "Brick"){
		rigidbody2D.velocity.y = -5;
		var currColor = coll.gameObject.GetComponent(SpriteRenderer).color;
		if(!enemyHit) {
			if(coll.transform.position.x == GameController.specialBrickXPosition && coll.transform.position.y == GameController.specialBrickYPosition) {
				Instantiate(Gem, Vector3(GameController.specialBrickXPosition, GameController.specialBrickYPosition, 0), Quaternion.identity);
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
				ScoreTimes.score += 1;
			}
		} else if(otherPaddle.leftCanPass){
			ScoreTimes.score2 += 1;
			if(currColor == Color(1.0f, 1.0f, 1.0f, 1.0f)) {
				coll.gameObject.GetComponent(SpriteRenderer).color = new Color(.75f, .5f, .5f, 1f);
			} else if(currColor == Color(.75f, .5f, .5f, 1f)) {
				coll.gameObject.GetComponent(SpriteRenderer).color = new Color(.5f, .12f, .15f, 1f);
			}
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
	yield WaitForSeconds(2.0);
	rigidbody2D.velocity.x = 0;
	rigidbody2D.velocity.y = -5;
	transform.position.x = -6;
	transform.position.y = -1.4;
}

function unFreeze() {
	freeze = false;
	gameController.addGem();
	rigidbody2D.velocity.y = -5;
}

function stop(){
	rigidbody2D.transform.position.y = 0;
	freeze = true;
}