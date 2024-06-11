import prompt from "prompt-sync"
let ler = prompt()
import { LerNumero, LerString } from "./exibicao.js"
import { Depositar, Sacar, Saldo } from "./financeiros.js"
import { Escolhas } from "./menu.js"
import { Investimento } from "./investimento.js"

let continuar = true
let ValorInicial = 0 
let opcao
let resposta
let exibir
let add
let sub
let investido
console.clear()

console.log(`
    ---------------------------
    Faça seu primeiro depósito!
    ---------------------------`)
console.log(`   Pressione Enter para continuar`)
ler()
let saldo = Depositar(ValorInicial)

while(continuar){
    opcao = LerNumero(`
   ---------------------------------------------------------     
    Digite 1 para encerrar o programa ou 2 para prosseguir.
   ---------------------------------------------------------`)
    if(opcao == 1){
        continuar = false
    }
    else{
        console.clear()
        resposta = Escolhas()
        if(resposta == 1){
            sub = Sacar(saldo)
            saldo = saldo - sub
        }
        else if(resposta == 2){
           add = Depositar(ValorInicial)
           saldo = saldo + add
        }
        else if(resposta == 3){
            exibir = Saldo(saldo)
            console.log(exibir)
        }
        else if(resposta == 4){
            investido = Investimento()
            console.log(investido)
        }
        else if(resposta == 5){
            continuar = false
        }
        else{
            console.log(`Inválido`)
        }
    }
}

console.clear()
console.log(`
    ------------------------------------------
        Obrigado por utilizar o programa!
    ------------------------------------------
    `);