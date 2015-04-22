#pragma strict

var moveLeft : KeyCode;
var moveRight : KeyCode;
var marble : MarbleMovement;
var time : TimeManager;

// might need this
// var audio : AudioSource;
// audio.GetComponent(AudioSource);

var speed : float = 10;
static var canPass : boolean = false;

function Update () {
	if(Input.GetKey(moveRight) && (rigidbody2D.transform.position.x < -2.1 || canPass)){
		rigidbody2D.velocity.x = speed;
	} else if(Input.GetKey(moveLeft) && rigidbody2D.transform.position.x > -9){
		rigidbody2D.velocity.x = speed * - 1;
	} else {
		rigidbody2D.velocity.x = 0;
	}
}

function OnCollisionEnter2D( coll : Collision2D){
	if(coll.gameObject.tag == "Gem"){
		Destroy(coll.gameObject);
		canPass = true;
		audio.pitch = Random.Range(0.8f, 1.2f);
		audio.Play();
		marble.freeze = true;
		time.startTimer();
		GetComponent(SpriteRenderer).color = new Color(.2f,1f,1f,1f);
	} 
}
