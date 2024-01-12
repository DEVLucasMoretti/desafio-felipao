let win = 98
let lose = 62
let level= ""
function ResultWinLose(w,l){
    return w-l
}
let result =  ResultWinLose(win,lose)
console.log(result)

if(win <= 10){level = "Ferro"}
else if(11 <= win && win  <= 20){level = "Bronze"}
else if(21 <= win && win <= 50){level = "Prata"}
else if(51 <= win && win <= 80){level = "Ouro"}
else if(81 <= win && win <= 90){level = "Diamante"}
else if(91 <= win && win <= 100){level = "Lendário"}
else{level = "Imortal"}

console.log("O Herói tem saldo ** "+ result +" ** está no nível ** "+ level + "**")
