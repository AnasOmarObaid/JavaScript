/* jslint plusplus :true */
/*global console, alert,prompt, NameFunction,makeprice*/



//=====================================================================================================================/

// Nunber Methods 

/*

  1 ==> name.toString() --> Change Number To String
  
  2 ==> name.toExponential() --> Return The Number Exponential
  
  3 ==> name.toFixed( Number ) --> Round The Number Acroose The Number Chossen
  
  4 ==> parseInt( Sring ) --> Change String To Integer





//============== Change Number To String ===================//

var number = 10;
console.log(number);
console.log(typeof (number)); // Number

var string = number.toString();
console.log(string);
console.log(typeof (string)); // String


//============== Change Number To String ===================//


var number = 1000;
console.log(number);

console.log(number.toExponential()); 


//============== Round The Number Acroose The Number Chossen ===================//

(100).toFixed()
"100"
(100.5).toFixed()
"101"
(100.4).toFixed()
"100"
(100).toFixed(0)
"100"
(100.5).toFixed(0)
"101"
(100.4).toFixed(0)
"100"
(100.323).toFixed(1)
"100.3"
(100.362).toFixed(1)
"100.4"
(100.362223242).toFixed(2)
"100.36"
(100.3688888).toFixed(2)
"100.37"
(100.3688888).toFixed(3)
"100.369"
(100.999999).toFixed(4)
"101.0000"


// ============= Change String To Integer ==============//

var pro1 = prompt(" Enter Number1 "),
    pro2 = prompt(" Enter Number2 "),
    conferm1 = parseInt(pro1),
    conferm2 = parseInt(pro2),
    sum = conferm1 + conferm2; 

console.log(sum); */

//=====================================================================================================================/

// Date 

/*

   1 ==> new Date() --> Print Current Date & Time
   
   2==> new Date (Mill Seconds ) --> print Mill Sewconds From UTC 1 Jan 1970 00:00:00
   
   3 ==> new Date ( " Date String " ) --> Can I Write The Dat And Return The Day
   
   4 ==> new Date ( Year, Month, Day, Hour, Minutes, Seconds ) --> Rutern The Day
   
   5 ==> Full Format --> new Date("October 31, 1999, 10:12:32 )
   
   5 ==> Long Format -->  new Date("October 31, 1999")
   
   7 ==> Short Format -->  new Date("10 / 31 / 1999 ")  The Munthe Come At First
   
   8 ==> Iso Format --> new Date(YYYY - MMM - S:S:S TZW)
   
   9 ==> dateName.getDate() --> Return The Number Day Of The Month
   
   10 ==> dateName.getDay() --> Return Day Of The Week 0 - 6
   
   11 ==> dateName.getFullYear --> Return The Full Year
   
   12 ==> dateName.getHors() --> Return The Hours 0 - 59
   
   13 ==> dateName.getMinutes() --> Return The Minutes 0 - 59
   
   14 ==> dateName.getSeconds() --> Return The Seconds 0 - 59

   15 ==> dateName.getMillSeconds() --> Return The Mill Seconds 0 - 999
   
   16 ==> dateName.getTime() --> Return The Number Of MilliSeconds From 1999 0R Specific Date
   
   17 ==> dateName.getTimezoneOffset() --> Get Def Between UTC & Your Local Time In Minutes
   
   18 ==> dateName.getUTCDate() --> Return The Number Day Of The Month
   
   19 ==> dateName.getUTCDay() --> Return Day Of The Week 0 - 6
   
   20 ==> dateName.getUTCFullYear --> Return The Full Year
   
   21 ==> dateName.getUTCHors() --> Return The Hours 0 - 59    //    التوقيت العالمي   //
   
   22 ==> dateName.getUTCMinutes() --> Return The Minutes 0 - 59
   
   23 ==> dateName.getUTCSeconds() --> Return The Seconds 0 - 59

   24 ==> dateName.getUTCMillSeconds() --> Return The Mill Seconds 0 - 999
   
   25 ==> dateName.getUTCTime() --> Return The Number Of MilliSeconds From 1999 0R Specific Date
   
   26 ==> dateName.setDate(Number) --> Set The Date
   
   27 ==> dateName.setFullYear( Year , Montes, Day ) --> يعني ممكن يعدل عليهن كهن 
   
   28 ==> date.setHours( Hours[Req], Mintes[opt], Seconds[opt])
   
   29 ==> date.setUTCHours( Hours[Req], Mintes[opt], Seconds[opt]) --> Global
   
   30 ==> date.setMintes( Mintes[Req], Seconds[opt] )
   
   31 ==> date.setUTCMintes( Mintes[Req], Seconds[opt] )
   
   32 ==> date.setSeconds(Seconds[Req], Mili[op])
   
   33 ==> date.setUTCSeconds(Seconds[Req], Mili[opt])
   
   34 ==> dateName.setMillSeconds() --> Return The Mill Seconds 0 - 999
   
   35 ==> dateName.setUTCMillSeconds() --> Return The Mill Seconds 0 - 999
   
   36 ==> dateName.setMonth( Mintes[Req])
   
   37 ==> Date.now() --> Return The MiliSeconds
   
   38 ==> Date.parse(" Month Year Day Hours Mentes Seconds") --> Return The MiliSeconds From This Year
   
   39 ==> dateName.toIsoString() --> Change The Date To Iso
   
   40 ==> dateName.toDateString() --> Change The Date To String
   
   41 ==> dateName.toDateTime() --> Change The Date To Time


// ========== new Date() =================//


var theDate = new Date();
console.log(theDate);


// ========== new Date(Mill Seconds) =================//


var theDate = new Date(10000); // 10 Seconds
console.log(theDate);


// ========== new Date ( Date String ) =================//


var theDate = new Date("October 31, 1999 12:20:32"); // 10 Seconds
console.log(theDate);


// =========== new Date ( Year, Month, Day, Hour, Minutes, Seconds ) ===========//


var theDate = new Date(1999, 9, 31, 12, 20, 32); // 10 Seconds
console.log(theDate); 

var theDate = new Date( 10 / 30 / 1999 )

var welcome = alert(" Welcome To You <= ");
var year = prompt(" Enter Your Year ");
var month = prompt(" Enter Your Month");
var day = prompt(" Enter Your Day ");
var hour = prompt(" Enter Your Hour");
var minutes = prompt(" Enter Your Minutes");
var seconds = prompt(" Enter Your Seconds");
var newMonth = month - 1;

var theDate = new Date(year, newMonth, day, hour, minutes, seconds);
alert(theDate); 


// ========== Number Day Of The Month BY getDate 1 - 31 =================//


var theDate = new Date(),
    theNumberDay = theDate.getDate();

console.log(theDate);
console.log(theNumberDay); 



// ========== Return Day Of The Week 0 - 6 =================//


var theDate = new Date(),
    theNumberDay = theDate.getDay();

console.log(theDate);
console.log(theNumberDay); 


// ========== Return The Full Year =================//


var theDate = new Date(),
    theNumberDay = theDate.getFullYear();

console.log(theDate);
console.log(theNumberDay); 


// ========== Return The Hours 0 - 59 =================//


var theDate = new Date(),
    theNumberDay = theDate.getHours();

console.log(theDate);
console.log(theNumberDay);



// ========== Return The Minutes 0 - 59 =================//

var theDate = new Date(),
    theNumberDay = theDate.getMinutes();

console.log(theDate);
console.log(theNumberDay);


// ========== Return The Seconds   =================//

var theDate = new Date(),
    theNumberDay = theDate.getSeconds();

console.log(theDate);
console.log(theNumberDay);


// ========== Return The Mill Seconds 0 - 999   =================//

var theDate = new Date(),
    theNumberDay = theDate.getMilliseconds();

console.log(theDate);
console.log(theNumberDay); 

// ======== Return The Number Of MilliSeconds From 1970 0R Specific Date =======/

var theDate = new Date(1535383113228),
    theNumberDay = theDate.getTime();

console.log(theDate);
console.log(theNumberDay); 

var currentDate = new Date(),
    currentMilliseconds = currentDate.getTime(), //1482992135159
    myBirth = new Date("Oct 31 1999"),
    myBirthMillisconds = myBirth.getTime(), //789602400000
    myAgeInMilliseconds = currentMilliseconds - myBirthMillisconds, //693390110098
    myAgeInSeconds = myAgeInMilliseconds / 1000, //693390238.826
    myAgeInMinutes = myAgeInSeconds / 60, //11556507.37915
    myAgeInHours = myAgeInMinutes / 60, //192608.50933083333
    myAgeInDays = myAgeInHours / 24, //8025.357472708332
    myAgeInYears = myAgeInDays / 365; //21.98729079157154
document.write('My Age In Milliseconds => ' + myAgeInMilliseconds + '</br>');
document.write('My Age In Seconds => ' + myAgeInSeconds + '</br>');
document.write('My Age In Minutes => ' + myAgeInMinutes + '</br>');
document.write('My Age In Hours => ' + myAgeInHours + '</br>');
document.write('My Age In Days => ' + myAgeInDays + '</br>');
document.write('My Age In Years => ' + Math.round(myAgeInYears) + '</br>');

// ========== setDate( Number Day )   =================//

var theDate = new Date();
theDate.setDate(13);
console.log(theDate);

var theDate = new Date();
theDate.setUTCDate(21);
console.log(theDate); 

// ========== setFullYear( Number Day )   =================//

var theDate = new Date();
theDate.setFullYear(1999, 10, 31); // ( Year, Mounth, Day )
console.log(theDate);

var theDate = new Date();
theDate.setUTCFullYear();
console.log(theDate); 


// ====== date.setHours( Hours[Req], Mintes[opt], Seconds[opt]) ===/


var theDate = new Date();
console.log(theDate);
theDate.setHours(3, 50, 30); // ( Year, Mintes, Seconds )
console.log(theDate);var theDate = new Date();
theDate.setUTCHours(3);
console.log(theDate);

console.log(theDate.getHours());

// ======= Return The Mili Seconds BY Date.now() ====//

var theDate = new Date(),
    now = Date.now();

console.log(now);

// ============  Change The Date To Iso ==========//


var theDate = new Date(),
    myIso =theDate.toISOString();

console.log(myIso); 


// ============  Change The Date To Date Strin ==========//

var theDate = new Date(),
    myDate = theDate.toDateString();

console.log(myDate);


// ========= Change The Date To Time =================//


var theDate = new Date(),
    myDate = theDate.toTimeString();

console.log(myDate);   */


//=====================================================================================================================/


// Regular Expression --> التعبيرات المنطقية --> تخص علوم الحاسوب ==> / Pattren / Attributes
// stringName.seach(), replase, match, split, test

/*

   1 ==> [ i ] --> Case Insensitive 
   
   2 ==> [ g ] --> Global Search
   
   3 ==> [ m ] --> Multi Line Search


var string = "I Love JavaScript ";
console.log(string);
console.log(string.search(/a/i));



var string = "I LovA JavaScript ";
console.log(string);
console.log(string.replace(/a/ig, "@")); */



// ================== Brackets Use ===============//


/*
var myString = "Iam Love Java A8nd Jaevascript";

console.log(myString);
console.log(myString.replace(/[ae]/gi, "@")); // Replace a OR e OR ae


console.log(myString.replace(/[^ae]/gi, "@")); // Replace All Them Exept ae OR a OR e


console.log(myString.replace(/[A-Z]/gi, "@")); // Replace All String


console.log(myString.replace(/[^a-z]/ig, "@"));

var x = true;

while (x) {
    var string = prompt(" Enter Your String "),
        cheackString = string.search(/[0-9]/ig);

    if (cheackString >= 0) {
        alert(" The String Must Incloud Juat Word From A T0 Z ");
    } else {
        alert(" This Is Right Way");
    }

    var x2 = prompt(" If You Wanted To Tray Again Enter Yes Else Enter No ");
    if (x2 === "YES" || x2 === "Yes" || x2 === "yes") {
        x = true;
    } else if (x2 === "NO" || x2 === "No" || x2 === "no") {
        x = false;
    } else {
        alert(" Please Enter Yes OR No");
    }
} 

[A-g] ==> [A-Z] --> [a-g]

[0-9a-z] ==> [0-9] -->[a-z]




var myString = "I1am Lo4ve Ja11va A887nd Jaev6ascr8ipt";

console.log(myString);

console.log(myString.replace(/[0-9a-z]/ig,"@")); */


// =========================== Quantifier ==================//



/*
var myString = " I Laove Jaavvcaaa And Javaaaaaa Script";
console.log(myString);
console.log(myString.replace(/[a]/ig, "@"));

console.log(myString.replace(/a+/ig, "@")); // اد كان يوجد حرف ال اه ورا بعضو فانه يبدله مرة واحدة فقط

console.log(myString.replace(/a{3}/ig, "@")); // اد كانت متكررة ثلاث مرات بنستبدل وايضا حتى لو كانت متكررة اكثر من ثلاث زي ست مرات مثلا فاننا نستبدل

console.log(myString.replace(/a{2,3}/ig, "@"));

console.log(myString.replace(/a{2,}/ig, "@")); // At Least Number2 */




//=====================================================================================================================/

// Mathe

/*
    
    1 ==> Math.ceil( Number ) --> return The Big Integer Number
    
    2==> Math.floor( Number ) --> return The Small Integer Number
    
    3 ==> Math.round( Number ) --> return A Integer Of Number
    
    4 ==> Math.max(Number1, Number2, Number3,....ech) --> return The Big Number
    
    5 ==> Math.min(Number1, Number2, Number3,....ech) --> return The Small Number
    
    6 ==> Math.random() --> return A Random Number Bettoen 0.0 --> 0.9
    
    7 ==> Math.PI() --> ruturn A 3.14013213202
    
    8 ==> Math.pow( Number1, Number2)
    
    9 ==> Math.abs( -Number )
    
    10 ==> Math.sign( Number ) --> Show The Typ Of Number




  */

// ==================  Math.pow & Math.abs & Math.sign ================//

/*
console.log(Math.pow(2, 3));

console.log(Math.abs(-4));

console.log(Math.sign(-19790)); */


// ==================  return A Random Number ================//



/*
var random = Math.random();
console.log(random);

console.log(Math.random() * 30); // return A Random --> 0.0 And 0.29

console.log(Math.round(Math.random() * (30 - 10))); // return A Random --> 0.0 And 0.29 */



// ==================  return The Big Number And Small ================//


/*
var max = Math.max(100, 200, 300, 1000, 5000.3, 4000);
console.log(Math.round(Math.floor(max) - 1));

var max = Math.min(200, 100.8, 300, 1000, 5000, 4000);
console.log(max); */


// ==================  return A Integer Of Number BY round ================//



/*
 console.log(Math.round(1));
        
console.log(Math.round(1.4));

console.log(Math.round(1.5));

console.log(Math.round(1.9));

console.log(Math.round(-1.6));

 console.log(Math.round(6 - 2.5)); */


// ================== return The Smal Integer Number BY floor ================//


/*

console.log(Math.floor(2));

console.log(Math.floor(2.9));

console.log(Math.floor(2.1));

console.log(Math.floor(-2.7));

console.log(Math.floor(5 - 1.7)); */




// ================== return The Big Integer Number BY Ceil ================//



/*
var ceil = Math.ceil(4.00000002);
console.log(ceil);

console.log(Math.ceil(4.9));

console.log(Math.ceil(-3.2));

console.log(Math.ceil(10 - 1.9)); */




//=====================================================================================================================/



// Loops



//<< ================     1 ==> foor Loops   ======================>> ///



// for ==> Its KeyWord for (i = 0; i<=10; ++i ){ Statemant; }



/*

var i,
    sum = 0,
    studentMark = [82, 78, 84, 83, 60],
    avg = 0,
    sumAvg = 0;
for (i = 1; i <= 10; i += 1) {
    console.log("Number ==> " + i);
    sum += i;

}
console.log(sum);

 


for (i = 0; i < studentMark.length; i += 1) {
    console.log("The Marks " + "[ " + (i + 1) + "]" + " -->" + " " + studentMark[i]);
    sumAvg += studentMark[i];
    avg = ((sumAvg) / 500) * 100;

}

if (avg <= 100 && avg >= 90) {
    console.log(avg + " " + "Exellent");
} else if (avg <= 89 && avg >= 80) {
    console.log(avg + " " + "Very Good");
} else if (avg <= 79 && avg >= 70) {
    console.log(avg + "Good");
} else if (avg <= 69 && avg >= 60) {
    console.log(avg + "Accept");
} else if (avg > 100) {
    console.log(" Plese Enter Rhigt");
} else {
    console.log(avg + " Fild");
} 



var i = 0;
for (;;) {
    if (i > 10) {
        break;
    }
    console.log(i);
    i += 1;
}


*/

/**/


/* ====================== Objectiv ============================== */


/*

var myCar = {
    colur: "red",
    style: "BMW",
    price: "50.000"
};

console.log(myCar.colur); */


/* ====================== For Loop / In ============================== */



// var prop; for (prop in nameOfObjective){ nameOfObjective[prop] };

/*
var Name = "Anas";
var Student = {

    Name: name,
    Id: 20172440,
    Avg: 84

};

var inter;
for (inter in Student) {
    if (Student.hasOwnProperty(inter)) {
        console.log(inter + ":" + Student[inter]);
    }
} 
*/


//<< ================     1 ==> While Loops   ======================>> ///

// Its A key Word while( Condition ) { Statemant; }


/*
var x1 = true;

while (x1) {
    alert("Halo");
    var x2 = prompt(" Do You Want To Try Again ");
    if (x2 === "yes" || x2 === "YES" || x2 === "Yes") {
        x1 = true;
    } else if (x2 === "No" || x2 === "NO" || x2 === "no") {
        x1 = false;
    } else {
        alert(" Plese Enter ==> Yes OR No ");
    }

} */

//<< ================     1 ==>  do While Loops   ======================>> ///


// do { Statemant } while( Condition );


/*
var x1 = true;

do {
    alert(" Halo");
    var x2 = prompt(" Do You Want To Try Again ");
    if (x2 === "yes" || x2 === "YES" || x2 === "Yes") {
        x1 = true;
    } else if (x2 === "No" || x2 === "NO" || x2 === "no") {
        x1 = false;
    } else {
        alert(" Plese Enter ==> Yes OR No ");
    }

} while (x1); */



//<< ================     1 ==>  Loop Control   ======================>> ///


/*
var i;
for (i = 0; i < 10; i += 1) {

    if (i === 4) {
        break;
    }

    console.log(i);

}
var i;
for (i = 0; i < 10; i += 1) {

    if (i === 4) {
        continue;
    }

    console.log(i);

} */

/*
var i,
    x;

MainLoops:

    for (i = 1; i <= 5; i += 1)


        ChildLoops:

        for (x = 1; x <= 10; x += 1) {

            if (i ===4 )
                break MainLoops;
console.log(i + " ==> " + x);
}*/

/*
var myArray = [400, 70000000, 10000, 4000, 8000];

var i = 0,
    j = 0,
    scop;

for (i; i < myArray.length; i += 1) {

    for (j = i + 1; j < myArray.length; j += 1)

        if (myArray[i] > myArray[j]) {
            scop = myArray[i];
            myArray[i] = myArray[j];
            myArray[j] = scop;

        }

}

console.log(myArray); */






//=====================================================================================================================
// String

/*
    
    1 ==> stringName.length == Calclaite The Number Of String

    2 ==> stringName.toString() == Change Number To String OR By Using string(stringName);
    
    3 ==> stringName.indexOf("Element") == Serch The Index Of The Element ON String --> Index Of Element
    
    4 ==> stringName.indexOf("Element",Inex) == Serch The Index The Element ON Array After Index --> Number Of Element

    5 ==> stringName.lastIndexOf("Element") == Serch The last Index Element ON String  --> Number Of Element
    
    6 ==> stringName.lastIndexOf("Element",Inex) == Serch Last Index The Element ON Array After Index --> Number Of Element
    
    7 ==> stringName.search("Element") OR .search(/Elemnt/i) == Search The Element Of The String
    
    8 ==> stringName.split() == Change String To Array --> split(seperator, Limit) 
    
    9 ==> stringName.slice() ==> Extraction Group Of String --> slice(Index, End Index)
    
    10 ==> stringName.substr() ==> Extraction Group Of String --> substr(Index, How Many Index OR length)
    
    11 ==> stringName.substring() ==> Extraction Group Of String --> sumstring(Index, End Index)
    
    12 ==> stringName.charAt() ==> Ruturn The Element Of Index return Charactor --> charAt(Number Of Index)
    
    13 ==> stringName.charCodeAt() ==> Return The UniCode Of Index --> charCodeAt(Index)
    
    14 ==> stringName.replace() ==> Replaceing String To Anew String --> replace("String", "New String")
    
    15 ==> String.fromCharCode(num1, num2) ==> Write The Word BY UniCode
    
    16 ==> stringName.concat() ==> Concating String --> stringName.concat(string1, string2)
    
    17 ==>stringName.toLowerCase() ==> Change Letters To Small
    
    18 ==> 17 ==>stringName.toUpperCase() ==> Change Letters To Upper
    
    19 ==> stringName.trime() ==> Delete The Spase
    
    20 ==> stringName.link() ==> Go To Link 



*/


//<< =======================         Go To Link         =====================================>> ///                   


/*
var string = "Googl";
var link = string.link("http://www.googl.com");

console.log(link); */



//<< =======================     Change All Letters To Upper     =====================================>> ///



/*
var string1 = prompt("What Your Name");
var string2 = prompt("What Your Name");

var smallString = string1.toLowerCase();
var upperString = string2.toUpperCase();

console.log(smallString); */



//<< =======================     Change All Letters To Small     =====================================>> ///


/*
var string = prompt("What Your Name");
console.log(string);

var smallString = string.toLowerCase();
console.log(smallString);*/


//<< =======================     Concating String    =====================================>> ///



/*
var name = "Anas".concat(" Omar");

console.log(name);

var message1 = "Halo Im Anas",
    message2 = " I Love Java",
    message3 = "and I Love php";

var prompt = prompt(" Are You Happy ?");
var all = prompt.concat(message1, message2, "",  message3);
console.log(all); */



//<< =======================  ==     Write The Word BY UniCode  ==    =====================================>> ///



/*
var message = String.fromCharCode(65, 66, 67);

console.log(maseage); */




//<< ======================= Replaceing String To Anew String  =====================================>> ///



/*
var mainString = "I Love JavaScript And JavaScript Is Fun",
    myReplace = mainString.replace(/JavaScript/gi, "php"); // To Ingormal Word And Concat Every Element

console.log(mainString);
console.log(myReplace); */






//<< ======================= Return The UniCode Of Index BY CharCodeAt  =====================================>> ///


/*
var mainString = "I love JavaScript";
console.log(mainString);
var mycharAt = mainString.charCodeAt(2);
console.log(mycharAt);*/



//<< ========================== Ruturn The Element Of Index BY CharAt=====================================>> ///

/*
var mainString = "I Love JavaScript";
console.log(mainString);
var mycharAt = mainString.charAt(mainString.length - 1);
console.log(mycharAt);*/



//<< ========================== Extraction Group Of String BY substring =====================================>> ///

/*
var mainString = "I Love Java";
console.log(mainString);
var mysubstring = mainString.substring(6, 2);
console.log(mysubstring);


var mainString = "I Love Java";
console.log(mainString);
var myslice = mainString.slice(6, 2);
console.log(myslice); */



//<< ========================== Extraction Group Of String BY substr =====================================>> ///

/*
var mainString = "I Love Java";
console.log(mainString);
var mysubStr = mainString.substr(2, 6);
console.log(mysubStr);


var mainString = "I Love Java";
console.log(mainString);
var mySlice = mainString.slice(2, 6);
console.log(mySlice); */


//<< ========================== Extraction Group Of String BY slice =====================================>> ///



/*
var mainString = "I Love Java And JavaScript";
console.log(mainString);
var mySlice = mainString.slice(); // Extraction All String 
console.log(mySlice);

var mainString = "I Love Java And JavaScript";
console.log(mainString);
var mySlice = mainString.slice(7, 10); // عند السبعة مغلق اما عند العشرة مفتوح
console.log(mySlice);

console.log(typeof (mySlice)); */


//<< ========================== Change String To Array BY Split =====================================>> ///


/*
var mainString = "I Love Java And JvasScript";
console.log(mainString);
console.log(typeof (mainString));
console.log(mainString[0]);

var newString = mainString.split();
console.log(newString);
console.log(typeof (newString));
console.log(newString[0]); 

var mainString = "I Love Java And Java Script";
console.log(mainString);

var split = mainString.split("a", 2); // How Many Element To Split Just Tow Element
console.log(split); */



//<< =============== Serch The Last Index Of The Element ON String BY Serch(/Element/i) ============>> ///


/*
var myString = "I LOVE javaScript Love";
console.log(myString);
var serche = myString.search(/Love/i); // Incormal 
console.log(serche); */




//<< ========================  Serch The Last Index Of The Element ON String  ===================>> ///

/*
var myString = "I Love javaScript";
console.log(myString);
var serche = myString.lastIndexOf("Script"); // حتى لو كتبنا جزى من الكلمة هيجيبلك الاندكس بتاعو
console.log(serche);


var myString = "I Lovea javaScript";
console.log(myString);
var serche = myString.lastIndexOf("a", 17); // حتى لو كتبنا جزى من الكلمة هيجيبلك الاندكس بتاعو
console.log(serche); */



//<< ========================  Serch The Index Of The Element ON String  ===================>> ///


/*
var myString = "I Love javaScript";
console.log(myString);
var serche = myString.indexOf("Lov"); // حتى لو كتبنا جزى من الكلمة هيجيبلك الاندكس بتاعو
console.log(serche);


var myString = "I Love javaScript";
var serche = myString.indexOf("a", 9); // حتى لو كتبنا جزى من الكلمة هيجيبلك الاندكس بتاعو
console.log(serche); */





//<< ========================  Change Number To String OR By String(stringName);  ===================>> ///


/*
var number = 10;
console.log(typeof (number)); // Number
var newNumber = number.toString();
console.log(typeof (newNumber)); // String

var nu = 15;
var ch = String(nu);
console.log(typeof (ch)); */


//<< ========================  Calclaite The Number Of String By length  ===================>> ///


/*
var myString = "Anas \"Omar\"";
var type = typeof (myString); // Disblay The Type Of Variable
console.log(myString);
console.log(type);
console.log(myString.length); */


//=====================================================================================================================/


// Arrays

/*
 
 
  1 ==> Constractor Way ==> var ArrayName = new Array("Anas", "Omar", "Obaid") ;
  
  2 ==> Litral Way ==> var ArrayName = ["Anas", "Omar"] ;
  
  3 ==> Array Check ==> Array.isArray(ArrayName) OR ArrayName.constuctor === Array
  
  4 ==> ArrayName.Length
  
  5 ==> ArrayName.toString() ==> Change Array To String
  
  6 ==> ArrayName.toLocaleString()
  
  7 ==> ArrayName.join() ==> Change Comma To Any Thing
  
  8 ==> ArrayName.Push() ==> Adding Element To Last Index Of Array
  
  9 ==> ArrayName.unshift() ==> Adding Element To First Index Of Array
  
  10 ==> ArrayName.splice(Index, How Many, Element) 0R ArrayName.splice(Index, How Many)
  
  11 ==> ArrayName.pop() ==> Deleteind The Last Element Of Array
  
  12 ==> ArrayName.shift() ==> Deleteind The First Element Of Array

  13 ==> ArrayName.sort() ==> Sort The Array Word Capital To Smoal
  
  14 ==> ArrayName.reverse() ==> reverse The Array 
  
  15 ==> ArrayName.slice() ==> Extraction Group Of Array
  
  16 ==> ArrayName.concat() ==> To Concat Tow OR Three Array
   
  17 ==> ArrayName.indexOf("Name Element") ==> Serch The Index Of The Element ON Array --> Number Of Element
  
  18 ==> ArrayName.indexOf("Name Element", Index) ==> Serch The Index Of The Element ON Array --> Number Of Element
  
  19 ==> ArrayName.lastIndexOf("Name Element") ==> Serch The Last Index Of The Element ON Array --> Number Of Element
  
  20 ==> ArrayName.lastIndexOf("Name Element", Index) ==> Serch The Last Index Of The Element ON Array --> Number Of Element
  

*/




//<< ========================  Constractor Way  ===================>> ///

/*
var student = new Array();
student[0] = "Anas";
student[1] = "Omar";
student[2] = "Engineer";
student[3] = "Engineer";
console.log(student);*/

// var student = new Array("Anas", "Omar", "Obaid");
// console.log(student);

//<< ========================  Litral Way  ===================>> ///

/*
var student = [];
student[0] = "Anas";
student[1] = 1;
student[3] = 1.9;
console.log(student); */

// var student = ["Anas", "Omar", 12, 0.1];
// console.log(student);


//<< ========================  Array Check  ===================>> ///


/*if (Array.isArray(student)) {
    console.log("Yes Is Array");
} else {
    console.log("No Is Not Array");
}*/
/*
if (student.constructor === Array) {
    console.log("Yes Is Array");
}
*/

//<< ========================  Array Length  ===================>> ///


/*

var myVar = "Anas Omar Obaid";
console.log(myVar.length);

var myArray = ["Anas", "Omar", "Obaid"];
console.log(myArray[2].length);
console.log(myArray);

myArray.length = 2; // The Length Of Array == 2
console.log(myArray);
*/


//<< ========================  Change Arrays To String  ===================>> ///


/*
var student = ["Anas", "Omar", "Obaid"];
console.log(student);

var string = student.toString();
console.log(string);

string = student.join(" ");
console.log(string);
*/


//<< ========================  Adding Element To Arrays  ===================>> ///
/*
var student = ["Ayman", "Hamza", "Ahmad"];
console.log(student);

student[student.length] = "Zead";
console.log(student);
*/

//<< ========================  Adding Element To Arrays By Push  ===================>> ///

/*
var student = ["Ayman", "Hamza", "Ahmad"];
student.push("Anas", "Omar");
console.log(student);
*/

//<< ======================== Ading Element To First Index To Array By unShift ===================>> ///


/*
var student = ["Ayman", "Hamza", "Ahmad"];
console.log(student);
console.log(student[0]);

student.unshift("Omar");
console.log(student);
console.log(student[0]); */



//<< ======================== Ading Element To Array By Splice ===================>> ///

/*
var student = ["Ahmad", "Ayman", "Soha", "Amjad"];
console.log(student);
console.log(student.length);

student.splice(2, 0, "Anas", "Omar");
console.log(student); */


//<< ======================== Delete The Last Element Of Array By pop ===================>> ///


/*
var student = ["Ahmad", "Ayman", "Soha", "Amjad"];
console.log(student);
var lastIndex = student.pop(); // To Find The Last Index From Array
console.log(lastIndex);

student.pop();
console.log(student);
var lastIndex2 = student.pop();
console.log(lastIndex2); */


//<< ======================== Delete The First Element Of Array By shift ===================>> ///


/*
var student = ["Ahmad", "Ayman", "Soha", "Amjad"];
console.log(student);
console.log(student[0]);

student.shift();
console.log(student);
console.log(student[0]); */


//<< ======================== Sort The Array Word Capital To Smoal ===================>> ///


/*
var student = ["Zyad", "Omar", "Soha", "Ahamd"];
console.log(student);
console.log(student[0]);

student.sort();
console.log(student);
console.log(student[0]);*/


//<< ======================== Reverse The Array By reverse ===================>> ///

/*
var student = ["Zoha", "Anas", "Soha", "Omar"];
console.log(student);
console.log(student[0]);

student.reverse();
console.log(student);
console.log(student[0]); */


//<< ======================== Extraction Group Of Array By slice  ===================>> ///


/*
var student = ["Zoha", "Anas", "Soha", "Omar"];
console.log(student);

var slice = student.slice(1, 3); // ArrayName.slice(Index, How Many To Element To Show )
console.log(slice); */


//<< ======================== To Concat Tow OR Three Array By concat ===================>> ///


/*
var student = ["Zoha", "Anas", "Soha", "Omar"];
console.log(student);

var frinds = ["Zead", "Ammer", "Twfeeq", "Hamza"];
console.log(frinds);

var x = ["Baraa"];

var concat = frinds.concat(student, x);
console.log(concat);

console.log(concat.sort()); */



//<< =============== Serch The Index Of The Element ON Array --> Number Of Element ===========>> ///

/*
var student = ["Amjad", "Amjad", "Soha", "Amjad", "Anas"];
console.log(student);

var indexOfElement = student.indexOf("Amjad");
console.log(indexOfElement);
console.log(student[indexOfElement]);

var indexOfStart = student.indexOf("Amjad", 2);
console.log(indexOfStar); */



//<< =============== Serch The Last Index Of The Element ON Array --> Number Of Element ===========>> ///


/*
var student = ["Amjad", "Amjad", "Soha", "Amjad", "Amjad", "Anas"];
console.log(student);

var lastIndex = student.lastIndexOf("Amjad");
console.log(lastIndex);
console.log(student[lastIndex]);

var indexOfStart = student.lastIndexOf("Amjad", 2);
console.log(indexOfStart); */


//=====================================================================================================================/


// Event

/*
  1 ===> onlode ==> عند التحميل اعمل كزا وكزا
  2 ===> onclick
  3 ===> ondblclick
  4 ==> onkeydown ==> اول ما احط ايدي على الزرار هينعمل الحدث دا
  5 ==> onkeyup ==>  اول ما اشيل ايدي على اي حرف او رقم هينعمل الحدث دا
  6 ==> onkeypress ==> 
  7 ==> onmouseover ==> لما نحط الماوس عليهن هتنعمل حدث معين وهيضل تأثير الحدث حتى لما ابعد الماوس
  8 ==> onmouseout ==> هنا هحط الماوس عادي وموش هيصير اشي ولكن منبعد ما اشيل الماوس هيصير الحدث دا
  9==>  onchange ==> هنا اول ما هيصير تغير على الاليمينت ا ادوس انتر هيختلف الاشي وهيتغير 

*/


//<< ========================  onkeydown  ===================>> ///


/*
var input = document.getElementById("input");
var result = document.getElementById("result");
// Element.Event = function() { Any Code };
input.onkeydown = function () {
    "use strict";
    if (input.value * 0.3 === 0) {
        result.innerHTML = " 0 IS Not To Calc";
    } else {
        result.innerHTML = input.value * 0.3;
    }
}; */


//<< ========================  onkeyup  ===================>> ///

/*
var input = document.getElementById("input");
var result = document.getElementById("result");

// Element.Event = function() { Any Code };
input.onkeyup = function () {
    "use strict";
    if (input.value * 0.3 === 0) {
        result.innerHTML = " 0 IS Not To Calc";
    } else {
        result.innerHTML = input.value * 0.3;
    }
}; */

//<< ========================  onkeypress  ===================>> ///


/*

var input = document.getElementById("input");
var result = document.getElementById("result");
var button = document.getElementById("myButton");
// Element.Event = function() { Any Code };
button.onkeypress = function () {
    "use strict";
    if (input.value * 0.3 === 0) {
        result.innerHTML = " 0 IS Not To Calc";
    } else {
        result.innerHTML = input.value * 0.3;
    }

};*/

//<< ========================  onmouseover  ===================>> ///


/*


var div = document.getElementById("div");
div.onmouseover = function () {
    "use strict";
    div.innerHTML = "Youe Over Me";
}; */



//<< ========================  onmouseout  ===================>> ///


/*


var div = document.getElementById("div");
div.onmouseout = function () {
    "use strict";
    div.innerHTML = "Youe Over Me";
};*/


//<< ========================  onchange  ===================>> ///


/*


var
    input = document.getElementById("input"),
    div = document.getElementById("div");
input.onchange = function () {
    "use strict";
    div.innerHTML = input.value * 0.3;
}; 

var
    input = document.getElementById("input"),
    select = document.getElementById("select"),
    div = document.getElementById("div");

select.onchange = function () {
    "use strict";
    div.innerHTML = input.value * select.value;
};

input.onkeyup = function () {
    "use strict";
    div.innerHTML = input.value * select.value;
}; */



// =================================================================================================================== /


// Scope 

// var name = "Aans"; // Global var

/*
 function global() {
    "use strict";
   // var name = "Ahamed"; // Is Local
    console.log(name);
}
global();
console.log(name);

*/
/*
function ChangeLocalToGloabal() {
    "use strict";
    name = "Ahmad"; // Global Scope // Must Be The Same Name Of Gloabl Var
}
ChangeLocalToGloabal();
console.log(name + " Omar");
*/


//var x = 1;
/*function testFun() {
    "use strict";

    x = 5;
    var calc = x + 3; // 5 + 3 = 8 
    console.log(calc);
}

testFun();

console.log(x + 3); // 1 + 3 = 4 */
/*
var x = 1;

function testFunc() {
    "use strict";
    var
        x = 4, // Its Global For To Child
        calc = x + 3;// Global Scop

    function childfun() {
        
        console.log(calc); 

    }
    return childfun(); // Its Import To Called CholdFun
}


testFunc(); */


// ==================================================================================================================/


// switch ==> Its A Key Word


/*


function sum() {
    "use strict";
    var
        firstNumber = prompt("Enter Your First Number"),
        secondNumber = prompt("Enter Your Second Number"),
        result = firstNumber + secondNumber;
    alert("the Sum of " + firstNumber + "+" + "And Number " + secondNumber + " Is " + result);

}

function sub() {
    "use strict";
    var
        firstNumber = prompt("Enter Your First Number"),
        secondNumber = prompt("Enter Your Second Number"),
        result = firstNumber - secondNumber;
    alert("the Sub of " + firstNumber + "+" + "And  Number " + secondNumber + " Is " + result);
}

function mult() {
    "use strict";
    var
        firstNumber = prompt("Enter Your First Number"),
        secondNumber = prompt("Enter Your Second Number"),
        result = firstNumber * secondNumber;
    alert("the mult of " + firstNumber + "+" + "And Second Number " + secondNumber + " Is " + result);
}

function mood() {
    "use strict";
    var
        firstNumber = prompt("Enter Your First Number"),
        secondNumber = prompt("Enter Your Second Number"),
        result = firstNumber / secondNumber;
    alert("the mood of " + firstNumber + "+" + "And Second Number " + secondNumber + " Is " + result);
}


var qustion = prompt("Choose Your Operoter ==> (+ , - , / , * )");

switch (qustion) {

    case '+':
        sum();
        break;
    case '-':
        sub();
        break;
    case '*':
        mult();
        break;
    case '/':
        mood();
        break;

    default:
        alert("Choose Your Operoter ==> (+ , - , / , * )");
}
*/

// ====================================================================================================================/

// Invoke Function


(function myfun() {
    "use strict";
    alert("Invoke Function");
}());

/*function conformSheekelToDolar(amont) {
    "use strict";
    return alert("Your Cost In Dolar Is " + amont * 0.35 + "$");
}

var amontee = prompt("Enter Your Cost");

conformSheekelToDolar(amontee);*/

/*
var pro = prompt("How Price");
var x = makeprice(pro);
document.getElementById("test").innerHTML = "Your Discounts Is " + x;

function makeprice(price) {
    "use strict";

    if (price >= 50 && price <= 100) {
        return "%30";
    } else if (price >= 200) {
        return "%50";
    } else {
        return "No";
    }

}

function Conferm() {
    "use strict";
    var amont = document.getElementById("Dolar").value; // To iput
    var resalt = amont * 0.3;
    if (amont === "") {
        document.getElementById("massege").innerHTML = " You Must Enter Nummber";
    } else if (isNaN(amont) === true) {
        document.getElementById("massege").innerHTML = amont + " Is Not Nummber";
    } else if (amont == 0) {
        document.getElementById("massege").innerHTML = amont + " Not To Calcalite"
    } else if (amont < 0)
        document.getElementById("massege").innerHTML = amont + " Is Nective"

    else {
        document.getElementById("massege").innerHTML = amont + " Is " + resalt + "$";
    }

}


*/



// function return
/*
function myFunction(x, z) { // parameter
    "use strict";
    return "Halo " + x + " How Are You" + "<br>" + "Age Is" +
        z;
}
var y = prompt("What Your Name");
var w = prompt("How Old are You ");
var x = myFunction(y, w); // Valuo Of Parameter
document.getElementById("test").innerHTML = x;
*/


// ===================================================================================================================/


// Functiion 

/* Function ==> Its Key Word*/

/*
function namFunction() {
    
    "use strict";
    alert("This Is Function"); // Any Stetment
    
}

nameFunction(); // After The Function

*/

// ================================================================================================================= //

// Logical Operators

/*
  != <==> Not Equal As Same AS ==
  !== <==> Not Eqal As Same AS ===
  && <==> If A fols Is Exsist Then Its Return Fols
  || <==> If A True Has Exest Then Its Return True
*/
/*
var
    name = "Anas",
    
    Age = 22;



if (name === "vnas" || Age === 62) {
    alert("Yes");
} else {
    alert("No");
}
*?



// ================================================================================================================== //

// Condittional Oprerator

  <, >, <=, >=, ;
  = >>> Assignment Operator "Variable"
  == >>> Comparison Operator
  === >>> Identity Operator difernt Dat
 */
/*
var x = "20";

if (x === 20) {
    alert("Yes");
} else {
    alert("no");
}
*/



//===================================================================================================================//

/*var yourAge = prompt(" How Old Are You");

if (yorAge < 15) {

    document.getElementById("test").innerHTML = " Sorry  Your Age Is " + yourAge + "Not Alaod";
} else {
    document.getElementById("test").innerHTML = "sa";
}

// if .... else

var tictPrice = 1500;

if (tictPrice < 1000) {

    console.log("It's Cheeb");
} else if (tictPrice === 1500) {
    console.log("Good");
} else {
    console.log("ex");
}
*/

// ===================================================================================================================//

// OutPut
/*
var
    x = document.getElementById("test").innerHTML,
    y = 9;

// alert("My Name Is" + " " + x + " " + "My Last Name Is" + " " + y);

// document.write("Anas"); // For Test Not TO Real Work

//x = document.getElementById("test").innerHTML = y;
console.log("Halo"); // لوحة التحكم
*/

//====================================================================================================================//

// Concatenation 
/*
var myAge = 20,
    myName = "Anas",
    myCuntre = "palestine";

document.getElementById("test").innerHTML =
    "My Age Is " + myAge + "<br>" +
    " My Name Is " + myName + "<br>" +
    " My Cuntre Is" + myCuntre;
*/


//====================================================================================================================//

// Data Type

/*

  1 _ Boolean ==> True or False
  2 _ Array ==> ["Anas", "Omar"]
  3 _ Object ==> {firstName : Ahmaed, lastName : Ayman};
  4 _ String ==> "Anas";N
  5 _ Number ==> 4, 5;
*/
/*
var product = 450,
    hasProduct = true;
if (hasProduct === false) {
    product = 400;
} else {
    product = 600;
}
var newArray = [1, 2, "Anas"],
    stringArray = ["String1", "String2"],
    newObject = {firstName : "Anas", Integer : 2},
    string1 = "Anas Omar Obaid ",
    number =  5;
document.getElementById("test").innerHTML = number;
*/


//=================================================================================================================//



// variblesName
/*
   Its A Key Word And Not To Use In Any Where
   Start Withe letters, UnderScore, $
   Dosnt Use A Spe Char ==> #,@.!^*
*/

/*
    var // My Price Product
        myOldPrice = 1000,
        myNewPrice = 900,
        myTotalPrice = myOldPrice - myNewPrice;
    document.getElementById("text").innerHTML = myTotalPrice - 15 - (1000 - 900) / 100; // 1000 - 900
    
}*/
