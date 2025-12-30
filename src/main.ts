import './style.css'

const kamenBTN =document.getElementById("kamenBTN")         as HTMLButtonElement
const papierBTN = document.getElementById("papierBTN")      as HTMLButtonElement
const nozniceBTN = document.getElementById("nozniceBTN")    as HTMLButtonElement
const novaHra = document.getElementById("novaHra")          as HTMLButtonElement

const clovek =document.getElementById("clovek")             as HTMLHeadingElement
const pocitac = document.getElementById("pocitac")          as HTMLHeadingElement
const remiza = document.getElementById("remiza")            as HTMLHeadingElement
const vitaz = document.getElementById("vitaz")              as HTMLHeadingElement

let humanScore:number = 0
let comptuerScore:number = 0


const getComputerChoice = () => {
    let choice:number = Math.floor(Math.random() *3)

    if (choice === 0){
        return "kamen"
    } else if (choice ===1){
        return "noznice"
    } else {
        return "papier"
    }
}


function checkScore () {
    clovek!.textContent = `Skore cloveka  ${humanScore} :`
    pocitac!.textContent = `${comptuerScore} Skore pocitaca`
}

function checkWinner () {
    if (humanScore === 5) {
        vitaz!.textContent = "Vyhral si !!!"
        novaHra!.textContent = "Zacat novu hru ?"

        kamenBTN.disabled = true
        papierBTN.disabled = true
        nozniceBTN.disabled = true

        novaHra.addEventListener("click",() => {
            novaHra!.textContent = ""
            vitaz!.textContent = ""

            humanScore = 0
            comptuerScore = 0

            checkScore()

            kamenBTN.disabled = false
            papierBTN.disabled = false
            nozniceBTN.disabled = false
        })
    }

    if (comptuerScore === 5) {
        vitaz!.textContent = "Vyhral Pocitac :{"
        novaHra!.textContent = "Zacat novu hru ?"

        kamenBTN.disabled = true
        papierBTN.disabled = true
        nozniceBTN.disabled = true

        novaHra.addEventListener("click",() => {
            novaHra!.textContent = ""
            vitaz!.textContent = ""

            humanScore = 0
            comptuerScore = 0
            checkScore()

            kamenBTN.disabled = false
            papierBTN.disabled = false
            nozniceBTN.disabled = false
        })
    }
}

kamenBTN?.addEventListener("click", () => {
    const computerChoice = getComputerChoice()

    if (computerChoice === "papier") {
        comptuerScore++
        remiza!.textContent = ""
    } else if (computerChoice === "noznice") {
        humanScore++
        remiza!.textContent = ""
    } else {
        remiza!.textContent = "Remiza"
    }
    checkScore()
    checkWinner()
})

papierBTN?.addEventListener("click", () => {
    const computerChoice = getComputerChoice()

    if (computerChoice === "kamen") {
        humanScore++
        remiza!.textContent = ""
    } else if (computerChoice === "noznice") {
        comptuerScore++
        remiza!.textContent = ""
    } else {
        remiza!.textContent = "Remiza"
    }

    checkScore()
    checkWinner()
})

nozniceBTN?.addEventListener("click", () => {
    const computerChoice = getComputerChoice()

    if (computerChoice === "kamen") {
        comptuerScore++
        remiza!.textContent = ""
    } else if (computerChoice === "papier") {
        humanScore++
        remiza!.textContent = ""
    } else {
        remiza!.textContent = "Remiza"
    }

    checkScore()
    checkWinner()
})