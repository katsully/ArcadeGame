#pragma strict

static var score : int;        // player one's score
static var score2 : int;	   // player two's score

var text : UnityEngine.UI.Text;       // Reference to the Text component for player one.
var text2 : UnityEngine.UI.Text;       // Reference to the Text component for player two.

static var time : int=15;        // The player's time.
static var time2 : int=15;        // The player's time.

var timeText : UnityEngine.UI.Text;       // Reference to the Text component.
var timeText2 : UnityEngine.UI.Text;	  

static var showTimeOne : boolean = false;
static var showTimeTwo : boolean = false;

function Awake ()
{   
    // Reset the countdown.
    timeText.enabled = false;
    timeText2.enabled = false;

    // Reset the score.
    score = 0;
    score2 = 0;
}


function Update ()
{
	Debug.Log(text);
    // Set the displayed text to be the word "Score" followed by the score value.
    text.text = "Score: " + score;
    
    // Set the displayed text to be the word "Score" followed by the score value.
    text2.text = "Score: " + score2;
}

function startTimer(marble : MarbleMovement, paddle : PaddleMovement){
	timeText.enabled = true;
	while(time > -1){
	
	timeText.text = time + "";
	yield WaitForSeconds(1.0);
	time -= 1;
	}
	timeText.enabled = false;
	marble.unFreeze();
	paddle.cantPass();
}

function startTimer2(marble : Marble2Movement, paddle : Paddle2Movement){
	timeText2.enabled = true;
	while(time2 > -1){
	
	timeText2.text = time + "";
	yield WaitForSeconds(1.0);
		time2 -= 1;
	}
	timeText2.enabled = false;
	marble.unFreeze();
	paddle.cantPass();
}