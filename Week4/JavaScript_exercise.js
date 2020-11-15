//Array exercises
//Exercise 1_1
var A = [10, 5, 13, 18, 51];

function ex1_1(array){
	for (el of array){
		console.log(el);
	}
}

ex1_1(A);

//Exercise 1_2
function ex1_2(array){
	var B = [];
	for (el of array){
		B.push(el*2);
	}
	return B;
}

console.log(ex1_2(A));

//Exercise 1_3
function ex1_3(array){
	return array.filter(x => x % 2 === 0);
}

console.log(ex1_3(A));

//Exercise 1_4
function ex1_4(array){
	return Boolean(array.find(x => x < 10));
}

console.log(ex1_4(A));
console.log(ex1_4(ex1_2(A)));

//Exercise 1_5
function ex1_5(array1){
	return array1.filter(x => x % 3 === 0);
}

console.log(ex1_5(A));

//Exercise 1_6
function ex1_6(array){
	return array.reduce((sum, val) => sum + val);
}

console.log(ex1_6(A));

//Exercise 1_7
function ex1_7(array){
	var E = array.slice(array.length - 2);
	console.log(E);
}

ex1_7(A);


//Date exercises
var dates = [];

function printDate(date){
	return date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear()
}

function printTime(date){
	return date.getHours() + ":" + (date.getMinutes()+1) + ":" + date.getSeconds()
}

function printDay(date){
	switch(date.getDay()){
		case 0:
		return "неделя";
		break;
		case 1:
		return "понеделник";
		break;
		case 2:
		return "вторник";
		break;
		case 3:
		return "сряда";
		break;
		case 4:
		return "четвъртък";
		break;
		case 5:
		return "петък";
		break;
		case 6:
		return "събота";
		break;
		default:
		return "Error";
		break;
	}
}

//-----------taken from w3resource-----------
var getDaysInMonth = function(month,year) {
	return new Date(year, month, 0).getDate();
}
//-------------------------------------------

//Exercise 2_1
var today = new Date();

dates.push(printDate(today));

console.log(dates);

//Exercise 2_2
var some_date = new Date("dec 8 2018");
some_date.setHours(21);


dates.push(printDate(some_date));

console.log(dates);

//Exercise 2_3
var days = [today.getDay(), some_date.getDay()];

console.log(days);


//Exercise 2_4

var array3 = [];
array3.push("Дата: " + printDate(today) + ", час: " + printTime(today) + ", " + printDay(today) + ", " + getDaysInMonth(today.getMonth()+1, today.getFullYear()) + " дни");
array3.push("Дата: " + printDate(some_date) + ", час: " + printTime(some_date) + ", " + printDay(some_date) + ", " + getDaysInMonth(some_date.getMonth()+1, some_date.getFullYear()) + " дни");

console.log(array3);









