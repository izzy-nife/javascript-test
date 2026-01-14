 let input = document.querySelector(".input");
 let answer = document.querySelector(".blah");
 let decrypted = document.querySelector(".undo")
  function encrypt () {
      answer.innerText = ""
    let value = input.value.toLowerCase() ;
    console.log(value)
    spread = [... value]
    console.log(spread)
 for (i=0; i<value.length; i++) {
  
   spread[i]
  switch (spread[i]) {
      case "a" :
        answer.innerText+=4
        break ;
      case "b" :
       answer.innerText+=5
        break;
      case "c" :
       answer.innerText+=6
        break;
      case "d" :
       answer.innerText+=7
        break;
      case "e" :
       answer.innerText+=8
        break;
      case "f" :
       answer.innerText+=9
        break;
      case "g" :
       answer.innerText+=10
        break;
      case "h" :
       answer.innerText+=11
        break;
      case "i" :
       answer.innerText+=12
        break;
      case "j" :
       answer.innerText+=13
        break;
      case "k" :
       answer.innerText+=14
        break;
      case "l" :
       answer.innerText+=15
        break;
      case "m" :
       answer.innerText+=16
        break;
      case "n" :
       answer.innerText+=17
        break;
      case "o" :
       answer.innerText+=18
        break;
      case "p" :
       answer.innerText+=19
        break;
      case "q" :
       answer.innerText+=20
        break;
        case "r" :
       answer.innerText+=21
        break;
        case "s" :
       answer.innerText+=22
        break;
        case "t" :
       answer.innerText+=23
        break;
        case "u" :
       answer.innerText+=24
        break;
        case "v" :
       answer.innerText+=25
        break;
        case "w" :
       answer.innerText+=26
        break;
        case "x" :
       answer.innerText+=27
        break;
        case "y" :
       answer.innerText+=28
        break;
        case "z" :
       answer.innerText+=29
        break;
      
  }

 }
  }
  value = ""
  // for the decrypt part but i wanted it block scoped
  
 
 function decrypt () {
  let num = answer.innerText
  let nums = String(num);
  let number = [...nums]
  console.log(typeof number)
  console.log(number)
  decrypted.innerText = " "
  
  for(i=0; i<number.length; i++) {
    
   

    // switch(number[i]) { 
    //   case "1": //if the digits begins with 1 then
    //     i++
    //     case1()   
    //     break; //end of if it begins with one
    //   case "2": //if the digits begins with 2 then
    //     i++  
    //     case2()
    //       break; //end
    if(number[i] == "1"){
     i++
      case1()
    }
     if(number[i]== "2"){
    i++
      case2()
    }
     if(number[i] == "4"){
       decrypted.innerText+="a"
     }
     if(number[i]== "5"){
       decrypted.innerText+="b"
     }
     if(number[i]== "6"){
       decrypted.innerText+="c"
     }
     if(number[i]== "7"){
       decrypted.innerText+="d"
     }
     if(number[i]== "8"){
       decrypted.innerText+="e"
     }
     if(number[i]== "9"){
       decrypted.innerText+="f"
     }
    }
  }
 
 function case1 () {
    let num = answer.innerText
  let nums = String(num);
  let number = [...nums]
  switch (number[i]){
          case "0" : 
          decrypted.innerText+="g"
          break;
           case"1" : 
          decrypted.innerText+="h"
          break;
           case"2" : 
          decrypted.innerText+="i"
          break;
           case"3" : 
          decrypted.innerText+="j"
          break;
           case"4" : 
          decrypted.innerText+="k"
          break;
           case"5" : 
          decrypted.innerText+="l"
          break;
           case"6" : 
          decrypted.innerText+="m"
          break;
           case"7" : 
          decrypted.innerText+="n"
          break;
           case"8" : 
          decrypted.innerText+="o"
          break;
           case"9" : 
          decrypted.innerText+="p"
          break;} // end of embedded switch
 }
 function case2 () {
    let num = answer.innerText
  let nums = String(num);
  let number = [...nums]
  switch (number[i]){
          case"0" : 
          decrypted.innerText+="q"
          break;
           case"1" : 
          decrypted.innerText+="r"
          break;
           case"2" : 
          decrypted.innerText+="s"
          break;
           case"3" : 
          decrypted.innerText+="t"
          break;
           case"4" : 
          decrypted.innerText+="u"
          break;
           case"5" : 
          decrypted.innerText+="v"
          break;
           case"6" : 
          decrypted.innerText+="w"
          break;
           case"7" : 
          decrypted.innerText+="x"
          break;
           case"8" : 
          decrypted.innerText+="y"
          break;
           case"9" : 
          decrypted.innerText+="z"
          break;}
 }