
function plus1(x){
    return x+1;
}
console.log(plus1(3));

let square = function(x){
    return x*x;
};
console.log(square(plus1(3))); // chama duas funções em uma única expressão


// Quando funções recebem as propriedades
// de um objeto, as chamamos de "métodos"
// Todos os objetos de JavaScript têm métodos.
let a = [];
a.push(1, 2, 3);
a.reverse();

const points = [
    {x:0, y:0},
    {x:1, y:1}
];

points.dist = function(){
    const p1 = this[0];
    const p2 = this[1];
    const a =  p2.x-p1.x;
    const b = p2.y-p1.y;
    return Math.sqrt(a*a+b*b).toFixed(3);
};
console.log(points.dist());


// Instruções de estruturas de controle Javascript comuns
// As instruções JavaScript incluem condicionais e laços

function abs(x){
    if(x >= 0){
        return x;
    }
    return -x;
};

function factorial(n){
    let product = 1;
    while(n > 1){
        product *= n;
        n--;
    }
    return product;
}

console.log(factorial(4));

function factorial2(n){
    let product = 1;
    for(let i = 2; i<=n; i++){
        product *= i;
    }
    return product;
}

console.log(factorial2(5));