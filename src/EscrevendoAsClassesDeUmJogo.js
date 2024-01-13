class Hero{
    constructor(name,age,type){
        this.name = name;
        this.age = age;
        this.type = type;    
    }

    Attack(){
        let power= "";
        switch(this.type){
            case "mago": power = "magia";break
            case "guerreiro": power= "espada";break
            case "ninja": power="shuriken";break
            case "monge": power = "artes marciais";break
            default : power= "um poder genérico";break
        }
        console.log(`O ${this.type} atacou usando ${power}`)
    }
}

let  hero = new Hero("Mergeuil",21,"mago")
let hero2 = new Hero("Leonidas",32,"guerreiro")
let hero3 = new Hero("Poligtomo",78,"monge")
let hero4 = new Hero("Sishui",19,"ninja")
let hero5 = new Hero("Felipão",28,"Espartano")
hero.Attack()
hero2.Attack()
hero3.Attack()
hero4.Attack()
hero5.Attack()
