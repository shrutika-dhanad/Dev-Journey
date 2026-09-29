// const btn= document.querySelectorAll('.button')
// const body = document.querySelector('body');

// btn.forEach((function(buttons){
//     buttons.addEventListener("click",function(e){
    
//     if(e.target.id==='grey' ||e.target.id==='pink' ||e.target.id==='blue'||e.target.id==='yellow' ||e.target.id==='green'
//         ||e.target.id==='aqua' ){
//         body.style.backgroundColor=e.target.id;

//     }

//     })
// }))





const btn= document.querySelectorAll('.button');
const body= document.querySelector('body')
btn.forEach(function(buttons){

buttons.addEventListener("click", function(e){
    if(e.target.id==='grey' || e.target.id==='yellow' ||e.target.id==='pink' ||e.target.id==='blue' ||e.target.id==='green' ||e.target.id==='aqua'){
        
        
   body.style.backgroundColor=e.target.id;

    }
})
})