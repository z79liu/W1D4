function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var next = -1
  return function() {
      next += 1
      return list[next]
    }
}


var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 4
