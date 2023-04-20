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

// 5

const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "6.8886",
		diffFormated: "0.0082",
		rate: 6.8886,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0082,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.4869",
		diffFormated: "0.0334",
		rate: 6.4869,
		name: "სომხური დრამი",
		diff: -0.0334,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1820",
		diffFormated: "0.0010",
		rate: 1.182,
		name: "ჩეხური კრონა",
		diff: 0.001,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7599",
		diffFormated: "0.0056",
		rate: 2.7599,
		name: "ევრო",
		diff: -0.0056,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
];



function getRate(currencies) {
    const rates = currencies.map(curr => curr.rate);
    return Math.min(...rates);
  }
  
  console.log(getRate(currencies));