import prompt from "prompt-sync"
let ler = prompt()



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