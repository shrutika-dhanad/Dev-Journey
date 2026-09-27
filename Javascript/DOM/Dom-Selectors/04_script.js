const div=document.createElement('div')
console.log(div)

div.id="myDiv";
div.className="myDivClass"
div.setAttribute("title" ,"shrutika learning the JavaScript..")

div.style.backgroundColor="yellow";
div.style.border="2px black"
div.style.padding="5px"
div.style.margin="10px";


const text=document.createTextNode("hello everyone we are learn about the Js dom")
div.appendChild(text);


document.body.appendChild(div)