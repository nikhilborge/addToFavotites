//task 1 logic  (add to cart)


console.log("working");


// task 2 logic  (check first letter is in uppercase or not )
const inputstr  = document.getElementById("inputstr");
const uprbtn = document.getElementById("uprbtn");



uprbtn.addEventListener("click", checkUpper)

function checkUpper(){
    let str = inputstr.value;

    if(str.length === 0 || typeof str !== 'string'){
        console.log("Enter the valid string");
       message.innerHTML="  Enter a valid string";
    }
    else{
        if(str[0].toUpperCase() === str[0]){
            console.log("it is uppercase ");
            message.innerHTML=" First Letter is upperCase";
        }
        else{
            console.log("not a uppercase");
            message.innerHTML=" First Letter is not upperCase";
        }
        
    }

    console.log(str.value);
    console.log("clicked");
}


//task 3 (count words in a string)
const wordbtn = document.getElementById("wordbtn");
const words = document.getElementById("words");
const wordcount = document.getElementById("wordcount");

wordbtn.addEventListener("click", countwords);

function countwords(){
    console.log("count words button clicked");

    let textwords = words.value;
    let textlen = words.length;
    // let cnt =0;

    let cntword = textwords.match(/\w+/g);
    // console.log(cntword.length);
    


    if(textwords.length === 0 || typeof textwords !== 'string'){
        console.log("Enter the valid string");
       wordcount.innerHTML="  Enter a valid string";
    }
    else{
        wordcount.innerHTML= `There are ${cntword.length} words in a string`;
    }

}



//task 4 print an interger with commas of thousands saparators

const numinput = document.getElementById("numinput");
const separatorbtn = document.getElementById("separatorbtn");
const sepatateWithcomma = document.getElementById("sepatateWithcomma");

separatorbtn.addEventListener("click", separatenum);

function separatenum(){
    let num = numinput.value;

    if(num === ''){
        console.log("null");
        sepatateWithcomma.innerHTML = "Enter the number";
        
    }else{

    
    console.log(num);

    let divide = num.toString().split(".");
    divide[0] = divide[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
    let result = divide.join(".");
    console.log(result);
    sepatateWithcomma.innerHTML = result;
}
    
    // console.log(typeof numinput);
    // console.log(numinput.value);
}










