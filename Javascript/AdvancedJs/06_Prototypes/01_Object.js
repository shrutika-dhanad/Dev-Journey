function users(username, score){
    this.username=username;
    this.score=score;

}

users.prototype.increement=function(){
    this.score++;
}
users.prototype.printMe=function(){
    console.log(`price is ${this.score}`)
}
const chai = new users("shrutika", 20)
console.log(chai)
chai.printMe()
