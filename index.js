

function iterativeLog(array){
  array.forEach(function(element, index) {
console.log(`${index}: ${element}`)})}

function iterate(callback){
var array = [1, 2, 3];
array.forEach(callback);
return array;
}

function doToArray(array, callback){
  array.forEach(callback);
}


//Define a function, iterativeLog(), that accepts an array.
/*Define a function, iterate, that accepts a callback.
Within the iterate() function, you should initialize an array —
it can contain anything you want. */
//Define a function, doToArray that accepts an array and a callback.

//Call .forEach() on this array, and inside the callback, log each element with the format ${index}: ${element}.
//Call .forEach() on this array, passing the callback to .forEach(). Then return the array that you initialized.
//Call .forEach() on the array, passing the callback as the forEach callback.
