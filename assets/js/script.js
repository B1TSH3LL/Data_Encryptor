// var Message = promopt("Enter Your Message");

// var encodedMessage = btoa(Message);

// console.log(encodedMessage);

var valueInVar = '';
function textareaToVar() {
    valueInVar = document.getElementById("myTextarea").value;
    var Message = valueInVar;
valueInVar.value = '';
    var encodedMessage = btoa(Message);

    var x = document.getElementById('outputArea');
    x.value = encodedMessage;
}

