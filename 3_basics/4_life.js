// Immediately Invoked Function Expressions

(function Connection(){
    console.log('DB Connected');
})();

((name) => {
    console.log(`Connection Fail ${name}`);
})('Admin')