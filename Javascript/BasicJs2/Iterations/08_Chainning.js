//we can chain the multiple methods one by one , or the mixture of map, filter, forach  etc

//when we can apply any method on element the reult is going into the next chain method

const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = arr
  .map((num) => num* 10 )
  .map((num) => num + 2)
  .filter((num) => num >= 20)
  .map((num)=> num- 5)

console.log(newArr);
