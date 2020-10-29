let wakeDog = function (dogn, dogb){
    return `Wake ${dogn} the ${dogb}`
}

let leashDog = function (name, breed){
    return `Leash ${name} the ${breed}`
}

let walkToPark = function (name, breed){
    return `Walk to the park with ${name} the ${breed}`
}

let throwFrisbee = function (name, breed){
    return `Throw the frisbee for ${name} the ${breed}`
}

let walkHome = function (name, breed){
    return `Walk home with ${name} the ${breed}`
}

let unleashDog = function (name, breed){
    return `Unleash ${name} the ${breed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
    return routine.map(fun => fun(dogName, dogBreed))
}