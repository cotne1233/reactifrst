let arrayfirst = [ 6, -23 , 15, 21, -5, -4, 11, 3]
let arraysecond = arrayfirst.filter(function(numbers){
    return numbers > 0;
});
let numbers = arraysecond.reduce(function(sum, numbers){
    return sum + numbers;})
    console.log(numbers)
    console.log(arraysecond)

let thirdarray = ["FIRST", "SECOND", "THIRD"]
let finishedup = "SECOND";
let parameters = thirdarray.reduce((acc, string) => string === finishedup ? acc + 1 : acc, 0)
console.log(`${finishedup}- REPEATED  ${parameters} TIMES`)
function addAsync(param1, param2) {
    return new Promise((resolve, reject) => {
      if (typeof param1 === 'number' && typeof param2 === 'number') {
        const result = param1 + param2;
        resolve(result);
      } else {
        reject(new Error('error.'));
      }
    });
  }
  addAsync(5, 10)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));

