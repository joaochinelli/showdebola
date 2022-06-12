var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene); 


var scene2 = document.getElementById('scene2');
var parallaxInstance2 = new Parallax(scene2); 

$(document).ready(function () {


  setTimeout(() => {        
    $('body').addClass('active');   
    $('.loading').fadeOut();
     AOS.init();
  },2000);
 


  $('.box-menu').on('click', function(){
    $('header').toggleClass('open');
  });   


  $('.btn-modal-active').on('click', function(){
    $('.box-modal-texto').fadeIn(300).css({'display': 'flex'});


    return false;
  });  


  $('.btn-fechar-modal').on('click', function(){
    $('.box-modal-texto').fadeOut(300);
  });  


  $('header .box-header nav a').on('click', function(){
    $('header').removeClass('open');
  });

  $('.box-bloco-iframe').on('click', function(){

    fecharVideos();

    var video = $(this).find('video');

    var id = $(video).attr('id'); 

    var vid = document.getElementById(id);

    vid.play();
    

    
    $(this).addClass('active');
  });


  $('body').click(function (e) {

        var target = $(e.target);

        if (!target.closest('.box-hover').length && !target.closest('.box-iframe').length) {
            fecharVideos();
        }

    });


  function fecharVideos() {

    if($(".box-bloco-iframe").hasClass('active')){
      var video = $(".box-bloco-iframe.active").find('video');
      var id = $(video).attr('id'); 

      var vid1 = document.getElementById(id);
      vid1.pause();
      vid1.load();


      $(".box-bloco-iframe").removeClass('active');
    }
  }

  $('.box-menu-cases li').on('click', function(){
    $('.box-carrossel-case').hide();
    $('.box-menu-cases li').removeClass('active');
    $('.case' + $(this).data('case')).show();

    $(this).addClass('active');
    $('.case' + $(this).data('case'))[0].slick.refresh();
  });


  $('.link-off').on('click', function(){

    if($('#' + $(this).data('pg')).length > 0){
        $('html,body').animate({scrollTop: $('#'+ $(this).data('pg')).offset().top - 50}, 1500);
    }else{
      location.href = "http://localhost/luzmed/#" +  $(this).data('pg');
      // location.href = "https://dev.luzpropria.com.br/medluz/html/#" +  $(this).data('pg');
    } 
  
    
    return false;
  });  


  $(".box-texto").mCustomScrollbar();




  $('.box-carrossel-pilares').slick({
    infinite: false,
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 978,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });



  $('.box-carrossel-case').slick({
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: "<div class='slick-arrow arrow-left'><i class='fa fa-angle-left'></i></i></div>",
    nextArrow: "<div class='slick-arrow arrow-right'><i class='fa fa-angle-right'></div>",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 979,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.box-posts').slick({
    infinite: false,
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  

  $('.box-carrossel-texto').slick({
    infinite: false,
    dots: false,
    arrows: true,
    prevArrow: "<div class='slick-arrow arrow-left'><i class='fa fa-angle-left'></i></i></div>",
    nextArrow: "<div class='slick-arrow arrow-right'><i class='fa fa-angle-right'></div>",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });



$("#formContato").validate({
    rules: {
      nome: "required",
      email: {
        required: !0,
        email: !0
      },
      telefone: "required",
      mensagem: "required"
    },
    submitHandler: function(e) {

      var urlSend =  'https://www.luzpropria.com.br/api/send-luzmed.php';

      $('#formContato').addClass('sending');
      
      console.log(urlSend);
      $.ajax({
        url: urlSend,
        method: 'POST',
        dataType: 'json',
        data: $('#formContato').serialize(),
        success: function(data) {
          $('#formContato')[0].reset();
          $('#formContato').removeClass('sending');
          Swal.fire({title: "Feito!!", text: data.message, icon: "success", timer: 3500, button: false});
        },
        error: function(data) {
          $('#formContato').removeClass('sending');
          Swal.fire({title: "Ops, ocorreu um erro interno, tente novemente mais tarde!", text: data.message, icon: "error", timer: 300500, button: false});
        },
      });
      return false;
    }
  });
  
});
