//we dont give the function  name in call back function

// foreach loop: perform the specified action on each element.
// /it can return the three aruguments in callback func valye, index, array:[]
//for each lop cannt return any value (return)

const myArray=[10,20,30,40,50,60,70,80,90,100];

    
myArray.forEach(function(values){
    console.log(values)
})

myArray.forEach((value)=>{
console.log(value)
})


function printMe(item){
    console.log(item)
} 
console.log("giving the refence onluy")
myArray.forEach( printMe)    //only give the reference dont execute it using paranthisis()



const myStringArray=["shrutika" , "vaibhavi", "tejashri", "priti"];
myStringArray.forEach((val, index, Array)=>{
    console.log(val, index , Array)
})




//the objects inside an array and accessing the value from those objects.

const programming=[
    {
    languageName:"javascript",
    languageFileName:"js",
    },
    {
    languageName:"python",
    languageFileName:"py",
    },
    {
    languageName:"ruby",
    languageFileName:"rb",
    }
]


programming.forEach((items)=>{
console.log(items)  //it can return whole array of object
console.log(items.languageName)   //it can return only lang name 
console.log(items.languageFileName)  //it can return only lang-file name 

 
}) 


// const coding =["js" , "ruby","python","javascript"];
// const values=coding.forEach((item) => {
//     console.log(item);   //it returns the js,ruby,py,js and undefined.

//     return item 
// })

// console.log(values)   



const coding =["js" , "ruby","python","javascript"];
const values=coding.forEach((item) => {
  
    return item   // it can return the undefindd beacuase the forEach loop dosent return any value.
    
})

console.log(values)   