$(document).ready(function(){
    var isImageShrunk = false; // Variável para controlar o estado da imagem
    
    $("h1").click(function(){
        $(this).next().slideToggle();
    });
    $("h1").hover(function(){  
        $(this).css("color", "blue");  
    }, function(){  
        $(this).css("color", "black");  
    });
    $("#rodape").hover(function(){  
        $(this).css("color", "blue");  
    }, function(){  
        $(this).css("color", "black");  
    });
    $("#lucas").hover(function(){ 
        $(this).css("border", "5px solid blue"); 
    }, function(){ 
        $(this).css("border", "none"); 
    });
    
    
    $("#lucas").click(function(){
        if (!isImageShrunk) {  // Se a imagem não estiver encolhida...
            $(this).animate({width: '50%'});  // ... então a encolha...
            isImageShrunk = true;  // ... e marque que ela está encolhida
        } else {  // Se a imagem estiver encolhida...
            $(this).animate({width: '70%'});  // ... então a expanda...
            isImageShrunk = false;  // ... e marque que ela não está encolhida
        }
    });

    $("#bot").click(function(){
        TestGETDB();
    });


});


/* Função que faz um requisição GET no nosso banco de dados */
function TestGETDB(){
    var url = "http://127.0.0.1:3000/experiencia";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText);
    $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
     //console.log(xhttp.responseText);
}

