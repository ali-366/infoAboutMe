
$(document).ready(function(){

    $('.menuSec ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
        $('.images').slick({
            arrows:true,
            autoplay: true,
            prevArrow:'<i class="fas fa-chevron-left slick-prev arrow-left"></i>',
            nextArrow:'<i class="fas fa-chevron-right slick-next arrow-right"></i>',
            dots: true,
            asNavFor:'.bannerText',                   
        });


        $('.bannerText').slick({
            arrows:false,
            autoplay: true,
            asNavFor:'.images',               
        });
       
        $('.testimonial_content').slick({
            arrows:false,
            autoplay: true,
            slidesToShow: 2,
        });

        

        $('.counter').counterUp({
            delay: 10,
            time: 3000
          });

          var typed = new Typed('.element',
          {
             strings: [
                 'I a web digner', 
                 'content creator',
                 'web devloper'
             ],
     
             smartBackspace: true ,
             typeSpeed: 200,
             backSpeed: 0,
             loop: true,
             showCursor: false,
           });

           var mixer = mixitup('.prot_Items');

           $('.filter_menu ul li').on('click',function(){
               $(this).addClass('active').siblings().removeClass('active');
           });
    
  });