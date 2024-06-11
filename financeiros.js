import prompt from "prompt-sync"
let ler = prompt()

// Depositar

export function Depositar(saldo){
    console.clear()
    let depositado = 0
    console.log(`
    --------------------------    
        Valor a depositar:
    -------------------------- 
        `)
    depositado = ler()
    while(depositado <= 0){
        console.clear()
        console.log(`           Inválido!`)
        console.log(`
    -------------------------- 
        Valor a depositar:
    -------------------------- 
        `)
        depositado = ler()
    }
    if(depositado == `c`){
        depositado = 0
    }
    
    console.clear()
    saldo = saldo + Number(depositado)
    return saldo
}

// Sacar

export function Sacar(){
    console.clear()
    console.log(`
    -------------------------- 
        Valor do saque:
    -------------------------- 
        `)
    let retirado = ler()
    while(retirado <= 0){
        console.clear()
        console.log(`           Inválido!`)
        console.log(`
    -------------------------- 
        Valor do saque:
    -------------------------- 
                `)
        retirado = ler()
    }
    if(retirado == `c`){
        retirado = 0
    }
    console.clear()
    return Number(retirado)
}

// Saldo

export function Saldo(saldo){
    console.clear()
    let mensagem = `
    --------------------------------
        Seu saldo é de R$${saldo}
    -------------------------------- `
    return mensagem
}
