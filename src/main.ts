import './style.css'

const kamenBTN =    document.getElementById("kamenBTN")         as HTMLButtonElement
const papierBTN =   document.getElementById("papierBTN")        as HTMLButtonElement
const nozniceBTN =  document.getElementById("nozniceBTN")       as HTMLButtonElement
const novaHra =     document.getElementById("novaHra")          as HTMLButtonElement
const clovek =      document.getElementById("clovek")           as HTMLHeadingElement
const pocitac =     document.getElementById("pocitac")          as HTMLHeadingElement
const remiza =      document.getElementById("remiza")           as HTMLHeadingElement
const vitaz =       document.getElementById("vitaz")            as HTMLHeadingElement

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
function resetGame(){
    novaHra!.textContent = ""
    vitaz!.textContent = ""

    humanScore = 0
    comptuerScore = 0

    checkScore()

    kamenBTN.disabled = false
    papierBTN.disabled = false
    nozniceBTN.disabled = false
}
function checkWinner () {
    if (humanScore === 5 || comptuerScore === 5) {

        vitaz!.textContent = humanScore === 5
                            ? "Vyhral si !!!"
                            : "Vyhral Pocitac :{ "

        novaHra!.textContent = "Zacat novu hru ?"

        kamenBTN.disabled = true
        papierBTN.disabled = true
        nozniceBTN.disabled = true

    }

}

function playGame(moznostCloveka:"kamen" | "papier" | "noznice") {

    const computerChoice = getComputerChoice()
    remiza!.textContent = ""

    if (moznostCloveka === computerChoice){
        remiza!.textContent = "Remiza"
    }
    else if ((moznostCloveka === "kamen" && computerChoice === "papier") ||
            (moznostCloveka === "papier" && computerChoice === "noznice") ||
            (moznostCloveka === "noznice" && computerChoice === "kamen")) {
            comptuerScore++
    } else {
        humanScore++
    }

    checkScore()
    checkWinner()
}
kamenBTN.addEventListener   ("click", () => playGame("kamen"))
papierBTN.addEventListener  ("click", () => playGame("papier"))
nozniceBTN.addEventListener ("click", () => playGame("noznice"))
novaHra.addEventListener    ("click",() => {
    resetGame()
})