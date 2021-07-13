//Primatives: number, string, boolean
//More complex types: arrays, objects
//Function types, parameters

//Primitives are lowerCase
let age: number;

age: 2

let userName: string;

userName:'Andre'

let isInstructor: boolean;

isInstructor: false;

//More complex types: arrays
let hobbies: string[];

hobbies= ['sports','cooking']

let songs: boolean[];
let results: number[];

//objects

let person;

person = {
    name: 'Max',
    age: 32
}

//object type - set the type of variable on the right side of colon after var name
//tells ts that objects of the type sampleObject, has the structure of name field with a
//string as a value and an age with the number value. 
let sampleObject: {
    name: string;
    age: number;
};

//function params
function add(a:number, b:number){
    return a + b;
}

const result = add(2,5);

console.log(result);
