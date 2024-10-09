let x = {a: 1, b: 2};

function fn1(x) {
    x.a = 5;
}

function fn2() {
    x.a = 5;
}

function fn3(x) {
    x = 5;
}

function fn4() {
    x = 5;
}


fn1(x);
console.log(x);

// What happens: This function takes the object x as an argument 
// and modifies its a property to 5. Since objects are passed by 
// reference, this change will affect the original x.

// Log after fn1(x): {a: 5, b: 2}

fn2(x);
console.log(x);

// What happens: This function directly accesses the global variable x (not the argument), 
// and sets x.a = 5. Since x.a is already 5 after fn1(x), there is no change.

// Log after fn2(): {a: 5, b: 2}

fn3(x);
console.log(x);

// What happens: This function receives the object x as an argument but immediately reassigns x to 5 inside the function. This change is local to the function and does not affect the global x because the reassignment only affects the local copy of the reference. The original x outside the function remains unchanged.

// Log after fn3(x): {a: 5, b: 2}

fn4(x);
console.log(x);

// What happens: This function directly reassigns the global variable x to 5. This overwrites the reference to the original object, so x is no longer the object {a: 5, b: 2} but now the primitive value 5.

// Log after fn4(): 5
