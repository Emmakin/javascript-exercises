const leapYears = function(n) {
   if(n % 4 === 0){
    return true;
   }
   else if( n % 4 !== 0) {
    return false;
   } else{
    return true;
   }

};

// Do not edit below this line
module.exports = leapYears;
