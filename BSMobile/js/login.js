$(window).load(function(){
    
    $("#BMain_Entrar").click(function(){
    
        var parametros = {
             VUtilizador: $("#VUtilizador").val(),
             VPalavraPasse: $("#VPalavraPasse").val()
        };

        $.ajax({ 
            type: "POST", 
            url: "http://109.71.46.242/bsmanager/mobile.asmx/Login", 
            data: parametros, 
            contentType: "application/x-www-form-urlencoded", 
            dataType: "xml", 
            success: function (xml) { 

            if(xml.childNodes[0].childNodes[0].nodeValue=="1")
                {                    
                    window.location.replace("menu.html");  
                }
            else
                {
                    alert('Credenciais Incorretas');
                }

            }, 
            error: function(jqXHR, textStatus, errorThrown) {

                alert('Sem Acesso ao Servidor');

            } 
        }); 
            
    }); 
    
}); 