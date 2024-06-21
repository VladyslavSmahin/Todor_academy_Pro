true + false;         // 1
8 / "2";              // 4
"number" + 5 + 1;     // "number51"
5 + 1 + "number";     // "6number"
7 && 2;               // 2
2 && 7;               // 7
null + 1;             // 1
undefined + 1;        // NaN
"five" + +"two";     // 'fiveNaN'
'true' == true;       // false
false == 'false';     // false
null == '';           // false
!!"false" == !!"true";// true
"4" - 3;              // 1
"4px" - 3;            // NaN
0 || "0" && 1;        // 1
//////////////
/*numString = '42';
numInt = parseInt(numString);
numFloat = parseFloat(numString);
alert(numString + " " + typeof numString);
alert(numInt + " " + typeof numInt);
alert(numFloat + " " + typeof numFloat);*/
/////////////
/*
isLoggedOut  = false;
loggedInString = isLoggedOut.toString();
loggedInString2 = String(isLoggedOut);
loggedInString3 = isLoggedOut + '';
loggedInString4 = JSON.stringify(isLoggedOut);
alert(loggedInString + " " + typeof loggedInString);
alert(loggedInString2 + " " + typeof loggedInString);
alert(loggedInString3 + " " + typeof loggedInString);
alert(loggedInString4 + " " + typeof loggedInString);*/
///////////
/*function StringNumber (ageString, yearsToAdd){
    futureAge = +ageString + +yearsToAdd;
    return futureAge;
}
let result = StringNumber('25', 10);
alert(result + " " + typeof result);*/
///////////////
/*
booleanFunction = (inputValue) =>{
    let isTrue =  Boolean(inputValue);
    return isTrue;
}
let result2 = BooleanFunction("true");
alert(result2 + " " + typeof result2);
*/
//////////
comboFunction = (inputValue) => {
    alert(typeof inputValue);
    alert(typeof (inputValue + "") + " " + inputValue);
    alert(typeof (parseInt(inputValue)) + " " + inputValue);
    alert(typeof Boolean(inputValue) + " " + inputValue);
}
comboFunction(1.2);
