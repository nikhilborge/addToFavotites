//task 1 logic  (add to cart)


console.log("working");


// task 2 logic  (check )
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













