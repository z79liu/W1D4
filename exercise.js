// find waldon using call back
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(i) {
  console.log("Found him!");
  console.log('Waldo is at ' + 'index ' + i)
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// find waldo using for each loop

function findWaldo(arr, found) {
    arr.forEach(function(item){
      if (found(item)) {
        console.log('waldo is at ' + arr.indexOf(found(item)))
      }
})
}

function actionWhenFound(i) {
  if (i === "Waldo") {
    return i }
    else {
      return false
    }
        ;   // execute callback


}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);