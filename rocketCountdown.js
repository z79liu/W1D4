var countdownGenerator = function (x) {
  /* your code here */
  var timer = x
  return function(){
    if (timer> 0) {
      console.log('T-minus ' + timer + '...')
      timer --
    } else if (timer === 0) {
      console.log('Blast Off!')
      timer --
    } else
      console.log('Rockets already gone, bub!')
    }
}




var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!