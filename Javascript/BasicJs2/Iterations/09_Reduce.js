let myArray = [10,5,9,6,62,12,54];
 let newOne = myArray.reduce((acc, curr)=> acc + curr , 1)
 console.log(newOne)


let shopping =[
    {
      itemName:"js course",
      itemPrice:1999
    },
    {
      itemName:"java course",
      itemPrice:2999
    },
    {
      itemName:"py course",
      itemPrice:3999
    },
    {
      itemName:"ds course",
      itemPrice:12000
    }
]

let myBill = shopping.reduce((acc,item)=> acc + item.itemPrice, 0)
console.log(myBill)