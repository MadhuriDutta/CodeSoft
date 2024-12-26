const display = document.getElementById("inputbox");
const delbutton = document.getElementById("del");

function appendToDisplay(input){
    display.value +=input;

};

function clearDisplay(){
    display.value =" ";

};

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value ="Error!";
    }
};


 delbutton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
 });
    























/*const buttons = document.querySelectorAll('button');

const buttonsArray = Array.from(buttons);



const string =" ";

buttonsArray.forEach(function(btn){
    
    btn.addEventListener('click',(e) => {
        
        console.log(e.target.innerHTML)
        string = string + e.target.innerHTML;
        Document.querySelector('input').value = string 
    });

})*/
