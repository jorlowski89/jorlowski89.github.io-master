// Zadanie 1
// Pobierz liczbę z użyciem metody prompt i sprawdź, czy jest ona parzysta.

function task1() {
    const value1 = prompt('Zadanie1 - Wpisz cyfrę.');
    const value1Conv = parseInt(value1)
    if (isNaN(value1Conv)) {
        console.log(`Podaj wartość liczbową.`);
    } else if (value1Conv % 2 === 0) {
        console.log(`${value1Conv} - liczba parzysta`);
    } else if (value1Conv % 2 !== 0) {
        console.log(`${value1Conv} - liczba nieparzysta`);
    }
}
// task1()

// Zadanie 2
// Pobierz liczbę z użyciem metody prompt (lub wpisz ją jako stałą, jeżeli użycie
// metody prompt sprawia Ci trudność) i sprawdź, czy mieści się w przedziale <-
// 35;2) lub (11;27>

function task2() {
    const value2 = prompt("Zadanie2 - Podaj liczbę");
    const value2Conv = parseInt(value2);
    if (value2Conv >= -35 && value2Conv < 2) {
        alert(`Liczba ${value2Conv} mieści się w przedziale <-35;2)`);
    } else if (value2Conv > 11 && value2Conv <= 27) {
        alert(`Liczba ${value2Conv} mieści się w przedziale (11;27>`);
    } else if (isNaN(value2Conv)) {
        alert("Proszę podać wartość liczbową.")
    } else {
        alert(`Liczba ${value2Conv} nie mieści się w żadnym przedziale`);
    }
}
// task2();

// Zadanie 3
// Pobierz liczbę z użyciem metody prompt i za pomocą instrukcji warunkowej switch wyświetl w konsoli komunikat:
//     • „1” - zdałeś egzamin,
//     • „2” - „zaliczona tylko teoria”,
//     • „3” - „zaliczona tylko praktyka”,
//     • „0” - „egzamin do poprawy”.

function task3() {
    const value3 = prompt("Zadanie3 - Podaj status.");
    const value3Conv = parseInt(value3);
    switch (true) {
        case value3Conv === 1:
            console.log(`„1” - zdałeś egzamin`);
            break;
        case value3Conv === 2:
            console.log(`„2” - „zaliczona tylko teoria”`);
            break;
        case value3Conv === 3:
            console.log(`„3” - „zaliczona tylko praktyka”`);
            break;
        case value3Conv === 0:
            console.log(`„0” - „egzamin do poprawy”`);
            break;
        default:
            console.log(`Podaj prawidłową wartość`);
            break;
    }
}
// task3();

// Upewnijcie się, czy pobrana wartość jest na pewno liczbą (z użyciem metody typeof). Jeżeli nie
// jest, proszę przekonwertować ją na liczbę (parseInt oraz parseFloat)


// Zadanie 4
// Napisz funkcję, która zwraca słowo something połączony ze spacją „ ”.
function task4(word) {
    console.log(`Something ${word}`);
}

// task4("In The Way");

// Zadanie 5
// Stwórz funkcję obliczającą liczbę wygranych, remisów i przegranych oraz obliczającą liczbę
// punktów, które drużyna piłkarska uzyskała do tej pory.
// • wygrane otrzymują 3 punkty
// • remisy otrzymują 1 punkt
// • porazki dają 0 punktów
const winPoints = 3;
const drawPoints = 1;
const loosePoints = 0;

function task5(wins, draw, looses) {
    const score = (wins * winPoints) + (draw * drawPoints) + (looses * loosePoints)
    console.log(score);
}

// task5(5, 6, 2);

// Zadanie 6
// Farmer prosi cię, abyś powiedział mu, ile nóg można policzyć wśród wszystkich jego zwierząt.
// Rolnik hoduje trzy gatunki:
// • kurczaki = 2 nogi
// • krowa = 4 nogi
// • świnie = 4 nogi
// Rolnik policzył swoje zwierzęta i podaje sumę częściową dla każdego gatunku. 
//Musisz zaimplementować funkcję, która zwraca całkowitą liczbę nóg wszystkich zwierząt.

function task6(chickens, cows, pigs) {
    const chickensLegs = 2;
    const cowsLegs = 4;
    const pigsLegs = 4;
    const animalsLegs = (chickens * chickensLegs) + (cows * cowsLegs) + (pigs * pigsLegs)
    console.log(animalsLegs);
}

// task6(21, 6, 8);

// Zadanie 7
// Utwórz funkcję, która przyjmuje liczbę całkowitą i zwraca silnię tej liczby całkowitej. Oznacza to,
// że liczba całkowita pomnożona przez wszystkie dodatnie niższe liczby całkowite.

function silnia(n) {
    if ((n == 0) || (n == 1))
        return 1
    else {
        let result = (n * silnia(n - 1));
        return result
    }
}


function dupa(n) {
    if ((n == 0) || (n == 1)) {
        return 1
    } else {
        let result = (n * dupa(n - 1))
        return result;
    }
}