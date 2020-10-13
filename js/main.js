function getTime()
{
	var startDay = document.getElementById('startDay').value;
	var startMonth = document.getElementById("startMonth").value;
	startMonth--;
	var startYear = document.getElementById('startYear').value;
	return new Date(startYear ,startMonth, startDay); 
}
function daysCalculate()
{
    const MILLISECOND_PER_DAY = 1000 * 60 * 60 * 24; //milliseconds * seconds * minutes * hour = 1 day

    let startDate = getTime();
    var today = new Date();

    if(today < startDate){
        alert("Please chose the right date!");
        return false;
    }

	return (today - startDate) / MILLISECOND_PER_DAY;//get how many days have passed
}
function Calculate()
{
    const DAYS_PER_YEAR = 365;
    const DAYS_PER_MONTH = 30;
    
    var days = daysCalculate();
    
	//change the number of days to years-months-days form
	var trueYear = days / DAYS_PER_YEAR;
    var remainMonth = days % DAYS_PER_YEAR;
    
	var trueMonth = remainMonth / DAYS_PER_MONTH;
    var trueDay = remainMonth % DAYS_PER_MONTH;
    
	var dateMessage = parseInt(trueYear) + " years " + parseInt(trueMonth) + " months " + parseInt(trueDay) + " days ";
	return dateMessage;
}
function displayResult()
{
    let dateResult = Calculate();
	document.getElementById('result').innerHTML = dateResult;
	let show = document.getElementById('display-screen');
	show.style.display = 'block';
	let hidden = document.getElementById('home-screen');
	hidden.style.display = 'none';

}
function changeDisplayForm()
{
	var days = Math.round(daysCalculate());
	var dateResult = Calculate();
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

