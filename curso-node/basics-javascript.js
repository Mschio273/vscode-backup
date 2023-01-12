//const: Constante, não pode ser alterado seu valor
const name = "Matheus";
//let: Variavel comum
let age = 20;
const hasHobbies = true;

age = 30;


//Normal function
function summarizeUser(userName, userAge, userHasHobbies) {
    return ("Name is " + userName + ", age is " + userAge + ", and the user has hobbies: " + userHasHobbies);
}

//Arrow function
const summarizeUserArrow = (userName, userAge, userHasHobbies) => {
    return ("Name is " + userName + ", age is " + userAge + ", and the user has hobbies: " + userHasHobbies);
}

const add = (a, b) => {
    return a + b;
}

//Arrow function quando só tem um retorno pode ser simplificada assim:
const addSimplificada = (a, b) => a + b;

//Arrow function quando só tem um parametro pode ser simplificada ainda mais assim: 
const addOne = a => a + 1;

//Arrow function quando não possui nenhum parametro precisa de parenteses vazios assim:
const addRandom = () => 1 + 2;

console.log(add(1, 2));
console.log(addSimplificada(1, 2));
console.log(summarizeUser(name, age, hasHobbies));
console.log(summarizeUserArrow(name, age, hasHobbies));
console.log(addOne(1));
console.log(addRandom())

const person = {
    name: "Matheus",
    age: 20,
    //Como declarar uma function dentro de um objeto:
    greet() {
        console.log("Hi, my name is " + this.name + " age of " + this.age);
    }
}

person.greet();

const hobbies = ["Sports", "Cooking", "Dancing"];
for (let hobby of hobbies) {
    console.log(hobby);
}

//Map cria um novo array
const newArray = hobbies.map(hobby => "Hobby " + hobby);
console.log(newArray);

hobbies.push("Programming");
console.log(hobbies);

//Slice(Index de começo da copia, Numero de elementos que pretende copiar): Faz uma cópia do array
const copiedArraySlice = hobbies.slice();
console.log(copiedArraySlice);

//... Copia todos os  valores de algum objeto ou array(Spread operator):
const copiedArray = [...hobbies];
const copiedPerson = {...person };
console.log(copiedArray);
console.log(copiedPerson);

//... Junta multiplos argumentos em um array(Rest operator):
const toArray = (...args) => {
    return args;
}
console.log(toArray(1, 2, 3, 4));  

//Object descructuring
const printName = (personData) => {
    console.log(personData.name);
}

const printNameOBJD = ({name, age}) => {
    console.log(name, age);
}
printName(person);
printNameOBJD(person);

//Podemos criar uma variavel com os valores do objeto ou array que quisermos usando object descructuring:
//No caso do objeto, usamos o nome da variavel que queremos pegar
//Ja com array, essa desestruturação é feita pela posição incial para final
// const {name, age} = person;
// console.log(name, age);
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

//JavaScript não bloqueia a execução por causa de uma chamada assincrona


const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, 1500);
    });
    return promise;
} 

// const fetchData = callback => {
//     setTimeout(() => {
//         callback("Done!");
//     }, 1500);
// }

setTimeout(() => {
    console.log("Timer is done");
    fetchData().then(text => {
        console.log(text);
    });
}, 2000);

console.log("Hello!");
console.log("Hi!");
