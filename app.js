// N1
function powNumber(a ,b){
    return (Math.pow(a,b));
}

console.log(powNumber(2,3));

// N2
function priceSale(price=1000,percent=10){
    return price * percent /100;
    // console.log(sale);
}

console.log(priceSale());

// N3
function randomNumber(a){
    return Math.floor( Math.random(a) * 100 );
    
}
console.log(randomNumber(100));

// N4

function getLength(str =""){
    
 return str.length;
}
console.log(getLength('aaasus'));

