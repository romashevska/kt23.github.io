$(function(){
  /*fixed menu*/
  let header=$("#header");
  let header_top=$("#header_top");
  let headerH=header.height();
  let scrollPos=$(window).scrollTop();
  let dropbtnNav=("#dropbtnNav");
  let nav=$("#nav");
  let navToggle=$("#navToggle");
  
  
  $(window).on("scroll load zesize", function(){
    headerH=header.height();
    scrollPos=$(this).scrollTop();
    checkScroll(scrollPos,headerH);
  });
  function checkScroll(scrollPos,headerH){
    if (scrollPos>headerH){
      header_top.addClass("fixed");
    }
    else{
      header_top.removeClass("fixed");
    }
  };
  

  
    /*smoth croll*/
    $("[data-scroll]").on("click",function(event){
      event.preventDefault();
      let elementId=$(this).data('scroll');
      let elementOffset=$(elementId).offset().top;
      nav.removeClass("show");
      
      $("html, body").animate({
        scrollTop:elementOffset -70
      });
      
      
    });
    /*Nav Toggle*/
    navToggle.on("click", function(event) {
      event.preventDefault();
      nav.toggleClass("show");
  });
  /* dropbtnNav.on("click", function(event)
  {
      event.preventDefault();
      nav.onLoad("index.html");
      //nav.toggleClass("show");
  }); */

  

    $('.carousel__item').slick({
        arrows:false,
        dots:true,
        slidesToShow:3,
        responsive: [
            {
              breakpoint:841,
              settings: {
                slidesToShow: 2
                }
            },
            {
                breakpoint:601,
                settings: {
                  slidesToShow: 1
                  
                }
              },
        
        ]
              });
          
});
