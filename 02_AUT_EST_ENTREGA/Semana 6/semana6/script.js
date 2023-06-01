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
    $("img").hover(function(){ 
        $(this).css("border", "5px solid blue"); 
    }, function(){ 
        $(this).css("border", "none"); 
    });
    $("img").click(function(){
        if (!isImageShrunk) {  // Se a imagem não estiver encolhida...
            $(this).animate({width: '50%'});  // ... então a encolha...
            isImageShrunk = true;  // ... e marque que ela está encolhida
        } else {  // Se a imagem estiver encolhida...
            $(this).animate({width: '70%'});  // ... então a expanda...
            isImageShrunk = false;  // ... e marque que ela não está encolhida
        }
    });
});

