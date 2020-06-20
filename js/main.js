function getTime()
{
	var startDay = document.getElementById('startDay').value;
	var startMonth = document.getElementById("startMonth").value;
	startMonth--;
	var startYear = document.getElementById('startYear').value;
	var startDate = new Date(startYear ,startMonth, startDay);  
	return startDate;
}
function daysCalculate()
{
	var startDate = getTime();
	var oneDay = 1000 * 60 * 60 * 24; //miliseconds * seconds * minutes * hour = 1 day
	var today = new Date();
	var days = (today - startDate) / oneDay;//how many days have passed
	return days;
}
function Calculate()
{
	var days = daysCalculate();
	if(days < 0)
	{
		alert("please chose the right date!");
		return false;
	}
	//change the number of days to years-months-days form
	var trueYear = days / 365;
	var milisecondMonth = days % 365;
	var trueMonth = milisecondMonth / 30;
	var trueDay = milisecondMonth % 30;
	var dateResult = parseInt(trueYear) + " years " + parseInt(trueMonth) + " months " + parseInt(trueDay) + " days "; 
	return dateResult;
}
function displayResult()
{
	var show = document.getElementById('wrapped-display');
	show.style.display = 'block';
	var hidden = document.getElementById('wrapped-index');
	hidden.style.display = 'none';
	var dateResult = Calculate();
	document.getElementById('result').innerHTML = dateResult;
}
function changeDisplayForm()
{
	var days = daysCalculate();
	days = Math.round(days);
	var dateResult  = Calculate();
	var result = document.getElementById("result");
	var text = result.innerHTML;
	if(text == dateResult)
	{
		result.innerHTML = days + " days";
	}
	else
	{
		result.innerHTML = dateResult;
	}
}

