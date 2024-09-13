
alert('Sizda hozir random sonlar chiqishni boshlaydi 😎')

let randomNum = Math.floor(Math.random() * 100)

alert(`Random son ${randomNum} chiqdi`)

let firstNum = randomNum * 2
let secondNum = randomNum / 2
let third = randomNum % 3


alert(`
    Random son ${randomNum} edi,
    ${randomNum} ni 2 ga ko'paytirganimizda ${firstNum},
    ${randomNum} ni 2 ga bo'lganimizda ${secondNum},
    ${randomNum} ni 3 ga bo'lganimizda ${third} qoldiq chiqadi,
    `)