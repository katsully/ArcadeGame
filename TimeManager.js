#pragma strict

static var time : int=15;        // The player's time.

private var text : UnityEngine.UI.Text;       // Reference to the Text component.

static var showTime : boolean = false;

var marble : MarbleMovement;
var paddle : PaddleMovement;

var startTime;
var timer1:int;

function Start () {
	// Set up the reference.
    text = GetComponent (UnityEngine.UI.Text);

    // Reset the score.
    text.enabled = false;
}

function Update () {

}

function startTimer(){
	text.enabled = true;
	while(time > -1){
	
	text.text = time + "";
	yield WaitForSeconds(1.0);
	time -= 1;
	}
	text.enabled = false;
	marble.unFreeze();
	paddle.cantPass();
}