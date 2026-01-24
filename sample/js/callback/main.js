function print(callback) {
    const result = callback();
    console.log("Callback Result: ", result);
}

const greet = () => "Hello, World!";

print(greet);