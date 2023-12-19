/* 
Write a function that determines if an array of numbers is a bitonic sequence. 
A bitonic sequence is a sequence of numbers in which the numbers are in increasing order, 
and after a certain point, they start decreasing. Extra credit: print the peak number in the sequence!

```javascript
> isBitonic([1,2,3,2])
> true // extra credit: 3

> isBitonic([1,2,3])
> false

> isBitonic([3,4,5,5,5,2,1])
> true // extra credit: 5
```
*/

const isBitonic = (array) => {
    let currentIndex = 0;
    let current = array[currentIndex];
    let peak = -1;

    for(let i = 1; i <array.length; i++){
        if(array[i] >= current){
            current = array[i];
            currentIndex = i;
        } else {
            peak = current;
            break;
        }
    }
    
    for(let i = current + 1; i < array.length; i++){
        if(array[i] <= current){
            current = array[i];
        } else if( i < array.length -1){
            return false;
        }
    }

    if(peak === -1){
        return false
    } else {
        return `${true} with peak: ${peak}`
    }
};

console.log(isBitonic([1,2,3,2]));
console.log(isBitonic([1,2,3]));
console.log(isBitonic([3,4,5,5,5,2,1]));