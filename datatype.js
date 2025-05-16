// ---------------------ASSIGMENT 01  ----------------------------------
//<-----------------------DATATYPE.JS----------------------------------->


var SampleText1 = "syed, zeeshan";
var SampleText2 = "MAHARASHTRA, INDIA";

console.log(SampleText1.length);    //length          
console.log(SampleText1.slice(5));  //Slice            
console.log( SampleText1.substring(4));   //Substring
console.log(SampleText1.substr(1));  //Substr
console.log(SampleText1.replace("syed", "ali"));  //Replace
console.log(SampleText1.replaceAll("zeeshan", "ali"));  //ReplaceAll
console.log(SampleText1.toUpperCase());  //To Uppercase
console.log(SampleText1.trimStart());  //Trim Start
console.log(SampleText1.trimEnd());  //Trim End
console.log(SampleText1.padStart(6, "0")); //Pad Start
console.log(SampleText1.padEnd(3, "0"));  //Pad End
console.log(SampleText2.toLowerCase());  //To Lowercase
console.log(SampleText1.concat(SampleText2));  //Concat
console.log(SampleText1.trim());  //Trim
console.log(SampleText1.charAt(3));  //Char At
console.log(SampleText1.charCodeAt(1));  //Char Code At
console.log(SampleText1.split(""));  //Split 
console.log(SampleText2.split(",")); //Split

