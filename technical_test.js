// algorithms find nearest prime
const isPrime = (n)=>{
    if(n < 2) return false;
    let optimizeLength = Math.sqrt(n);
    for(let i = 2; i <= optimizeLength; i++){
        if(n % i == 0) return false; 
    }
    return true;
}

const findNearestPrime = (N) => {
    let leftNearestPrime = 0;
    for(let i = N-1; i > 1; i--){
        if(isPrime(i)) {
            leftNearestPrime = i;
            break;
        }
    }

    let rightNearestPrime = N;
    while(true){
        ++rightNearestPrime;
        if(isPrime(rightNearestPrime)) break;
    }

    let result = ( (N - leftNearestPrime) < (rightNearestPrime - N)) ? leftNearestPrime : rightNearestPrime;
    return result;
}
console.log(findNearestPrime(14));
console.log(findNearestPrime(15335));


const sortTemperatures = (temperatures) =>{
    let result = temperatures.sort((firstTem, secondTem)=>{
        let firstTemNum = parseInt(firstTem.split(" "));
        let secondTemNum = parseInt(secondTem.split(" "));
        let distanceFirst = (firstTemNum < 0) ? 0 - firstTemNum : firstTemNum;
        let distanceSecond = (secondTemNum < 0) ? 0 - secondTemNum : secondTemNum;
        
        return distanceFirst - distanceSecond; 
    });

    return result;
}
const temperatures = ["32 C", "100 F", "-2 C", "-150 F"];

sortTemperatures(temperatures);
console.log(temperatures);