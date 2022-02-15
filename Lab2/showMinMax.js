let min
let max

function MinMax() {
    let inputValue = document.getElementById('numbers').value

    let numbers = inputValue.split(' ').map((num) => +num)

    let isCorrect = numbers.length === 10;
    numbers.forEach((num) => {
        if (typeof num !== 'number') {
            isCorrect = false;
        }
    })

    if (!isCorrect) {
        alert('Error! Invalid input value')
    } else {
        max = Math.max(...numbers)
        min = Math.min(...numbers)
        document.cookie=`max=${max}; path=/`
        document.cookie=`min=${min}; path=/`
        alert(`Max number: ${max}
Min number: ${min}`)
    }
    console.log(document.cookie)
}

function Validate() {
    if (document.cookie) {
        let toDelete = confirm(
            `Cookies found: ${document.cookie}. Approve deletion:`
        )
        if (toDelete) {
            document.cookie=`max=${max}; path=/; max-age=${-1}`
            document.cookie=`min=${min}; path=/; max-age=${-1}`
            console.log('deleted')
        } else {
            setTimeout(() => {
                alert(`Cookies found: ${document.cookie} \b Please, reload the page`)
            }, 0)
        }
    }
}