module.exports = function getZerosCount(number) {
  // your implementation
    let res = 0;
    let i = 1;
    while(Math.pow(5,i)<=number){
        res+=Math.round(number/Math.pow(5,i));
        i++;
    }
    return res;
};// До какой точки?
