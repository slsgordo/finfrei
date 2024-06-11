import prompt from "prompt-sync"
let ler = prompt()

export function Escolhas(){
    let escolha
    console.log(`
        Escolha uma das opções:
    -------------------------------    
            1- Sacar 
            2- Depositar
            3- Ver saldo
            4- Investimento
            5- Encerrar
    -------------------------------         `);
    escolha = Number(ler())
    return escolha
}