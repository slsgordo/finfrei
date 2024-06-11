
import prompt from "prompt-sync"
let ler = prompt()

export function Investimento(){
    console.clear()
    console.log(`
    --------------
        Juros
    --------------`)
    let juros = Number(ler())
    console.clear()
    console.log(`
    ----------------------------
        Tempo investido (meses)
    ----------------------------`)
    let tempo = Number(ler())
    console.clear()
    console.log(`
    ------------------------
        Capital Inicial
    ------------------------`)
    let capital = Number(ler())
    console.clear()

    let lucro = capital * (1 + (juros / 100)) ** tempo
    let mensagem = `
    ------------------------------------------
        O lucro total seria de ${lucro.toFixed(2)}.
    ------------------------------------------` 
    return mensagem
}

