﻿#pragma strict

var moveLeft : KeyCode;
var moveRight : KeyCode;
var marble : Marble2Movement;
var wall : GameObject;
var scoreTime : ScoreTimes;

var speed : float = 10;
static var leftCanPass : boolean = false;

function Update () {
	if(Input.GetKey(moveRight) && rigidbody2D.transform.position.x < 9.5){
		rigidbody2D.velocity.x = speed;
	} else if(Input.GetKey(moveLeft) && (rigidbody2D.transform.position.x > 1.6 || leftCanPass)){
		rigidbody2D.velocity.x = speed * -1;
	} else {
		rigidbody2D.velocity.x = 0;
	}
}

function OnCollisionEnter2D( coll : Collision2D){
	if(coll.gameObject.tag == "Gem"){
		Destroy(coll.gameObject);
		leftCanPass = true;
		audio.pitch = Random.Range(0.8f, 1.2f);
		audio.Play();
		marble.rightFreeze = true;
		scoreTime.startTimer2(marble, this);
		GetComponent(SpriteRenderer).color = new Color(.2f,1f,1f,1f);
		wall.GetComponent(SpriteRenderer).color = new Color(.2f,1f,1f,1f);
	} 
}

function cantPass(){
	leftCanPass = false;
	GetComponent(SpriteRenderer).color = new Color(1f,0f,.85f,1f);
	wall.GetComponent(SpriteRenderer).color = new Color(1f,1f,1f,1f);
}