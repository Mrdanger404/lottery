const search = document.getElementById("searching");
const results = document.getElementById("result");
const numbersShow = document.getElementById("numbers")

const numbers = [2000, 5000, 3000, 1000, 4853, 2984, 6942, 1023, 5739];

numbersShow.innerHTML = numbers.map((items) => items)

const randomNumbers = () => {
    const random = Math.floor(Math.random() * 9999 + 1000);
    search.innerHTML = `searching lucky number ${random}`
    return random
    
}

const result = () => {
    const randomNumber = randomNumbers();

    if(numbers.includes(randomNumber)){
        results.innerHTML = `result ${randomNumber}`;
    } else{
        setTimeout(result, 10)
    }
}