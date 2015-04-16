﻿#pragma strict

var Gem : GameObject;
var player : Collider2D;
var oppPlayer : Collider2D;
var enemyHit : boolean = false;

static var slowDown : boolean = false;

function Start () {
	
}

function Update () {
	if(rigidbody2D.position.y < -7) {
		ResetBall();
	}
	if(slowDown) {
		rigidbody2D.velocity.y *= .35;
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
			Score2Manager.score += 1;
			Debug.Log(coll.transform.position.x);
			Debug.Log(coll.transform.position.y);
			if(coll.transform.position.x == GameController.specialBrickXPosition2 && coll.transform.position.y == GameController.specialBrickYPosition2) {
				Instantiate(Gem, Vector3(GameController.specialBrickXPosition2, GameController.specialBrickYPosition2, 0), Quaternion.identity);
			}
			if(coll.transform.localScale.x > 2) {
				coll.transform.localScale -= new Vector3(2F, 2F, 0);
			} else {
				Destroy(coll.gameObject);
			}
		} else {
			ScoreManager.score += 1;
			coll.transform.localScale += new Vector3(2F, 2F, 0);
		}
	} else if(coll.gameObject.tag == "Player"){
		if(coll.gameObject.name == player.name){
			enemyHit = false;
		}
		else if(coll.gameObject.name == oppPlayer.name){
			enemyHit = true;
		}
	}
	
}

function ResetBall() {
	yield WaitForSeconds(5.0);
	rigidbody2D.velocity.x = 0;
	rigidbody2D.velocity.y = 0;
	transform.position.x = 6;
	transform.position.y = -1.4;
}