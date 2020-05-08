$(document).ready(function () {
  var traking = window.location.href;
  var pos = traking.indexOf('?');
  if(pos == -1){
             $('#traking_id').val('');
  }else{
          traking = traking.substring(pos, traking.length);
           $('#traking_id').val(traking);
  }

 
  charge(1,0);
});



function charge(question,resp){

  var titulo = "Descubra qual é o cartão de crédito ideal para você";
  var subtitulo = "Responda às perguntas abaixo para que nossa tecnologia possa escolher o melhor cartão de crédito para você.";
  var total_questoes = "3";

  var questao_atual = "";
  var pergunta = "";
  var respostas = "";
  var percentual = "";

  $('#titulo_id').html(titulo);
  $('#subtitulo_id').html(subtitulo);
  $('#total_id').html(total_questoes);

  

   if(question == 1){
            pergunta = "O que é mais importante para você?";
            respostas =  '<button class="btn btn-lg btn-block btn-outline-primary" onclick=charge(2,1)> Limite de Crédito Alto</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary" onclick=charge(2,2)> Sem anuidade</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary" onclick=charge(2,3)> Milhas aéreas</button>';
     questao_atual = 1;
  

   }else if(question == 2){
     $('#resp_1').val(resp);
            pergunta = "Em qual grupo você se encaixa?";
            respostas =  '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,1)>Aposentado / Pensonista / Servidor Público</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,2)>Concurseiro / Estudante universitario</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,3)>Carteira assinada / Autonomo / Empreendedor</button>'+
                         '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(3,4)>Estou Desempregado</button>';
            questao_atual = 2;
//  }else if(question == 3){
//       $('#resp_2').val(resp);
//            pergunta = "Qual sua renda mensal?";
//            respostas = '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(4,1)>Até R$ 1.000</button>'+
//                        '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(4,2)>Entre R$ 1.001 e R$ 2.000</button>'+
//                        '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(4,3)>Entre R$ 2.001 e R$ 3.999</button>'+
//                        '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(4,4)>Acima de R$ 4.000</button>';
//            questao_atual = 3;
  }else if(question == 3){
 $('#resp_2').val(resp);
           pergunta =  "Você esta negativado? ";
           respostas = '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(4,1)>Sim</button>'+
                       '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(4,2)>Não</button>';
           questao_atual = 3;

//  }else if(question ==5){

//if(resp == 2){ $('#listaactive_id').val('n'); }
//$('#resp_4').val(resp);

//            pergunta = "Em qual banco você tem conta?";
//            respostas = '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(6,1)>Itaú</button>'+
//                        '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(6,2)>Bradesco</button>'+
//                        '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(6,3)>Banco do Brasil</button>'+
//                        '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(6,4)>Caixa</button>'+
//                        '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(6,5)>Santander</button>'+
//                        '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(6,6)>Nubank</button>'+
//                        '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(6,7)>Inter</button>'+
//                        '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(6,8)>Original</button>'+
//                        '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(6,9)>Neon</button>'+
//                        '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(6,10)>Next</button>'+
//                        '<button class="btn btn-lg btn-block btn-outline-primary"  onclick=charge(6,11)>Outros</button>';
//          questao_atual = 5;

  }else if(question == 4){
 $('#resp_').val(resp);
     html='<img src="img/JD-20-512.png" class="img-fluid"><br>'+
          '<h1 class="MyFont">Falta pouco!</h1>'+
  '<p class="lead">Digite seus dados abaixo e receba o cartão perfeito para você.</p>'+
  '</div>'+
  '<div class="row justify-content-md-center">'+
     '<div class="col-md-9" >'+
    
        '<div class="form-group">'+
          '<input type="text" class="form-control"  id="nome_send" aria-describedby="emailHelp" placeholder="Insira seu nome.">'+
        '</div>'+
        '<div class="form-group">'+
        '<input type="email" class="form-control" id="email_send" aria-describedby="emailHelp" placeholder="Insira seu email.">'+
        '</div>'+
        '<div class="form-check">'+
        '<input type="checkbox" class="form-check-input" id="Check1_termos">'+
         '<label  id="label_check" class="form-check-label" for="exampleCheck1">Concordo com os termos de uso e as politicas de privacidade.</label>'+
        '</div><br>'+
     '<button onclick="send_info()" class="btn btn-primary btn-block br">Ver meu cartão</button>'+
 
     '</div>';


    $('#maincontent_id').html(html);
    $('#go_id').hide('slow');
     
  }
    
    if(question != 4){
     percentual = (questao_atual /(total_questoes))*100;  
     
     $('#progressbar_id').html('<div class="progress-bar" role="progressbar" style="width: '+percentual+'%" aria-valuenow="'+percentual+'" aria-valuemin="0" aria-valuemax="100" ></div>');

     $('#questaoatual_id').html(questao_atual);
     $('#percentual_id').html(percentual);
     $('#pergunta_id').html(pergunta);
     $('#respostas_id').html(respostas);
    }
}



function send_info(){
  
var resp1 = $('#resp_1').val();
var resp2 = $('#resp_2').val();
var resp3 = $('#resp_3').val();
//var resp4 = $('#resp_4').val();
//var resp5 = $('#resp_5').val();
var traking = $('#traking_id').val();
var link =  'https://utua.com.br/category/cartao-de-credito/'+traking;

if(resp1 == 1) { link='https://utua.com.br/cartao-de-credito-nubank/'+traking;} //Limite Alto
if(resp1 == 2) { link='https://utua.com.br/cartao-de-credito-meu-bmg/'+traking;} //Sem anuidade
if(resp1 == 3) { link='https://utua.com.br/cartao-de-credito-c6/'+traking;} //Milhas Aereas
if(resp2 == 1 && resp3 == 1){    link = 'https://utua.com.br/cartao-negativado-bmg/'+traking; } // Negativado
if((resp2 == 2 || resp2 == 3 || resp2 == 4) && resp3 == 1){    link = 'https://utua.com.br/cartao-negativado-superdigital/'+traking; } 
 //alert(resp1+'-'+resp2+'-'+resp3+'-'+resp4+'-'+resp5+'-'+link);
  
  var nome =  $('#nome_send').val();
  var email = $('#email_send').val();
  var    r =  $('#listaactive_id').val();
  var lista = 10;
  if(r =='s'){ lista = 3;  }

   if(!$('#Check1_termos').is(":checked")){
      $("#Check1_termos").addClass( "is-invalid" );
      $('#label_check').html('Concorde com os termos e condições')
   }else if(email == ''){
    $("#email_send").addClass( "is-invalid" );
   }else if(nome ==''){
    $("#nome_send").addClass( "is-invalid" );
   }
  else{
     
    $.ajax({
        url: "active/examples.php",
        type: 'POST',
        data: {
            'param1': nome,
            'param2': email,
            'param3': lista
        },
        dataType: 'html',
        beforeSend: function () {
          
        },
        success: function (retorno) {
            // Atribui o retorno HTML para a div correspondente
            window.location.href = link;
            $('#ret_data').html(retorno);

        },
        error: function (erro, er) {
            // Se houver um erro durante o processamento, exibe a mensagem na div correspondente
            $('#ret_data').html('<p class="destaque">Erro ' + erro.status + ' - ' + erro.statusText + '</br> Tipo de erro: ' + er + '</p>');

        }
    });
  }
}

