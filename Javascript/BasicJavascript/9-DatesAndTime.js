///Date : date is objevt
//        month is start from 0  so 0 menas jan , 1 means feb and so on.
// wwhen we can write a date in sigle digit it can start a month frm 0(zero) and
// when we can write  a date in YY|MM|DD it can start from 1
const myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let meNewDate = new Date(2026, 7, 25);
// console.log(meNewDate.toDateString());

// wwhen we can write a date in sigle digit it can start a month frm 0(zero) and

let meNewDate = new Date(2026, 7, 25, 1, 20, 45);
console.log(meNewDate.toLocaleString());

// when we can write  a date in YY|MM|DD it can start from 1
const date = new Date("2026-08-25 1:50");
console.log(date.toLocaleString());

const myDat = new Date("08-25-2025");
console.log(myDat.toLocaleString());

const myCreatedDate = new Date("01-05-2025");
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getDate());


console.log(Math.floor(Date.now()/1000))


let mydates= new Date()
console.log(mydates.getDate())
console.log(mydates.getMonth()+1)
console.log(mydates.getDay())
console.log(mydates.getFullYear())

mydates.toLocaleString('default', {
    weekday : "short", 
    timeZone : " ",

})
