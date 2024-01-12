let nomeHeroi = "Linguagem"
let nivelXp = 0
let patente = ""
for(let i = 0; i <9843;i++){
    nivelXp+=1
}
console.log(nivelXp)
if(nivelXp <= 1000){patente = "Ferro"}
else if(1001 <= nivelXp && nivelXp <= 2000){patente = "Bronze"}
else if(2001 <= nivelXp && nivelXp <= 5000){patente = "Prata"}
else if(5001 <= nivelXp && nivelXp <= 7000){patente = "Ouro"}
else if(7001 <= nivelXp && nivelXp <= 8000){patente = "Platina"}
else if(8001 <= nivelXp && nivelXp <= 9000){patente = "Ascendente"}
else if(9001 <= nivelXp && nivelXp <= 10000){patente = "Imortal"}
else{patente = "Radiante"}

switch(patente){
    case "Ferro": nomeHeroi = "Rubi";break
    case "Bronze": nomeHeroi = "Python";break
    case "Prata": nomeHeroi = "Js";break
    case "Ouro": nomeHeroi = "C++";break
    case "Platina": nomeHeroi = "Git";break
    case "Ascendente": nomeHeroi = "Java";break
    case "Imortal": nomeHeroi = "C#";break

}


console.log("O Herói de nome ** "+ nomeHeroi +" ** está no nível de ** "+ patente +" **")
