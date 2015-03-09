#pragma strict

function Start () {

}

function Update () {
	if(rigidbody2D.position.y < -7){
		Application.LoadLevel("End");
	}
}

function OnCollisionEnter2D( coll : Collision2D){
	if(coll.gameObject.tag == "Wall"){
		rigidbody2D.velocity.x *= -1;
	} else if(coll.gameObject.tag == "Brick"){
		rigidbody2D.velocity.y += rigidbody2D.velocity.y/-2;
		Score2Manager.score += 1;
		Destroy(coll.gameObject);
	}
}