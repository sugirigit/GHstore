
/* var elements={};


function addition(){
    first=elements.firstNum.value;
    second=elements.secondNum.value;
    result=elements.result;
    result.value=calculate.addition(first,second)
}


function getElementReferences(){
   elements.firstNum=document.getElementById("txtFirstNumber");
    elements.secondNum=document.getElementById("txtLastNumber");
    elements.result=document.getElementById("txtResult");
    
}


function init(){
    getElementReferences();
}


init(); 



*/

var product={"price":100, 
             "availability":true
            };


function product1(){
    this.type="";
        this.restricted="";
    }
console.log(product1());