const apirequest = 'https://api.github.com/users/shrutika-dhanad';
let xhr=  new XMLHttpRequest()
xhr.open('GET', apirequest)

xhr.onreadystatechange=function(){

console.log(xhr.readyState)
if(xhr.readyState === 4){
    let datas = JSON.parse(this.responseText);
console.log(datas.name)
console.log(datas.id)


}

}
xhr.send()