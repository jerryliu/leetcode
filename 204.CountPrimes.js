var countPrimes = function(n) {
    let countAry=[];
    for (let i=0;i<n;i++){
        countAry.push(true);
    }
    countAry[0]=false;
    countAry[1]=false;
    for(let j=2;j*j<countAry.length;j++){
        if(countAry[j]){
            for (let k=j;k*j<countAry.length;k++){
                console.log(k*j,"----");
                let tmp= k*j ;
                countAry[tmp]=false;
            }
        }
    }
    return  countAry.filter(Boolean).length;
};

var n =20;
// countPrimes(n);
console.log(countPrimes(n));

const arr = [1,2,5,3, -1, -1, 0, 1,2];
const count = arr.sort()

console.log(count);