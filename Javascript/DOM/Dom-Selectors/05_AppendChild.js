function  addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML=`${langName}`;
    document.querySelector('.language').appendChild(li)

}

addLanguage("Java")
addLanguage("cpp")

//Optimised Way

function addOptimLang(langName){
    const list = document.createElement('li')
    list.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(list)
}
addOptimLang("reactjs")

//3rd way : Edit  add  a new Language in list at 2nd posstion

const SecondLang= document.querySelector('li:nth-child(2)')
const newLi= document.createElement('li')
newLi.textContent="Mojo"
SecondLang.replaceWith(newLi)

//4th way - chnagee the 1st lang name 

const firstLanguage= document.querySelector('li:first-child')
firstLanguage.outerHTML='<li>TypeScript</li>'


//Remove

const lastLang= document.querySelector('li:last-child')
// lastLang.remove() -it can remove the reactjs
