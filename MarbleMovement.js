#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter2D( coll : Collision2D){
	if(coll.gameObject.tag == "Wall"){
		rigidbody2D.velocity.x *= -1;
	} else if(coll.gameObject.tag == "Brick"){
		//rigidbody2D.velocity.y -= 5;
		GameController.Score();
		Destroy(coll.gameObject);
	}
}