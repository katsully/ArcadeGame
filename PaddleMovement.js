#pragma strict

var moveLeft : KeyCode;
var moveRight : KeyCode;

var speed : float = 15;

function Update () {
	if(Input.GetKey(moveRight) && rigidbody2D.transform.position.x < -1.5){
		rigidbody2D.velocity.x = speed;
	} else if(Input.GetKey(moveLeft) && rigidbody2D.transform.position.x > -9){
		rigidbody2D.velocity.x = speed * -1;
	} else {
		rigidbody2D.velocity.x = 0;
	}
}

function OnCollisionEnter2D( coll : Collision2D){
	if(coll.gameObject.tag == "Gem"){
		Destroy(coll.gameObject);
	} 
}