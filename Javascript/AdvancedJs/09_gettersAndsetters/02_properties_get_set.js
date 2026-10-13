function Informatin(username, id, age){
    this._username=username;
    this._id=id
    this._age=age

    Object.defineProperty(this, 'username' , {
        get : function(){
            return this._username.toUpperCase()
        },
        set : function(value){
            this._id=value;

        }
        
    })

    Object.defineProperty(this,'id',{
        get:function(){
           return this._id
        },
        set:function(val){
         this._id=val;

        }

    })
}


const data = new Informatin("shruti", 1, 21)
console.log(data.id)

































// function User(email,password){
//     this._email=email;
//     this._password=password;

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email=value
//         }
//     })
// }


// const Data = new User("Shrutika@ex.com","123")
// console.log(Data.email)