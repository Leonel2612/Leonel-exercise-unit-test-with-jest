

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One euro should be 127.9 Yen", function(){
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(3.5)
    const expected = (3.5/1.2)*127.9 ; 
   
     expect(yen).toBe(expected); 
})


test("One euro should be 0.8", function(){
    const { fromYenToPound } = require('./app.js')

    const yen = fromYenToPound(3.5)
    const expected = 3.5*0.8 ; 
   
     expect(yen).toBe(expected); 
})

