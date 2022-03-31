const calculator ={
add :function (a, b)
 { return a + b }
 ,minus :function (a ,b)
 {  return a -b },
 multyfly : (a,b) =>
 {  return a * b },
 divide : (a,b) =>
 {  return a / b }
 }
 calculator.add(5,1)
 calculator.minus(5,1)
 calculator.multyfly(5,2)
 calculator.divide(6,3)

 const PlusResult = calculator.add(3,2)
 const MinusResult = calculator.minus( PlusResult ,2)
 const multyflyResult = calculator.multyfly( PlusResult, MinusResult)
 const DivideResult = calculator.divide(multyflyResult,MinusResult)

 console.log(PlusResult)
 console.log(minus)
 console.log(multyfly)
 console.log(divie)