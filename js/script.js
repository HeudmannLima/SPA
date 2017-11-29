
$(function () {

  //Consultar (GET)
  var $autores = $('#autores');
  var cc = 0;

  $('#btcon').on('click', function() {
    $.ajax({
      type: 'GET',
      url: "https://bibliapp.herokuapp.com/api/authors",
      success: function pegarData(data) {
        $autores.empty();
        $.each(data, function(i, autor)
        {
          $autores.append('<tr><td>' + autor.firstName +
          '</td><td>' + autor.lastName +
          '</td><td>' + autor.id + '</td></tr>');
          cc++;
        });
        $("#oop .pp").empty();
        $("#oop .pp").append('Encontrados <strong>' + cc +'</strong> Autores Cadastrados.<br><br>');
        cc = 0;
      },
      error: function()
      {
        alert('Erro Ao tentar abrir o API');
        document.write('<p>Erro ao tentar API.</p>');
      }
    });
  });


  //Adicionar (POST)
  var $fname = $('#fname');
  var $lname = $('#lname');

  $('#adicionar').on('click', function() {
    var order = {
      firstName: $fname.val(),
      lastName: $lname.val(),
    };

    $.ajax({
      type: 'POST',
      url: 'https://bibliapp.herokuapp.com/api/authors', //url mesmo da GET
      dataType: "json",
      data: order, //usando o objeto var order acima, pode usar direto aqui
      success: function(newOrder)
      {
        $("#fname").val('');
        $("#lname").val('');
        alert("Nome: " + newOrder.firstName + "\nSobrenhome: " + newOrder.lastName + "\n\nAdicionado Com Sucesso!");
      },
      error: function()
      {
        alert("ERRO AO ADICIONAR AUTOR!\nFavor Preecher NOME e SOBRENOME!");
      }
    });
  });


  //Deletar (DELETE)
  //Get na Caixa de listagem
  $('#btdel').on('click', function() { getLista("#listadel"); });

  function getLista(lista) {
    $(lista).empty();
    $.ajax({
      type: 'GET',
      url: "https://bibliapp.herokuapp.com/api/authors",
      success: function pegarData1(data1) {
        $.each(data1, function(x, autor2)
        {
          $(lista).append("<option value='" + autor2.id
          + "' align='left'>" + autor2.firstName +
          " " + autor2.lastName + "</option>");
        });
      },
      error: function()
      {
        alert('Erro Ao tentar abrir o API');
        document.write('<p>Erro ao tentar API.</p>');
      }
    });
  }

  //Submit Deletar
  var $del_id = $('#listadel');

  $('#btdel1').on('click', function() {
    $.ajax({
      type: 'DELETE',
      url: 'https://bibliapp.herokuapp.com/api/authors/' + $del_id.val(),
      dataType: "json",
      success: function()
      {
        alert( "Autor: " + $('#listadel :selected').text() + " Removido da Lista.");
        getLista("#listadel");
      },
      error: function()
      {
        alert("Favor Selecionar um Nome da lista Para remover.");
      }
    });
  });


  //Alterar (PUT)
  //Get na Caixa de listagem
  $('#btupd').on('click', function() { getLista("#listaatt"); });
  var valora = "";

  $('#listaatt').on('click', function() {
    valora = $('#listaatt').prop("selectedIndex");
      $.ajax({
        type: 'GET',
        url: 'https://bibliapp.herokuapp.com/api/authors',
        dataType: "json",
        success: function(data)
        {
          $('#alteraNome').val(data[valora].firstName);
          $('#alteraSobre').val(data[valora].lastName);
        },
        error: function()
        {
          alert("ERRO AO ADD VALORES!");
        }
      });
    });

    //Submit Alterar
    var sel;
    var nnome;
    var ssnome;

    $('#alterara').on('click', function() {
      sel = $('#listaatt').val();
      nnome = $('#alteraNome').val();
      ssnome = $('#alteraSobre').val();
        $.ajax({
          type: 'PUT',
          data: { firstName: nnome, lastName: ssnome },
          url: 'https://bibliapp.herokuapp.com/api/authors/' + sel,
          dataType: "json",
          success: function()
          {
            alert("Alteração realizada!" );
            $('#alteraNome').val("");
            $('#alteraSobre').val("");
            getLista("#listaatt");
          },
          error: function()
          {
            alert("ERRO AO ALTERAR VALORES!");
          }
        });
      });

});
