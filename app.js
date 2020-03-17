// ### Function #1: Array Slice
var modifiedFood= ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var food = modifiedFood.slice(1,4);
console.log(food);

// ### Function #2: Array Splice
 
modifiedFood.splice(1,0,"noodles","icecream");
modifiedFood.splice(0,0,"pizza");
console.log(modifiedFood);

// ### Function #3: Filter
 
  var  numberArray =  ["12","324","213","4","2","3","45","4234"];
   var isEven= numberArray.filter(function(numberArray){
       return (numberArray % 2)==0;
   })
    console.log(isEven)
   var isPrime = numberArray.filter(function(numberArray){
    
    for( var i=2;i<= numberArray/2;i++)
    {
        if(numberArray%i ==0)
        {
            return false;
        }
        else
         return true;
    }
})
   console.log(isPrime);
  
//   ### Function #4: Reject

// ### Function #5: Lambda

//_(numberArray)=> {
  //  var isEven= numberArray.filter(function(numberArray){
    //    return (numberArray % 2)==0;
 //console.log()

//}

// ### Function #6: Map

var myArray = ["11", "34", "20", "5", "53", "16"];

function findSquareOfNumbers(myArray)




// ### Function #7: Reduce

var array=[1,2,3,4,5]
function multiply(...array)
{
    console.log(array.reduce(function(acc,int){
        return acc*int;
    }))
}
multiply(1,2,3,4,5)