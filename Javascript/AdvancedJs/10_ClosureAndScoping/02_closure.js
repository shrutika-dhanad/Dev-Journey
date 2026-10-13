function makeFunc(){
    let name="shruti";
    function displayName(){
        console.log(name)
    }
    return displayName
}

const myFunc= makeFunc()
myFunc()