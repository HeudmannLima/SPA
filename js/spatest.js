$(function() {

  //Preparar MENU
  $(".ccon").hide();
  $(".aadd").hide();
  $(".uupd").hide();
  $(".ddel").hide();

  function escondeNav() {
    $("#btcon").hide();
    $("#btadd").hide();
    $("#btupd").hide();
    $("#btdel").hide();
  };

  function mostraNav() {
    $("#btcon").show();
    $("#btadd").show();
    $("#btupd").show();
    $("#btdel").show();
  };
  var p = true;

  //BOTÃO CONSULTAR --------------------------------------
    $("#btcon").on('click', function() {
      if(p){
        escondeNav();
        $("#btcon").text('MENU');
        $("#btcon").show();
        $(".ccon").show();
        p = false;
      }
      else {
        $("#btcon").text('CONSULTAR');
        $(".ccon").hide();
        mostraNav()
        p = true;
      }
    });

    //BOTÃO ADICIONAR --------------------------------------
      $("#btadd").on('click', function() {
        if(p){
          escondeNav();
          $("#btadd").text('MENU');
          $("#btadd").show();
          $(".aadd").show();
          $("#fname").val('');
          $("#lname").val('');
          p = false;
        }
        else {
          $("#btadd").text('ADICIONAR');
          $(".aadd").hide();
          mostraNav()
          p = true;
        }
      });

      //BOTÃO ATUALIZAR --------------------------------------
        $("#btupd").on('click', function() {
          if(p){
            escondeNav();
            $("#btupd").text('MENU');
            $("#btupd").show();
            $(".uupd").show();
            $('#alteraNome').val("");
            $('#alteraSobre').val("");
            p = false;
          }
          else {
            $("#btupd").text('ATUALIZAR');
            $(".uupd").hide();
            mostraNav()
            p = true;
          }
        });

        //BOTÃO DELETAR --------------------------------------
          $("#btdel").on('click', function() {
            if(p){
              escondeNav();
              $("#btdel").text('MENU');
              $("#btdel").show();
              $(".ddel").show();
              p = false;
            }
            else {
              $("#btdel").text('REMOVER');
              $(".ddel").hide();
              mostraNav()
              p = true;
            }
          });
});
