
$(document).ready(function(){

    teste();
    
    $("#My_Button").text("Por favor clique aqui");
    $("#My_Button").click(function(){
        ChangeColor();
        $("#Message").text("Sim vamos estudar pra valer")
    });

    /*Tarefas;*/ 
    $("#Save-btn").click(function(){
        var textInput = $("#campo-texto").val();
        var addItem = "<li id='new'>" + textInput + "</li>";
        $("#campo-texto").val("");
        $("#Tarefas").append(addItem);
    });

    $("#Clear-btn").click(function(){   
        console.log($("#new"));  
        while ($("#new")[0] == true) {
            $("#new").remove();
        }                   
    });

    $("#Speak-btn").click(function(){
        Falar($("#campo-falar").val())
    })
})

function Falar(text){
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}

function teste(){
    setTimeout(() => {
        ChangeColor();
        teste();
    }, 2000);
}

function ChangeColor(){
    const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
    const random = "#"+((1<<24)*Math.random())
    document.documentElement.style.setProperty('--randomColor', randomColor);
    console.log(randomColor,random);
}