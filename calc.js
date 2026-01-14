const P = document.getElementById("Loan").value
const T = document.getElementById("years").value
const R = document.getElementById("Interest").value
let r = R /12
const payment = document.getElementById("totalP")
const form = document.querySelector("form")
form.addEventListener("submit", Calculate)
function Calculate(){
    const P = parseFloat(document.getElementById("Loan").value);
    const R = parseFloat(document.getElementById("years").value);
    const T = parseFloat(document.getElementById("Interest").value);
    totalP = (P + ((P * R * T)/100))
     if(isFinite(totalP)){
       payment.value = totalP.toFIxed(2)
       
       
     } else{
        console.error("Please check your values");
     }
     return console.log(payment.value);
}