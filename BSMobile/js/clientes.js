$(window).load(function(){

    $("#TResultados").empty();

    var parametros = {
         VUtilizador: 'Vasco',
         VPalavraPasse: 'VL',
    };

    var linha = "";
    var VPar = 0;
    var VCSS = "TitulosImpar";

    $.ajax({ 
        type: "POST", 
        url: "http://109.71.46.242/bsmanager/mobile.asmx/Clientes", 
        data: parametros, 
        contentType: "application/x-www-form-urlencoded", 
        dataType: "xml", 
        success: function (xml) {              
            
            $(xml).find("ListaSimples").each(function() {

                linha = "<li>";

                if (VPar==0)
                    {
                        VCSS="LinhasImpar";
                        VPar=1;  
                    }
                else
                    {
                        VCSS="LinhasPar";
                        VPar=0;  
                    }

                linha = linha  + "<a class=" + VCSS + " id='BConsultar_Detalhes"+$(this).find("VID").text()+"' style='text-align: center; text-decoration: none; display: inline-block; font-size: 16px;' onclick='Consultar_Detalhes("+$(this).find("VID").text()+");'>";
                linha = linha + $(this).find("VTexto").text();
                linha = linha  + "</a>";
                 
                linha = linha + "</li>";

                $("#TResultados").append(linha); 

            });                             

            var init = function () {
                var b1= document.getElementById("BConsultar_Detalhes"+$(this).find("VID").text());
                b1.addEventListener("click", touchstarthandler,false);
            };
            
        }, 
        error: function(jqXHR, textStatus, errorThrown) {

            alert('Sem Acesso ao Servidor');

        } 
    }); 
        
    $("#BClientes_Sair").click(function()
    {

        window.location.replace("menu.html");
        
    });
                             
});

function Consultar_Detalhes(VID){

    window.location.replace("clientes_detalhes.html?VCliente=" + VID);

}