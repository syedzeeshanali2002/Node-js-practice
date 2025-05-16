// ---------------------ASSIGMENT 04  ----------------------------------



var x = 10    //it is a number 
var y = "10"  //it is a string 
var z = 12

console.log(x===y)   //equal to and equal type 
console.log(x!=z)    // not qual to 
console.log(x>y)     // grater then
console.log(x<y)     //less then 
console.log(x>=y)    //grater then equal to 
console.log(x<=z)    // less then equal to 
console.log(x)



var temp = 20 
if (temp > 0 ){
    console.log("weather is good");
}
else{
    console.log("weather is bad")
}


//-------------------------------------------------------------------------------------------------------------------------------

//------------------->[  &&  ]<-----------  LOGICAL AND 
//------------------->[  ||  ]<-----------  LOGICAL OR
//------------------->[  !   ]<----------- LOGICAL NOT


//------------------->  && <-----------  LOGICAL AND 
var temp = 20 
if (temp > 0  && temp <= 30 ){        // -------BOTH CONDITION NEED TO BE TRUE 
    console.log("weather is good");
}
else{
    console.log("weather is bad")
}


//---------------------------------------------------------------------------------------------------------------------------

//-------------------> || <-----------  LOGICAL OR


var temp = 2000
if (temp <= 0  || temp > 30 ){        // ,-------ONE CONDITION NEED TO BE TRUE 
    console.log("weather is bad");
}
else{
    console.log("weather is good")
}



//---------------------------------------------------------------------------------------------------------------------------

//-------------------> ! <-----------  LOGICAL NOT





var isSunny = true
if (!isSunny ){        // ,-------FALSE TO BE TRUE   TRUE TO BE FALSE  using this operator we can flip true to false ,false to true 
    console.log("its cloudy");
}
else{
    console.log("its sunny")
}


var isSunny1 = false
if (isSunny1 ){        // ,-------FALSE TO BE TRUE   TRUE TO BE FALSE  
// using this operator we can flip true to false ,false to true 
    console.log("its sunny");
}
else{
    console.log("its cloudy")
}





var type = "syed"
console.log(typeof(type))
