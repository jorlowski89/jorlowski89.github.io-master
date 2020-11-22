// Zadanie1

const arr = [2, 3, 4];

function sumOfCubes() {
    let newArr = [];
    arr.forEach(element => {
        cubes = Math.pow(element, 3);
        newArr.push(cubes)

    });
    sum = newArr.reduce((a, b) => a + b);
    console.log(sum);
}
sumOfCubes();

// Zadanie2
// Grupa przyjaciół postanowiła założyć tajne stowarzyszenie. Nazwa będzie pierwszą literą
// każdego z ich imion, posortowaną w porządku alfabetycznym.
// Utwórz funkcję, która pobiera tablicę nazw i zwraca nazwę tajnego stowarzyszenia.

const arr2 = ["Adam", "Marcin", "Tomasz"];

function societyName() {
    let name = '';
    arr2.forEach((element, index) => {
        letter = element[index, 0];
        name += letter;
    });
    console.log(name);
}

societyName();

// Zadanie3
// Utwórz funkcję, która przyjmuje tablicę liczb i zwraca zarówno minimalną, jak i maksymalną
// liczbę w tej kolejności.

const arr3 = [2, 1, 322, 4, 5]

function minMax() {
    const sortArr = []

    function compareNumbers(a, b) {
        return a - b
    }
    arr3.sort(compareNumbers)
    sortArr.push(arr3[0])
    sortArr.push(arr3[arr3.length - 1])
    console.log(sortArr);
}
minMax()