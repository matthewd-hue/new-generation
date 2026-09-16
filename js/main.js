"use strict";
var $portfolio_filter,$grid_selectors,$blog,$port_filter;
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


/*==============================================================
 owl slider
 ==============================================================*/

$(document).ready(function () {

    bind_shrink_header();
    
    var isMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }
    

   

    /* ===================================
     Tab Active After Export
     ====================================== */
    
    var tab_id = $('.nav-tabs').parents('section').attr('id');
    if(tab_id != undefined)
    {
        var tz_tabs = tab_id.substring(0,3);
        if(tz_tabs == 'tab')
        {
            var rem_href = $('#'+tab_id).find('.nav-tabs li.active').find('a').attr('href');
            var rem_active =  $('#'+tab_id).find('.nav-tabs li.active').removeClass('active');
            $('#'+tab_id).find(rem_href).removeClass('active');
            $('#'+tab_id).find('.nav-tabs li').first().addClass('active');
            var first_href = $('#'+tab_id).find('.nav-tabs li').first().find('a').attr('href');
            $('#'+tab_id).find(first_href).addClass('active in');
        }
    }

    /* ===================================
     Toggle Close 
     ====================================== */
    $(document).on('click', 'ul.navbar-nav li a', function (event) { 
        $('#bs-example-navbar-collapse-1').removeClass('in');
        $('#bs-example-navbar-collapse-1').addClass('collapse');
        $('.navbar-toggle').addClass('collapsed');
    });





     /*==============================================================
     smooth scroll With Shrink Navigation
     ==============================================================*/

    $(window).scroll(function () {
        
        var shrink_header = $('.shrink-header').length;
        var shrink_medium_header = $('.shrink-medium-header').length;
        var shrink_big_header = $('.shrink-big-header').length;
        var shrink_transparent_header_light = $('.shrink-transparent-header-light').length;
        var shrink_transparent_header_dark = $('.shrink-transparent-header-dark').length;
        if(shrink_medium_header)
        {
            var windowsize = $(window).width();
            if(windowsize <= 991 && windowsize == 768)
            {
              var header_offset = -106;
            }else if(windowsize <= 767){
              var header_offset = -90;
            }else{
              var header_offset = -110;
            }
            
        }else if(shrink_big_header){
            var windowsize = $(window).width();
            if(windowsize <= 991)
            {
              var header_offset = -64;
            }else{
              var header_offset = -115;
            }
            
        }else if(shrink_header || shrink_transparent_header_light || shrink_transparent_header_dark){
            var windowsize = $(window).width();
            if(windowsize <= 991 && windowsize == 768)
            {
              var header_offset = -64;
            }else if(windowsize <= 767){
              var header_offset = -60;
            }else{
              var header_offset = -68;
            }
            
        }else{
            var header_offset = 1;
        }
   
    });



/* ===================================
 shrink navigation
 ====================================== */
$(window).scroll(function () {
    bind_shrink_header();
});

function bind_shrink_header() {
    if ($('nav').hasClass('shrink-header')) {

        $('.shrink-header').addClass('shrink-nav');
        $('section:first').addClass('header-margin-top');

    } else if ($('nav').hasClass('shrink-big-header')) {

        $('.shrink-big-header').addClass('shrink-nav');
        $('section:first').addClass('header-margin-top-big');

    } else if ($('nav').hasClass('shrink-medium-header')) {

        $('.shrink-medium-header').addClass('shrink-nav');
        $('section:first').addClass('header-margin-top-medium');

    } else if ($('nav').hasClass('shrink-transparent-header-dark')) {

        $('.shrink-transparent-header-dark').addClass('shrink-nav');

    } else if ($('nav').hasClass('shrink-transparent-header-light')) {

        $('.shrink-transparent-header-light').addClass('shrink-nav');

    } else {

        $('.shrink-header').removeClass('shrink-nav');
        $('section:first').removeClass('header-margin-top');
    }

    if ($(window).scrollTop() > 10) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
}

setTimeout(function () {
    $(window).scroll();
}, 500);



 

    // $('li.propClone.menu').click(function(e){
       
    //     $('.submenu').toggleClass("click-hover")
    //     $(this).toggleClass("click-event")
        
    // });


    $(window).scroll(function () {
        var intElemOffsetHeight = document.getElementById("nav-height").offsetHeight ;
     

        if (document.body.scrollTop > intElemOffsetHeight-10 || document.documentElement.scrollTop > intElemOffsetHeight-10) {
          document.getElementsByClassName("navbar-collapse")[0].style.top=intElemOffsetHeight-20 +"px";
        }else{
            document.getElementsByClassName("navbar-collapse")[0].style.top=intElemOffsetHeight-20+"px";
        }
    });
    $(document).ready(function () {
        ma5menu({
                menu: '.site-menu',
                activeClass: 'active',
                footer: '#ma5menu-tools',
                position: 'left',
                closeOnBodyClick: true
              });
      })


})
/*==============================================================
 Sticky mobile "Need a quote?" CTA -> scrolls to the quote form,
 or goes to the request page if this page has no form embed
 ==============================================================*/
$(document).ready(function () {
    var $btn = $('<a href="/request.html" class="ng-sticky-quote-btn" id="ng-sticky-quote-btn">Need a quote?</a>');
    $('body').append($btn).addClass('ng-has-sticky-cta');

    $btn.on('click', function (e) {
        var $formTarget = $('#form');
        if ($formTarget.length) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $formTarget.offset().top - 80 }, 500);
        }
        // otherwise let the link naturally go to /request.html
    });
});
