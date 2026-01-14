 { for (let counter=1; counter<=100; counter ++ ) {
    if (counter % 3 ==0 && counter % 5 ==0) {
        console.log("fizzbuzz")
    } else if (counter % 5 ==0) {
        console.log('buzz')
    } else if (counter % 3 ==0) {
        console.log("fizz")
    } else {
        console.log(counter)
    }
 } }
 { for (let counter = "#"; counter.length<=7; counter+="#") {
    console.log(counter)
 } }
 console.log("chesssssssssssssssss")
 
//     for( let counter =" "; counter.length<=8; counter +=" "){
//         for ( let hash = "#"; hash.length<counter.length; hash+="#" ) {
//             console.log(hash)
//     }
//     if (counter === 8) {
//         break;
//     }
//     break
//  }

function power(base, exponent) {
if (exponent == 0) {
return 1;
} else {
return base * power(base, exponent - 1);
}
}
console.log(power(2, 5));


// {   for(let counter = "\n"; counter.length<=8; counter +="\n"){

//     let space = " ";
//     let hash = "#";

//     while( space <32) {
//      console.log(space+)   
//      hash ++
//     space ++
//     }


//     }

// }
           
    
    
    //  else{
    //     console.log(counter)
    // }

    // else{
    //     console.log(space)
    // }
    

//    const isEVen = function (a) {
//     if (a==0) {
//         return true
//     } else if (a <= -1){
//        if (a==0) {
//             return true  }
//       else if(a==1) {
//        return false
//     } else {
//       return isEVen(a + 2)
//     }
 
//     }
    
//     else if(a==1) {
//        return false
//     } else {
//       return isEVen(a-2)
//     }
    
//    }
 


//     console.log(isEVen(-32))


//   function countBs(take) {
//     let num = 0
//     for (let i= 0 ; i<take.length; i++){
//       take[i] ==="B" ? num++ : num
//     }
//     return num
//   }
//  console.log(countBs("bbBnbbnBBB"))

//  function city (object) {
//     return object.address.city
//  }
 
//  console.log(city({address: {city: "Toronto"}}));


 // sum of range of numbers e.g range(1,10)
//  function sum (a,b){
//  let total = 0; let count = a
//   while(count <= b){
//        total += count ;
//     count ++
//   }
//   return total
//  }
//  console.log(sum(1,10));

//creating an array of range of numbers
// const arr = function (a,b,c)   {
//     let arr = []
//     if (!c== "undefined"){
//         for (i=a; i<=b; i+=c){
//       arr.push(i)
//     }
//     }
//   if (a<b) {
//       for (i=a; i<=b; i++){
//       arr.push(i)
//     }
//     return arr
//   }
//   if (b<a){
//       for (i=a; b<=i; i--){
//       arr.push(i)
//     }
//     return arr
//   }
//   }
//    console.log(arr(5,2));

//reversing an array
//  const reversearr = function (array){
//   let arr = []
//   for (let i= (array.length - 1) ; i>= 0; i--){

//    arr.push(array[i])
//   }
//   return arr
//  }
 
//  console.log(reversearr(["age", "apple", "banaba", "pear", "bull"]))


// recursive list pg 120  slide 135

let arrayToList = function (... numbers){


}
let list = {
value: 1,
rest: {
value: 2,
rest: {
value: 3,
rest: null
}

}
};
console.log(list);
