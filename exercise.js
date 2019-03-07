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