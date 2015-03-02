#pragma strict

var select : KeyCode;

function Start () {

}

function Update () {

	if(Input.GetKey(select)){
		Application.LoadLevel("Introduction");
	}

}