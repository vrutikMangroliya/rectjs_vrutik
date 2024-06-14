//1.  Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloworld() {
    return function() {
      return "Hello World";
    };
  }
  const helloFun = createHelloworld();
  console.log(helloFun());

Outputs: "Hello World"





// 2.  Write a JavaScript function that returns a passed string with letters in
//   alphabetical order.

function sortStringAlphabetically(inputString) {
    const charArray = inputString.split('');
    charArray.sort();
    const sortedString = charArray.join('');
    return sortedString;
}
const input = "hello";
const sortedResult = sortStringAlphabetically(input);
console.log("Sorted result:", sortedResult); // Output: "ehllo"
console.log