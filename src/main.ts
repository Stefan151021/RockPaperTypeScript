import './style.css'


let humanScore:number = 0
let comptuerScore:number = 0

const getComputerChoice = () => {
    let choice:number = Math.floor(Math.random() *3)

    if (choice === 0){
        console.log(choice)
        return "kamen"
    } else if (choice ===1){
        console.log(choice)
        return "noznice"
    } else {
        console.log(choice)
        return "papier"
    }
}




const test =document.getElementById("log")

test?.addEventListener("click",() => {
    const computerChoice = getComputerChoice()
    console.log(computerChoice)

})