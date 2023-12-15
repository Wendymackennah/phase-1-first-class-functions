// receivesAFunction function
function receivesAFunction(callback) {
    // Call the callback function
    callback();
}

// returnsANamedFunction function
function returnsANamedFunction() {
    // Return a named function
    return function namedFunction() {
        console.log("This is a named function!");
    };
}

// returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        console.log("This is an anonymous function!");
    };
}

