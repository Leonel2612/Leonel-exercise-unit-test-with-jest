// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


const fromDollarToYen=(usd)=>{
    let dollarToYen=(usd/oneEuroIs.USD)*oneEuroIs.JPY
    console.log(dollarToYen)
    return dollarToYen.toFixed(2)
     }

const fromEuroToDollar=(usd)=>{
    let euroToDollar=usd*oneEuroIs.USD
    return euroToDollar.toFixed(2)
}

const fromYenToPound=(yen)=>{
    let yenToPound=yen*oneEuroIs.GBP
    console.log(yenToPound)
    return yenToPound.toFixed(2)
     }

console.log(fromYenToPound(3.5))
console.log(fromDollarToYen(3.5))

module.exports={fromEuroToDollar,fromDollarToYen,fromYenToPound}
