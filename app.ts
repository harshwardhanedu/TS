//Interface in type script
interface userType{
    name:string,
    age:number,
    getName:()=>string
}
let users:userType=
{
    name:'Shivani Ghanekar',
    age:30,
    getName:function()
    {
        return "Shivani Ghanekar"
    }
}
console.log(users.getName());
