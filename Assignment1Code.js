//Brian Bullington's code for FizzBuzz and 1000th Prime

console.log("***********FizzBuzz Demonstration*********")

function fizzbuzzdesignator(value){                 //Takes number and determines if divisible by 5&3, 3, 5, or none of the above. Returns what to print.
    if(value%5==0 && value%3==0)
    {
        return "FizzBuzz";
    }
    else if(value%3==0){
        return "Fizz";
    }
    else if(value%5==0){
        return "Buzz";
    }
    else{
        return value;
    }
}

for(var i=1; i<=100; i++){                           //iterates to 100, printing based on teh fizzbuzzdesignator function
    console.log(fizzbuzzdesignator(i));
}

console.log("************1000th prime************")


function isprime(value){
    for(i=2; i<value; i++){
        if(value%i==0){
            //console.log(i);
            return false;
        }
    }
    return value>1;
}
//console.log(isprime(14));

var primeNumberCounter = 0;  //This will be where I count up to the 1000th prime number

for(testcase=2; testcase<100000; testcase++){       //testcase is the iterative number to test. Starting at 2 to avoid 1 and 0. Limit put to prevent infinite loop.
    if(isprime(testcase)){                          // test if testcase if prime. If so, then iterate up primeNumberCounter
        primeNumberCounter++
    }
    if(primeNumberCounter==1000){                   //when we reach the 1000th prime number, then print out what the number is, i.e. testcase
        console.log(testcase+ "is the "+ primeNumberCounter + "th prime!");
        break;                                      //end for loop
    }
}
