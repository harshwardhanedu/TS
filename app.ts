//class

class App{
    name ="Harsh"
    constructor(name:string){
        this.name=name
        console.log(name);
        
    }
    getName():string
    {
  
        return this.name
    }
}
let a1=new App("Harsh");
console.log(a1.getName());
