$(document).ready(function () {
  var traking = window.location.href;
  var pos = traking.indexOf('?');
  if (pos == -1) {
    $('#traking_id').val('');
  } else {
    traking = traking.substring(pos, traking.length);
    $('#traking_id').val(traking);
  }


  charge(1, 0);
});

//chamada de perguntas relacionas a escolha
function chama(n) {
  if (n == 1) {
    return rest = 1;
  }
  else if (n == 2) {
    return rest = 2;
  }
  else if (n == 3) {
    return rest = 3;
  }
  else {
    return rest = 4;
  }
}

function charge(question, resp) {

  var titulo = "Descubra qual é o cartão de crédito ideal para você";
  var subtitulo = "Responda às perguntas abaixo para que nossa tecnologia possa escolher o melhor cartão de crédito para você.";
  var total_questoes = "6";

  var questao_atual = "";
  var pergunta = "";
  var respostas = "";
  var percentual = "";

  $('#titulo_id').html(titulo);
  $('#subtitulo_id').html(subtitulo);
  $('#total_id').html(total_questoes);



  if (question == 1) {
    pergunta = '<h3 class="ultS">O que é mais importante para você?</h3>';
    respostas = '<button class="ultS btn btn-lg btn-block btn-outline-dark" onclick="chama(1);charge(2,1);" id="perg1"> Limite de Crédito Alto</button>' +
      '<button class="ultN btn btn-lg btn-block btn-outline-dark" onclick="chama(2);charge(2,2);"> Sem anuidade</button>' +
      '<button class="ultS btn btn-lg btn-block btn-outline-dark" onclick="chama(3);charge(2,3);"> Milhas aéreas</button>';
    questao_atual = 1;

  } else if (question == 2) {
    if (rest == 1) {
      pergunta = '<h3 class="ultN">Ótimo, você sabia que</h3>'
      respostas = '<p class="ultS" style="font-size: 1.1em;">Algumas operadoras oferecem a possibilidade do limite estendido, permitindo que uma compra seja feita mesmo que o valor original tenha sido estourado.</p>' + '<button class="ultN btn btn-lg btn-block btn-outline-dark" onclick="charge(3,2)">Continuar</button>'

    }
    else if (rest == 2) {
      pergunta = '<h3 class="ultN">Ótimo, você sabia que</h3>'
      respostas = '<p class="ultS" style="font-size: 1.1em;">Algumas operadoras oferecem <b><i>programas de recompensa</i></b>, que permitem ao consumidor acumular e trocar pontos por passagens aéreas, compras em restaurantes ou pagamento de serviços digitais, como <b><i>Uber</i></b>, <b><i>iFood</i></b> e <b><i>Netflix</i></b>.</p>' + '<button class="ultN btn btn-lg btn-block btn-outline-dark" onclick=charge(3,2)>Continuar</button>'
    } else if (rest == 3) {
      pergunta = '<h3 class="ultN">Ótimo, sabia que</h3>'
      respostas = '<p class="ultS" style="font-size: 1.1em;">Toda vez que você paga uma fatura do seu cartão de crédito,<b><i> acumula pontos para transformá-los em milhas, podendo vender e ganhar dinheiro extra, trocar por passagem aérea nos programas de fidelidade das companhias aéreas, trocar por produtos e serviços nos programas de fidelidade dos bancos e cartões.</i></b></p>' + '<button class="ultN btn btn-lg btn-block btn-outline-dark" onclick=charge(3,2)>Continuar</button>'
    }
    questao_atual = 2;
  }
  else if (question == 3) {
    $('#resp_1').val(resp);
    pergunta = '<h3 class="ultS">Em qual grupo você se encaixa?</h3>';
    respostas = '<button class="ultN btn btn-lg btn-block btn-outline-dark"  onclick="chama(1);charge(4,1);">Aposentado / Pensonista / Servidor Público</button>' +
      '<button class="ultS btn btn-lg btn-block btn-outline-dark"  onclick="chama(2);charge(4,2)">Concurseiro / Estudante universitario</button>' +
      '<button class="ultN btn btn-lg btn-block btn-outline-dark"  onclick="chama(3);charge(4,3)">Carteira assinada / Autonomo / Empreendedor</button>' +
      '<button class="ultS btn btn-lg btn-block btn-outline-dark"  onclick="chama(4);charge(4,4)">Estou Desempregado</button>';
    questao_atual = 3;

  }
  else if (question == 4) {
    if (rest == 1) {
      pergunta = '<h3 class="ultN">Parabéns</h3>';
      respostas = '<p class="ultS" style="font-size: 1.1em;">Você é elegivel para o cartão de crédito consignado, obtenha vantagens como: <b><i>Taxas de juros menores, Limite referente a margem consignável, Margem consignável exclusiva, Sem risco de SPC/Serasa.</i></b></p>' + '<button class="ultN btn btn-lg btn-block btn-outline-dark" onclick=charge(5,2)>Continuar</button>'
    }
    else if (rest == 2) {
      pergunta = '<h3 class="ultN">Excelente, Você sabia que</h3>';
      respostas = '<p class="ultS" style="font-size: 1.1em;">Algumas operadoras oferencem cartões de credito para universitários, e elas oferecem algumas vantagens como: <b><i>Anuidade grátis/baixa, Menores taxas, Não precisa comprovar renda, Conta com as principais bandeiras, Cobertura internacional, Programa de pontos.</i></b></p>' + '<button class="ultN btn btn-lg btn-block btn-outline-dark" onclick=charge(5,2)>Continuar</button>'
    } else if (rest == 3) {
      pergunta = '<h3 class="ultN">Excelente!</h3>';
      respostas = '<p class="ultS" style="font-size: 1.1em;">O cartão de crédito é uma ótima forma de fazer compras pela internet. Por exemplo, o cartão de crédito, sem dúvida, ainda é a opção mais ágil e dinâmica. A compra é realizada e o processo de aprovação é realizado quase que instantaneamente.</p>' + '<button class="ultN btn btn-lg btn-block btn-outline-dark" onclick=charge(5,2)>Continuar</button>'
    } else if (rest == 4) {
      pergunta = '<h3 class="ultN">Não se preocupe!</h3>';
      respostas = '<p class="ultS" style="font-size: 1.2em;"><b>Algumas operadoras não pedem uma comprovação de renda antecipada.</b></p>' + '<button class="ultN btn btn-lg btn-block btn-outline-dark" onclick=charge(5,2)>Continuar</button>'
    }
    questao_atual = 4;
  }

  else if (question == 5) {
    $('#resp_2').val(resp);
    pergunta = '<h3 class="ultN">Você esta negativado?</h3>';
    respostas = '<button class="ultS btn btn-lg btn-block btn-outline-dark"  onclick="chama(1);charge(6,1)">Sim</button>' +
      '<button class="ultN btn btn-lg btn-block btn-outline-dark"  onclick="chama(2);charge(6,2)">Não</button>';
    questao_atual = 5;
  }
  else if (question == 6) {
    if (rest == 1) {
      pergunta = '<h3 class="ultN">Não se preocupe!</h3>';
      respostas = '<p class="ultS" style="font-size: 1.2em;">Varias operadoras aceitam negativados para seus programas de cartões.</p>' + '<button class="ultN btn btn-lg btn-block btn-outline-dark" onclick=charge(7,2)>Continuar</button>'
    }
    else if (rest == 2) {
      pergunta = '<h3 class="ultN">Excelente!</h3>';
      respostas = '<p class="ultS" style="font-size: 1.2em;">Você tem mais chances de ser aprovado(a).</p>' + '<button class="ultN btn btn-lg btn-block btn-outline-dark" onclick=charge(7,2)>Continuar</button>'
    }
    questao_atual = 6;
  }
  else if (question == 7) {

    $('#resp_3').val(resp);
    html = '<div class="ultC">' + '<img src="img/JD-20-512.png" class="img-fluid " ><br>' +
      '<h1 class="MyFont">Falta pouco!</h1>' +
      '<p class="lead text-dark font-weight-bold">Digite seus dados abaixo e receba o cartão perfeito para você.</p>' +
      '</div>' +
      '<div class="ultB row justify-content-md-center">' +
      '<div class="col-md-9" >' +

      '<div class="form-group">' +
      '<input type="text" class="form-control"  id="nome_send" aria-describedby="emailHelp" placeholder="Insira seu nome.">' +
      '</div>' +
      '<div class="form-group">' +
      '<input type="email" class="form-control" id="email_send" aria-describedby="emailHelp" placeholder="Insira seu email.">' +
      '</div>' +
      '<div class="form-check">' +
      '<input type="checkbox" class="form-check-input" id="Check1_termos" checked style="display:none;">' +

      '</div><br>' +
      '<button onclick="send_info()" class="btn btn-primary btn-block br">VER MEU CARTÃO DE CRÉDITO</button><br>' +
      '<label  id="label_check" class="form-check-label" for="exampleCheck1"><a class="text-dark" href="https://utua.com.br/politica-de-privacidade/" target="_blank" >Ao clicar no botão "ver meu cartao" você concorda com os termos de uso e as politicas de privacidade.</a></label>' +

      '</div>' + '</div>'


    $('#maincontent_id').html(html);
    $('#go_id').hide('slow');

  }

  if (question != 7) {
    percentual = (questao_atual / (total_questoes)) * 100;

    $('#progressbar_id').html('<div class="barraC progress-bar progress-bar-striped bg-dark" role="progressbar" style="width: ' + percentual + '%" aria-valuenow="' + percentual + '" aria-valuemin="0" aria-valuemax="100" ></div>');

    $('#questaoatual_id').html(questao_atual);
    $('#percentual_id').html(percentual);
    $('#pergunta_id').html(pergunta);
    $('#respostas_id').html(respostas);
  }
}



function send_info() {

  var resp1 = $('#resp_1').val();
  var resp2 = $('#resp_2').val();
  var resp3 = $('#resp_3').val();
  //var resp4 = $('#resp_4').val();
  //var resp5 = $('#resp_5').val();

  //array de resposatas para campos personalizados
  var q1 = ['Limite de Crédito Alto', 'Sem anuidade', 'Milhas aéreas'];
  var q2 = ['Aposentado / Pensonista / Servidor Público', 'Concurseiro / Estudante universitario', 'Carteira assinada / Autonomo / Empreendedor', 'Estou Desempregado</button>'];
  var q3 = ['Sim', 'Não'];

  q1 = q1[(resp1 - 1)];
  q2 = q2[(resp2 - 1)];
  q3 = q3[(resp3 - 1)];


  var traking = $('#traking_id').val();
  var link = 'https://utua.com.br/category/cartao-de-credito/' + traking;

  if (resp1 == 1) { link = 'https://utua.com.br/cartao-de-credito-nubank/' + traking; } //Limite Alto
  if (resp1 == 2) { link = 'https://utua.com.br/cartao-de-credito-meu-bmg/' + traking; } //Sem anuidade
  if (resp1 == 3) { link = 'https://utua.com.br/cartao-de-credito-c6/' + traking; } //Milhas Aereas
  if (resp2 == 1 && resp3 == 1) { link = 'https://utua.com.br/cartao-negativado-bmg/' + traking; } // Negativado
  if ((resp2 == 2 || resp2 == 3 || resp2 == 4) && resp3 == 1) { link = 'https://utua.com.br/cartao-negativado-superdigital/' + traking; }
  //alert(resp1+'-'+resp2+'-'+resp3+'-'+resp4+'-'+resp5+'-'+link);

  var nome = $('#nome_send').val();
  var email = $('#email_send').val();
  var r = $('#listaactive_id').val();
  var lista = 10;
  if (r == 's') { lista = 3; }

  if (!$('#Check1_termos').is(":checked")) {
    $("#Check1_termos").addClass("is-invalid");
    $('#label_check').html('Concorde com os termos e condições')
  } else if (email == '') {
    $("#email_send").addClass("is-invalid");
  } else if (nome == '') {
    $("#nome_send").addClass("is-invalid");
  }
  else {

    $.ajax({
      url: "active/examples.php",
      type: 'POST',
      data: {
        'param1': nome,
        'param2': email,
        'param3': lista,
        'param4': q1,
        'param5': q2,
        'param6': q3
      },
      dataType: 'html',
      beforeSend: function () {

      },
      success: function (retorno) {
        // Atribui o retorno HTML para a div correspondente
        window.location.href = link;
        //alert(retorno);

      },
      error: function (erro, er) {
        // Se houver um erro durante o processamento, exibe a mensagem na div correspondente
        $('#ret_data').html('<p class="destaque">Erro ' + erro.status + ' - ' + erro.statusText + '</br> Tipo de erro: ' + er + '</p>');

      }
    });
  }
}
function botaoGlobal() {
  const quiz1 = document.getElementById("quizz1");
  const quiz2 = document.getElementById("quizz2");
  const quiz3 = document.getElementById("quizz3");
  const global1 = document.querySelector(".global1");

  quiz1.style.opacity = "1";
  quiz2.style.opacity = "1"
  quiz3.style.opacity = "1";
  global1.style.opacity = "0";
  global1.style.zIndex = "-1";
}

