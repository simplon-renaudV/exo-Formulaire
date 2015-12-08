document.getElementById('bouton').addEventListener('click', affichMessages, false);

var login = document.getElementById('login');
var mail = document.getElementById('mail');
var pwd = document.getElementById('password');
var cPwd = document.getElementById('cPassword');
var check = document.getElementById('check');
var url = document.getElementById('site');

var tabChamps = [login, mail, pwd, cPwd, check, url];

var strMessage = '';

var divMessage = document.createElement('div');

for (var i=0; i<tabChamps.length; i++)
{
	tabChamps[i].addEventListener('change', verifChamps, false);
	tabChamps[i].addEventListener('invalid', affichErreur, false);
}

function verifChamps(e)
{
	e.target.checkValidity();
	
	if (pwd != cPwd)
	{
		strMessage += "Les mots de passe ne correspondent pas <br>";
	}	
}

function affichErreur(e)
{
	strMessage += e.target.name + " : " + e.target.validationMessage + "<br>"; 
	divMessage.innerHTML = strMessage;
}

function affichMessages(e)
{
	document.body.appendChild(divMessage);
	strMessage='';
}