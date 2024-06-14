// Javascript String Methods

// let str1 = "this is String method";
// let str2 = 'this is String method';
// let str3 = `this is String method`;
// let str4 = new String("this is String method");

// console.log(str1);
// console.log(typeof str1);
// console.log(str2);
// console.log(typeof str2);
// console.log(str3);
// console.log(typeof str3);
// console.log(str4);
// console.log(typeof str4);

// String Methods--------------------

// CharacterData(nymber);

// {
//     let str = "thid id mmorning upon us!";
//     let CharStr = str.charAt(2)
//     console.log(CharStr);
// }

  /*  indexOf And lastInderxof Method */

// {
//     let str = "this is morning  upon us is!"
//     let indexStr = str.indexOf("is")
//     let lastStr = str.lastIndexOf("is")
//     console.log(indexStr);
//     console.log(lastStr);

//     let indexStr1 = str.indexOf("z")
//     let indexStr2 = str.lastIndexOf("z")

//     console.log(indexStr1);
//     console.log(indexStr2);

//     let indexStr3 = str.indexOf("is" ,6);
//     let lastStr1 = str.lastIndexOf("is" ,4)

//     console.log(indexStr3);
//     console.log(lastStr1);

//     let indexStr4 = str.indexOf("is" ,-1)
//     console.log(indexStr4);

//     let lastStr2 = str.lastIndexOf("is" ,1)
//     console.log(lastStr2);
// }

/* Javascript trim , trimEnd and trimStart  Methods*/

// {
//     let str = " this is morning upon us is! "
//     console.log(str);

//     let trimStr = str.trim()
//     console.log(trimStr);

//     let  trimStart1 = str.trimStart()
//     console.log(trimStart1);

//     let  trimStart2 = str.trimEnd()
//     console.log(trimStart2);
// }

/* Javascript padStart and padEnd */

// let str = "Be"
// let padStr = str.padStart(10 , "BB")
// let endStr = str.padEnd(10 , "B")
// console.log(padStr);
// console.log(endStr);

/* Javascript string split() method */
// {
// let str = "Hello! Javascript undefined Hello Hello"

// let str1 = str.split("")
// let str2 = str.split(" ")
// let  str3 = str.split("e")
// let  str4 = str.split()

// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);
// }

/* Javascript string concat method */

// {
//     let str = "Hello! Javascript undefined Hello Hello"
//     let str1 = "Datascript"
//     let str2 = "DateDemences"
//     console.log(str+ "" + str1 + "" + str2);

//     let concatStr = str.concat(" ", str2 , " " , str1)

//     console.log(concatStr);
// }

/* Javascript string include Method */

// {
//     let str = "Hello! Javascript undefined Hello Hello"
//     let includeStr = str.includes("Hello")
//     let includeStr1 = str.includes("Hello" , 0)

//     console.log(includeStr);
//     console.log(includeStr1);
// }

/* Javascript string length method */

// {
//     let str = " Hello Java! "
//     console.log(str.length);
// }

// -----------lec 12 -------------------


/* String toUpperCase And toLowerCase Method */

// {
// let str = "Dog is very danger and dog is honest but Cat is very cute and cat is lazy!"

// let toUpperStr = str.toLowerCase()
// let toLowerStr = str.toLowerCase()

// console.log(toUpperStr);
// console.log(toLowerStr);
// }i

/* String Slice And Substring  methods */

// let str = "this is morning upon us!"

// let SliceStr = str.slice(10)
// let SliceStr = str.slice(0)
// let  SliceStr = str.slice(-10)

// let SliceStr1 = str.slice(10 , 22)
// let SliceStr1 = str.slice(10 , -5)

// console.log(SliceStr1);

// let Substr = str.substring(10 , -20)
// let Substr1 = str.slice(10 , -5)

// console.log(Substr);
// console.log(Substr1);

/* Javascript replace And replaceAll Method */

// repalce(Regx)
// replaceAll(Regx)

// {
//   let str = "Dog is very danger and Dog is dog honest but Cat is very cute and cat is lazy!"
//   let repalceStr = str.replace("Dog" , "Cat")
//   let repalceStr = str.replace("dog" , "Cat")
//   let repalceStr = str.replace("/dog/gi" , "Cat")

//   console.log(repalceStr);

//   let replaceAll = str.replaceAll("Dog" , "Cat")
//   let replaceAll = str.replaceAll("/Dog/gi" , "Cat")

//   console.log(replaceAll);
// }

/* Javasccript CharCodeAt() */

// {
//   let str = "Hello";

//   // let CharStr = str.charCodeAt(10) 
//   // let CharStr = str.charCodeAt(2)

//   let repatStr = str.repeat(2)

//   console.log(CharStr);
//   console.log(repatStr);
// }
