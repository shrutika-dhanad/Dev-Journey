const requestUrl='https://api.github.com/users/shrutika-dhanad'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
console.log("shrutika")

xhr.onreadystatechange=function(){
console.log(xhr.readyState)
if(xhr.readyState === 4 ){
    const data = JSON.parse(this.responseText)
    console.log(typeof data)
    console.log(data.followers)
    console.log(data.name)


}
}
xhr.send()
