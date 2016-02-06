	var Days1 = 0;	
	var Hours1 = 0;
	var Minutes1 = 0;
	var Seconds1 = 0;
	var Days2 = 0;
	var Hours2 = 0;
	var Minutes2 = 0;
	var Seconds2 = 0;
	var targetValueObs = 0;
	var stopWatch1Val = 0;
	var pauseStopWatch1Now;
	var stopWatch2Val = targetValueObs;
	var pauseStopWatch2Now;
	function targetChange()
	{
		var target = document.getElementById("Target").value;
		if(target < 0)
		{
			alert("Targeted value is Negative. Please enter a positive number to begin");
			return;
		}
		targetValueObs = target;
		timeStopWatches2(target);
		init1();
		init2();
		reset1();
		reset2();
	}
	function resetStopWatch1Value()
	{
		clearInterval(pauseStopWatch1Now);
		Days1 = 0;
		Hours1 = 0;
		Minutes1 = 0;
		Seconds1 = 0;
		stopWatch1Val = 0;
	}
	function resetStopWatch2Value()
	{
		clearInterval(pauseStopWatch2Now);
		timeStopWatches2(targetValueObs);
		stopWatch2Val = targetValueObs;
	}
	function init1()
	{
		document.getElementById("Days1").value = "" + Days1 + "";
		document.getElementById("Hours1").value = "" + Hours1 + "";
		document.getElementById("Minutes1").value = "" + Minutes1 + "";
		document.getElementById("Seconds1").value = "" + Seconds1 + "";
	}
	function init2()
	{
		document.getElementById("Days2").value = "" + Days2 + "";
		document.getElementById("Hours2").value = "" + Hours2 + "";
		document.getElementById("Minutes2").value = "" + Minutes2 + "";
		document.getElementById("Seconds2").value = "" + Seconds2 + "";
	}
	function updateStopWatch1()
	{
		if(stopWatch1Val == targetValueObs)
		{
			disableOnStopWatch1();
			clearInterval(pauseStopWatch1Now);
		}
		else
		{
			stopWatch1Val = stopWatch1Val + 1;
			Seconds1 = Seconds1 + 1;
			if(Seconds1 == 60)
			{
				Seconds1 = 0;
				Minutes1 = Minutes1 + 1;
				if(Minutes1 == 60)
				{
					Minutes1 = 0;
					Hours1 = Hours1 + 1;
					if(Hours1 == 24)
					{
						Hours1 = 0;
						Days1 = Days1 + 1;
					}
				}
			}
			init1();
		}
	}
	function startStopWatch1()
	{	
		pauseStopWatch1Now = setInterval(updateStopWatch1,1000);
		document.getElementById("Start1").disabled = true;
	}
	function resetStopWatch1()
	{
		reset1();
	}
	function pauseStopWatch1()
	{
		clearInterval(pauseStopWatch1Now);
		document.getElementById("Start1").disabled = false;
	}
	function reset1()
	{
		document.getElementById("Start1").disabled = false;
		document.getElementById("Pause1").disabled = false;
		resetStopWatch1Value();
		init1();
	}
	function disableOnStopWatch1()
	{
		document.getElementById("Start1").disabled = true;
		document.getElementById("Pause1").disabled = true;
	}
	function updateStopWatch2()
	{
		if(stopWatch2Val == 0)
		{
			disableOnStopWatch2();
			clearInterval(pauseStopWatch2Now);
		}
		else
		{
			stopWatch2Val = stopWatch2Val - 1;
			timeStopWatches2(stopWatch2Val);
			init2();
		}
	}
	function startStopWatch2()
	{
		pauseStopWatch2Now = setInterval(updateStopWatch2,1000);
		document.getElementById("Start2").disabled = true;
	}
	function timeStopWatches2(targetVal)
	{
		Days2 = Math.floor(targetVal / (24*60*60));
		days = targetVal % (24*60*60);
		Hours2 = Math.floor(days/(60*60));
		hours = targetVal % (60*60);
		Minutes2 = Math.floor(hours/60);
		minutes = targetVal % 60;
		Seconds2 = Math.floor(minutes);
	}
	function pauseStopWatch2()
	{
		clearInterval(pauseStopWatch2Now);
		document.getElementById("Start2").disabled = false;
	}
	function resetStopWatch2()
	{
		reset2();
	}
	function reset2()
	{
		document.getElementById("Start2").disabled = false;
		document.getElementById("Pause2").disabled = false;
		resetStopWatch2Value();
		init2();
	}
	function disableOnStopWatch2()
	{
		document.getElementById("Start2").disabled = true;
		document.getElementById("Pause2").disabled = true;
	}