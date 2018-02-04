$(window).load(function(){
        
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
    
    var VCliente = getUrlParameter('VCliente');
    
    $("#TDetalhes").empty();

    var parametros = {
         VUtilizador: 'Vasco',
         VPalavraPasse: 'VL',
         VCliente: VCliente,
    };

    $.ajax({ 
        type: "POST", 
        url: "http://109.71.46.242/bsmanager/mobile.asmx/Clientes_Detalhes", 
        data: parametros, 
        contentType: "application/x-www-form-urlencoded", 
        dataType: "xml", 
        success: function (xml) {              
            
            var linha = "<li>"; 
            
            linha = linha + "<table width='100%' valign='top'>"
                  
            $(xml).find("Cliente").each(function() {

                linha = linha + "<tr>"
                linha = linha + "<td width='40%' align='left' valign='top'>"                        
                linha = linha + "<span style='font-weight: bold;'>Nome:</span>";
                linha = linha + "</td>"  
                linha = linha + "<td width='60%' align='left'>"  
                linha = linha + "<span>"+$(this).find("VNome").text()+"</span>";                        
                linha = linha + "</td>"  
                linha = linha + "</tr>"
                
                linha = linha + "<tr>"
                linha = linha + "<td width='40%' align='left'>"                        
                linha = linha + "<br/>"  
                linha = linha + "<td width='60%' align='left'>"  
                linha = linha + "<br/>"                       
                linha = linha + "</td>"  
                linha = linha + "</tr>"
                
                linha = linha + "<tr>"
                linha = linha + "<td width='40%' align='left' valign='top'>"                        
                linha = linha + "<span style='font-weight: bold;'>Morada:</span>";
                linha = linha + "</td>"  
                linha = linha + "<td width='60%' align='left'>"  
                linha = linha + "<span>"+$(this).find("VMorada1").text()+"</span>";                        
                linha = linha + "</td>"  
                linha = linha + "</tr>"
                
                linha = linha + "<tr>"
                linha = linha + "<td width='40%' align='left'>"                        
                linha = linha + "<br/>"  
                linha = linha + "<td width='60%' align='left'>"  
                linha = linha + "<br/>"                       
                linha = linha + "</td>"  
                linha = linha + "</tr>"
                
                linha = linha + "<tr>"
                linha = linha + "<td width='40%' align='left'>"                        
                linha = linha + "<span></span>";
                linha = linha + "</td>"  
                linha = linha + "<td width='60%' align='left'>"  
                linha = linha + "<span>"+$(this).find("VMorada2").text()+"</span>";                        
                linha = linha + "</td>"  
                linha = linha + "</tr>"
                
                linha = linha + "<tr>"
                linha = linha + "<td width='40%' align='left'>"                        
                linha = linha + "<br/>"  
                linha = linha + "<td width='60%' align='left'>"  
                linha = linha + "<br/>"                       
                linha = linha + "</td>"  
                linha = linha + "</tr>"
                
                linha = linha + "<tr>"
                linha = linha + "<td width='40%' align='left' valign='top'>"                        
                linha = linha + "<span style='font-weight: bold;'>Código Postal:</span>";
                linha = linha + "</td>"  
                linha = linha + "<td width='60%' align='left'>"  
                linha = linha + "<span>"+$(this).find("VCodigoPostal").text()+"</span>";                        
                linha = linha + "</td>"  
                linha = linha + "</tr>"
                
                linha = linha + "<tr>"
                linha = linha + "<td width='40%' align='left'>"                        
                linha = linha + "<br/>"  
                linha = linha + "<td width='60%' align='left'>"  
                linha = linha + "<br/>"                       
                linha = linha + "</td>"  
                linha = linha + "</tr>"
                
                linha = linha + "<tr>"
                linha = linha + "<td width='40%' align='left' valign='top'>"                        
                linha = linha + "<span style='font-weight: bold;'>Localidade:</span>";
                linha = linha + "</td>"  
                linha = linha + "<td width='60%' align='left'>"  
                linha = linha + "<span>"+$(this).find("VLocalidade").text()+"</span>";                        
                linha = linha + "</td>"  
                linha = linha + "</tr>"
                
                linha = linha + "<tr>"
                linha = linha + "<td width='40%' align='left'>"                        
                linha = linha + "<br/>"  
                linha = linha + "<td width='60%' align='left'>"  
                linha = linha + "<br/>"                       
                linha = linha + "</td>"  
                linha = linha + "</tr>"
                
                linha = linha + "<tr>"
                linha = linha + "<td width='40%' align='left' valign='top'>"                        
                linha = linha + "<span style='font-weight: bold;'>Telefone:</span>";
                linha = linha + "</td>"  
                linha = linha + "<td width='60%' align='left'>"  
                linha = linha + "<span>"+$(this).find("VTelefone").text()+"</span>";                        
                linha = linha + "</td>"  
                linha = linha + "</tr>"
                
            });                             
            
            linha = linha + "</table>"
            
            linha = linha + "</li>";
            
            $("#TDetalhes").append(linha);
            
        }, 
        error: function(jqXHR, textStatus, errorThrown) {

            alert('Sem Acesso ao Servidor');

        } 
    }); 
    
    $("#BClientes_Detalhes_Sair").click(function()
    {

        window.location.replace("clientes.html");
        
    });
                             
});     