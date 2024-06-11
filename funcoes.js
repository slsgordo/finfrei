
import prompt from "prompt-sync"
let ler = prompt()

// Base

/*
export function NOME (n){ <-----
    let dobro = n * 2

    return VARIAVÉL <----
}
*/

// PROCESSAMENTO --------------------------------------------------------------------------

// Soma

export function soma (n, som){
    let valor = n + som
    return valor
}

// Subtração

export function subtracao (n, sub){
    let valor = n - sub
    return valor
}

// Dobros

export function dobro (n){
    let valor = n * 2
    return valor
}

// Divisão

export function divisao (n, div){
    let valor = n / div
    return valor
}

// Resto

export function resto (n, res){
    let valor = n % res
    return valor
}

// Elevação

export function elev (n, sob){
    let valor = n ** sob
    return valor
}

// Par ou Impar

export function pi (n){
    let valor = n % 2
    let mensagem = ''
    if(valor == 0){
        mensagem = 'par'
    }
    else{
        mensagem = 'impar'
    }
    return mensagem
}

// Média Aritimética

export function MediaAritimetica (valor, array){
    let soma = 0
    for(let contador = 0;contador < valor; contador++){
        soma = soma + array[contador]
    }
    let res = soma / valor
    return res
}

// Primos

export function Primos (valor){
    let mensagem = ``
    let sub = valor
    let div = 0
    let pri = 0
    for(let cont = 0;cont < valor;cont++){
        div = valor % sub
        if(div == 0){
            pri++
        }
        sub--
    }
    if(pri == 2){
        mensagem = ` é primo`
    }
    else{
        mensagem = ` não é primo`
    }
    return valor + mensagem
}

// Inversor

export function Inversor (quant){
    let array = []
    let array2 = []
    for(let cont = 0;cont < quant;cont++){
        console.log(`valor`)
        array.push(Number(ler()))
        console.clear()
    }
    let sep = array.length - 1
    let cont = 1
    while(cont <= array.length){
        array2.push(array[sep]) 
        sep--
        cont++
    }
    return array2
}

// Porcentagem

export function Porcentagem (valor, porc){
    let res = (valor / 100) * porc
    return res
}

// Fatorial


export function Fatorial (valor){
    let res = 1
    let fixo = valor
    for(let cont = 0;cont < fixo;cont++){
        res = res * valor
        valor--
    }
    return res
}


// ARMAZENAMENTO --------------------------------------------------------------------------

// Boas-Vindas

export function BoasVindas (nome){
    return `Seja bem-vindo ` + nome + `!`
}

// Ler Números

export function LerNumero (mensagem){
    console.log(mensagem)
    let valor = Number(ler())
    return valor
}

// Ler Strings (Texto)

export function LerString (mensagem){
    console.log(mensagem)
    let valor = ler()
    return valor
}

// Ler Strings (Texto Maiúsculo)

export function LerStringM (mensagem){
    console.log(mensagem)
    let valor = ler().toUpperCase()
    return valor
}

// Ler Array    

export function LerArray (valor, array){
   for(let cont = 0; cont < valor; cont++){
    console.log(`Valor:`)
    array.push(Number(ler()))
    console.clear()
   }
    return array
}