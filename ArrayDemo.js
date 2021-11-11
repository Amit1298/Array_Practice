let origDogs = ["bullding","Beagle","Labrador"];
let cats = new Array("Americal Curl","Bengal");
let birds = new Array("Talcons","Docks","Flaningoes");

let sliceDogs = origDogs.slice(1,2);
//console.log(sliceDogs);
let copyDogs = [...origDogs];                     //copy element 
let dogs = origDogs.slice(0);

let pushDogs = dogs.push("Golden Retriver");
let popDog = dogs.pop();
// console.log(popDog);
dogs[dogs.length] = "Poople";
//console.log(dogs);

let addFirst = dogs.unshift("Golden Retriver");       //shift at start
// console.log(dogs);
let shiftDogs = dogs.shift();                        //it delete the first one
// console.log(dogs);

dogs.splice(2,3,"Pugs","Boxer");
console.log(dogs);

let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs,...cats,...birds].toString();
let sortDogs = dogs.slice(0).sort();
// console.log(animals);
console.log(newAnimal);
console.log(sortDogs);