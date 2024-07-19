/*값의 최댓값을 구하는 알고리즘(순차적)*/
function maxNum(num1, num2, num3) {
    let max = num1;
    if (max < num2) max = num2;
    if (max < num3) max = num3;
    return max;
}

console.log(maxNum(5, 30, 2));  //30

/*값의 최솟값을 구하는 알고리즘(순차적)*/
function minNum(num1, num2, num3) {
    let min = num1;
    if (min > num2) min = num2;
    if (min > num3) min = num3;
    return min;
}
console.log(minNum(5, 30, 2));  //2

/*3개의 값 중 중앙값을 구하는 알고리즘*/
function medNum(num1, num2, num3) {
    if (num1 >= num2) {
        if (num2 >= num3) {
            return num2;
        } else if (num1 <= num3) {
            return num1;
        } else {
            return num3;
        }
    } else if (num1 > num3) {
        return num1;
    } else if (num2 < num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(medNum(4, 8, 2));  //4



/*   해당코드가 위 코드보다 비효율적인 이유
 **  실질적으로 같은 조건판단을 또 수행하므로 
 **  위에 코드보다 비효율적이다.
 */
function medNum2(a, b, c) {
    if ((a >= b && a <= c) || (b >= a && a >= c)) {
        return a;
    } else if ((a < b && b < c) || (a > b && b > c)) {
        return b;
    } else {
        return c;
    }
}
