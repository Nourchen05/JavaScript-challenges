//javascript function that hides credit card numbers in a string.

const hideCard=(str)=>{
   return str.replace(/\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm,'#### #### ####');
}

console.lo(hideCard('visa 1234 3846 3947 0971'));
//visa #### #### #### 0971

//second method
hideCard = s => s.slice(0,-4).replace(/\d/g,'#') + s.slice(-4)
