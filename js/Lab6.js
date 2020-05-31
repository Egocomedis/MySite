let flag = false;
let inputVar = document.querySelectorAll('[type="number"]');
function checkFlag(){
	for (let i = 0; i < inputVar.length; i++) {
		if(inputVar[i].value === "")
		{
			inputVar[i].placeholder="Введiть число";
			inputVar[i].style.backgroundColor="#ff0000"
			flag=false;
		}
		else{
			inputVar[i].style.backgroundColor="#ffffff"
			flag=true;
		}
	}
}

document.querySelector("#clear").onclick=function(){
	for (let i = 0; i < inputVar.length; i++) {
		inputVar[i].style.backgroundColor="#ffffff";
		inputVar[i].placeholder="Введiть значення";
		inputVar[i].value="";
		document.querySelector("#result").textContent="";
	}
}

function solver(){
	checkFlag();
	document.querySelector("#result").textContent="Сума непарних чисел від а до b дорівнює " + calc() +  " цифр"
}

function calc(){
	let sum = 0;
	let i = inputVar[0].value;
	do{
			if(i % 2 == 1)
			{	
				sum++;
			}
			i++;
	}while (i <= inputVar[1].value)
	return sum;
}

