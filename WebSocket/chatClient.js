let websocket;
let login = prompt("Login");

//la variable login est globale donc l'ordre des fonctions est un importante

function sendMessage(event){
    event.preventDefault();
    let message = document.querySelector("#message");
    websocket.send(login+" : "+message.value);
    message.value = "";
}

function createWebSocket(){
    websocket = new WebSocket('ws://localhost:12345');
    document.getElementById('button').addEventListener("click",sendMessage);


    websocket.onmessage = function(event) {
        printMessage(event.data);
      }
    
}

function printMessage(text){
    let message = document.getElementById("exampleFormControlTextarea1");
    if(message.value == ""){
      message.value = text;
    } else {
      message.value = message.value + "\n" + text;
    }
  }



createWebSocket();
