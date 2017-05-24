var elementReferences = {};

//Page Initialization
function pageInit() {
    getElementReferences();
    bindStatesList();
};

function bindStatesList() {
    var States = getStates();
    for (var i = 0; i < States.length; i++) {
        var name = States[i].name;
        var state= States[i].state;
        var optionTag = buildOptionTag(name, state);
        elementReferences.States.appendChild(optionTag);
    }
}

function buildOptionTag(value, text) {
    var optionTag = document.createElement("option");
    optionTag.value = value;
    optionTag.textContent = text;
    return optionTag;
}

function getStates() {
    return[{
            name:"Mid-western",
            state:"STATE 2"
         },   
         {
            name:"Central",
            state:"STATE 6"
         }];
}

function getElementReferences() {
    elementReferences.States=document.getElementById("dropdown")
}

pageInit();



//Form Validation

function checkForFirstName() { 
    var targetField1 = document.getElementById("textbox1");
        if(targetField1.value.length === 0) {
                alert("Please enter your first name"); 
                 targetField1.focus();
                 targetField1.style.background="yellow";
                 return false;
        }     
}          

 function checkForSelection() {
     if (document.getElementById("dropdown").selectedIndex === 0) { 
         alert("Please select a state.");
       return false;
     } 
 }

