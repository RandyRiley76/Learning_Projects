//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
//The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

//JavaScript Solution as follows

var r=1,s=0;
while(r<1000){if(r%3==0||r%5==0)s=s+r;r++;}
console.log(s);