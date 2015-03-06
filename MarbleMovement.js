#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter2D( coll : Collision2D){
	if(coll.gameObject.tag == "Wall"){
		rigidbody2D.velocity.x *= -1;
	} else if(coll.gameObject.tag == "Brick"){
		Debug.Log(rigidbody2D.velocity.y);
		rigidbody2D.velocity.y += rigidbody2D.velocity.y/-2;
		ScoreManager.score += 1;
		Destroy(coll.gameObject);
	}
}