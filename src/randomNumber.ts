function randomNumber() {
    let min = Math.ceil(0)
    let max = Math.floor(9)
    return String(Math.floor(Math.random() * (max - min + 1) + min))
}

export function fourRandomNumber() {
    return randomNumber() + randomNumber() + randomNumber() + randomNumber()
}



