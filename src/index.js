module.exports = function getZerosCount(number) {
  // your implementation
    let res = 0;
    let i = 1;
    while(Math.pow(5,i)<number){
        res+=Math.floor(number/Math.pow(5,i));
        i++;
    }
    return res;
};

