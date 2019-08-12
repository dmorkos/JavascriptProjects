// Terneray operator and switch statements

// var firstName = 'David';
// var age = 21;

// age >= 18 ? console.log(firstName + 'Drinks beer') : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';

/*********** Variable mutation and tyoe coersion *************************/

// var firstName = 'John'
// var age = 28

// console.log(firstName + ' ' + age) 
// // javascript converts data types as it seems neceassary, e.g it converteed age to 
// // a string, this is what we call type coersion 

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job  +'. Is he married? '
// + isMarried );

// // variable mutation 
// age = 'twenty eight';
// // Javascript can change the variable type according to the data type

// job = 'driver ';

// alert(firstName + ' is a ' + age + ' year old ' + job  +'. Is he married? '
// + isMarried );

// var lastName = prompt('WHat is his last name?');
// console.log(firstName + ' ' + lastName)

/***************** Coding challenge 2 udemy  **********************/
 
// var AvgteamJohn = (89 + 120 + 103)/3 
// var AvgteamMike = (116 + 94 + 123)/3 

// if(AvgteamJohn > AvgteamMike ) { 
//     console.log('Johns team wins avg is ' +  AvgteamJohn)
// } else {
//     console.log('Mikes team wins avg is ' + AvgteamMike )
// }

/*******************Objects and properties ********************/
// object order does not matter 

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age =  2018 - this.birthYear
    }
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'Developer';
john['isMarried'] = true;
console.log(john)

var jane = new Object();
jane.name = 'Jane'
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane)

console.log(john.calcAge())

john.calcAge();
console.log(john)

var David = {
    fullName: 'David Morkos',
    mass: 80,
    height: 1.60,
    calcBMI: function() {
        return this.mass/(this.height*this.height)
    }
}

var Tony = {
    fullName: 'Tony Morkos',
    mass: 100,
    height: 1.70,
    calcBMI: function() {
        return this.mass/(this.height*this.height)
    }
}
David.BMI = David.calcBMI()
Tony.BMI = Tony.calcBMI();

console.log(David)
console.log(Tony)

if(David.BMI > Tony.BMI ) {
    console.log(David.fullName + ' has a higher BMI ')
} else if(David.BMI < Tony.BMI) {
    console.log(Tony.fullName + ' has a higher BMI ')
} else {
    console.log('They have the same BMI')
}

/** *****************Coding challeng 5 udemy */

var Bills = {
    rest1: 124,
    rest2: 48,
    rest3: 268,
    rest4: 180,
    rest5: 42,
    calcTip: function() {
        
    }
};





