let header = $("#header");$(function(){

 
    let header = $("#header");
let headerH=header.height();


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
          
/*header_top*/


console.log("headerH");
 
});
