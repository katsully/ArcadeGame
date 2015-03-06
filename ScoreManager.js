﻿#pragma strict

static var score : int;        // The player's score.

private var text : UnityEngine.UI.Text;       // Reference to the Text component.


function Awake ()
{
    // Set up the reference.
    text = GetComponent (UnityEngine.UI.Text);

    // Reset the score.
    score = 0;
}


function Update ()
{
    // Set the displayed text to be the word "Score" followed by the score value.
    text.text = "Score: " + score;
}