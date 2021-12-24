// const pi = 3.14;
// let r = 9;
// function circleArea(pi,r){

//     let result  = pi * r * r;
// document.write(result);
// }
// circleArea(pi,r);

// ES6 

// part2
// for of loop
            let letters = ["a","b","c","d","e"];
         //Traditional For Loops 
         for(let i =0; i<letters.length; i++){
             console.log(letters[i]);
         }
         
        // iterating over array
        for(letter of letters)
        console.log(letter);

       // iterating over string
       let message = "Myanmar";
       for(ch of message)
       console.log(ch);


       // default values for function parameters
         function sayHey(name = 'Google'){
             console.log( `Hey ${name} !`);
         }
         sayHey();