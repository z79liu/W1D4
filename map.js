function Design (arr, callback) {
  NewList = []
  for (i = 0 ; i < arr.length ; i++ ){
    NewList.push(callback(arr[i]))
  }
  return NewList
}

function Double (x) {
  y = x * 2
  return y
}


numbers = [1,2,3]
console.log(Design(numbers,Double))