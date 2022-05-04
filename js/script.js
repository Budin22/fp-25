'use strict';

// Вам нужно написать функцию, которая принимает один параметр. При первом вызове она его запоминает,
// при втором — суммирует переданный параметр с тем, что передали первый раз и тд. Например: sum(3) = 3; sum(5) = 8; sum(20) = 28


const counter = () => {
    let a =0;
    const sum = (num) => {
      return  a += num;
    }
    return {
        sum
    }
}

let methCounter = counter();
console.log(methCounter.sum(2));
console.log(methCounter.sum(2));