function num(){
    let tot = 0
    for (let exemplo1 of arguments){
        tot += exemplo1
    }
    console.log(tot)
}

num(1,2,3,4,5)

function num(...gugu){
    let tot = 0
    for (let exemplo1 of gugu){
        tot += exemplo1
    }
    console.log(tot)
}

num(1,2,3,4,5)

//pode colocar o valor de um parametro usando o "=" na function
function exemplo3(a, b = 2, c = 3){
    console.log(a + b + c)
}

//o js pode ignorar o valor do prametro caso use null, sobescrever caso vc coloque no final, e tambem mudar o valor caso vc coloque um valor diferente do inicial
exemplo3(1, null, 6)