// const clock =document.getElementById('timer')

// setInterval(function(){
// let date = new Date();
// clock.innerHTML=date.toLocaleTimeString();

// },1000)



const clock= document.getElementById('timer')

setInterval(function(){
    let date = new Date();

    clock.innerHTML= date.toLocaleTimeString()
},1000)