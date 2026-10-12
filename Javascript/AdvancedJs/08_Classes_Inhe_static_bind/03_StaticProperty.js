class company{
    constructor(emp_name, id){
        this.emp_name=emp_name;
       
    
    }
nameofEmp(){
    return `Employee name is : ${this.emp_name} !`
}

static printMypassword(){
  return `password is : 12334556`
} 
    
}

const data = new company("shrutika")
console.log(data.nameofEmp())
// console.log(data.printMypassword())


class Manager extends company{
    constructor(emp_name, email, age){
     
     super(emp_name)

     this.email=email;
     this.age= age;
    }

}

const mnger = new Manager("Pritesh", "bhaiyya@ggl.com", 25);
console.log(mnger)
// console.log(mnger.printMypassword())
 