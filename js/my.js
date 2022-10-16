$(window).load(function() {
    $('.insertMap').append('<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A12b62a69be9711f3e71da517d343800916360f977147fd6425cb9b38ed0dcf3a&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>')
    $('#fp-nav ul li').each(function(){
        var index = $(this).index() + 1
        if(index < 10) {
            $(this).find('span').text('0'+index+'')
        }else {
            $(this).find('span').text(''+index+'')
        }
        
    })
})
$(document).ready(function() {
$('#fullpage').fullpage({
        
        anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6', 'slide7', 'slide8', 'slide9', 'slide10', 'slide11', 'slide12', 'slide13'],
        menu: '.slidemenu',
        paddingTop: '95px',
        responsiveHeight: 600,
        responsiveWidth: 992,
        navigation: true,
	     navigationPosition: 'right',
        afterResponsive: function(isResponsive) {

        },
    afterLoad: function (anchorLink, index) {
        if (index == 1) {
            $('#fp-nav').removeClass('nav2').removeClass('nav3')
            $('header').removeClass('type2').removeClass('type3')
            $('.logoImg img').attr('src','img/logo.png')
        }
        if (index == 2) {
            $('#fp-nav').addClass('nav2')
            $('header').addClass('type2').removeClass('type3')
            $('.logoImg img').attr('src','img/logo.png')
        }
        if (index == 3) {
            $('#fp-nav').removeClass('nav2').removeClass('nav3')
            $('header').removeClass('type2').removeClass('type3')
            $('.logoImg img').attr('src','img/logo.png')
        }
        
        if (index == 4) {
            $('#fp-nav').removeClass('nav2').removeClass('nav3')
            $('#fp-nav').addClass('nav3')
            $('header').removeClass('type2').addClass('type3')
            $('.logoImg img').attr('src','img/logo.png')
        }
        if (index == 5) {
            $('#fp-nav').removeClass('nav2').removeClass('nav3')
            $('header').removeClass('type2').removeClass('type3')
            $('.logoImg img').attr('src','img/logo.png')
        }
        if (index == 6) {
            $('#fp-nav').removeClass('nav2').removeClass('nav3')
            $('header').removeClass('type2').removeClass('type3')
            $('.logoImg img').attr('src','img/logo.png')
        }
        if (index == 7) {
            $('#fp-nav').removeClass('nav2').removeClass('nav3')
            $('#fp-nav').addClass('nav3')
            $('header').removeClass('type2').addClass('type3')
            $('.logoImg img').attr('src','img/logo.png')
        }
        if (index == 8) {
            $('#fp-nav').removeClass('nav2').removeClass('nav3')
            $('header').removeClass('type2').removeClass('type3')
            $('.logoImg img').attr('src','img/logo.png')
        }
        if (index == 9) {
            $('#fp-nav').removeClass('nav2').removeClass('nav3')
            $('header').removeClass('type2').removeClass('type3')
            $('.logoImg img').attr('src','img/logo.png')
        }
        if (index == 10) {
            $('#fp-nav').removeClass('nav2').removeClass('nav3')
            $('header').removeClass('type2').addClass('type3')
            $('.logoImg img').attr('src','img/logo.png')
        }
        if (index == 11) {
            $('#fp-nav').removeClass('nav2').removeClass('nav3')
            $('header').removeClass('type2').removeClass('type3')
            $('.logoImg img').attr('src','img/logo.png')
        }
        if (index == 12) {
            $('#fp-nav').removeClass('nav2').removeClass('nav3')
            $('header').removeClass('type2').removeClass('type3')
            $('.logoImg img').attr('src','img/logo.png')
        }
        if (index == 13) {
            $('#fp-nav').removeClass('nav2').removeClass('nav3')
            $('header').removeClass('type2').removeClass('type3')
            $('.logoImg img').attr('src','img/logo.png')
        }
    }
    });
    
    $('.slider_photoes').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText:['<img src="img/prev.png" alt="">','<img src="img/next.png" alt="">'],
    dots:true,
    center:true,
    autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    
     
     
    
    $('.openNav').click(function() {
        $('.mobile_navigation').slideToggle(300)
        $(this).toggleClass('openedNav')
        if($(this).hasClass('openedNav')) {
            $(this).find('img').attr('src','img/close.svg')
        }else {
            $(this).find('img').attr('src','img/menu.svg')
        }
    })
    $('.openTels').click(function() {
        $('.mobile_telephones').slideToggle(300)
        
    })
    
    
    if ($(window).width() < 992) {
        $('.mobile_navigation ul li a').click(function() {
        $('.mobile_navigation').slideUp(300)
        $('.openNav').removeClass('openedNav')
        if($('.openNav').hasClass('openedNav')) {
            $('.openNav').find('img').attr('src','img/close.svg')
        }else {
            $('.openNav').find('img').attr('src','img/menu.svg')
        }
    })
        
        $(document).mouseup(function(e) 
{
    var container = $(".openNav, .openTels, .mobile_telephones, .mobile_navigation");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('.mobile_navigation').slideUp(300)
        $('.mobile_telephones').slideUp(300)
        $('.openNav').removeClass('openedNav')
        if($('.openNav').hasClass('openedNav')) {
            $('.openNav').find('img').attr('src','img/close.svg')
        }else {
            $('.openNav').find('img').attr('src','img/menu.svg')
        }
    }
});
    }
    //$('#t4').modal('toggle')
    
    $('.modal').on('shown.bs.modal', function (e) {
        $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
    })
    $('.modal').on('hide.bs.modal', function (e) {
        $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);
    })
    $('.pressing').click(function() {
        $(this).toggleClass('pressed')
        $(this).closest('form').find('.normb').toggleClass('noActive').prop('disabled', function(i, v) { return !v; });
    })
    $('.pressing span').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        
    })
    
    
    $(".form1").validate({
			rules: {
                name: {
          required: true,
        }, phonecall:{
            required:true,
            number: true
        }
      },
			submitHandler: function(form) {
			$.ajax({
			type: "POST", 
			url: "mail.php", 
			data: $(".form1").serialize(), 
			success: function(html)
			{		
                $('#m1').modal('toggle')
				$('#t1').modal('toggle');
                ym(53470108, 'reachGoal', 'Button1');
			} 
			}); 
			return false;
		}
	});
    $(".form2").validate({
			rules: {
                name: {
          required: true,
        }, phoneormail:{
            required:true
        }
      },
			submitHandler: function(form) {
			$.ajax({
			type: "POST", 
			url: "mail.php", 
			data: $(".form2").serialize(), 
			success: function(html)
			{		
                $('#m2').modal('toggle')
				$('#t2').modal('toggle');
                ym(53470108, 'reachGoal', 'Button2');
			} 
			}); 
			return false;
		}
	});
    $(".form3").validate({
			rules: {
                name: {
          required: true,
        }, phoneormail:{
            required:true
        }
      },
			submitHandler: function(form) {
			$.ajax({
			type: "POST", 
			url: "mail.php", 
			data: $(".form3").serialize(), 
			success: function(html)
			{		
                $('#m3').modal('toggle')
				$('#t3').modal('toggle');
                ym(53470108, 'reachGoal', 'Button3');
			} 
			}); 
			return false;
		}
	});
    $(".form4").validate({
			rules: {
                name: {
          required: true,
        }, phoneormail:{
            required:true
        }
      },
			submitHandler: function(form) {
			$.ajax({
			type: "POST", 
			url: "mail.php", 
			data: $(".form4").serialize(), 
			success: function(html)
			{		
                $('#m4').modal('toggle')
				$('#t4').modal('toggle');
                ym(53470108, 'reachGoal', 'Button3');
			} 
			}); 
			return false;
		}
	});
    $(".form5").validate({
			rules: {
                name: {
          required: true,
        }, phoneormail:{
            required:true
        }
      },
			submitHandler: function(form) {
			$.ajax({
			type: "POST", 
			url: "mail.php", 
			data: $(".form5").serialize(), 
			success: function(html)
			{		
                $('#m5').modal('toggle')
				$('#t4').modal('toggle');
                ym(53470108, 'reachGoal', 'Button3');
			} 
			}); 
			return false;
		}
	});
    $(".form6").validate({
			rules: {
                name: {
          required: true,
        }, phonecall:{
            required:true,
            number: true
        }
      },
			submitHandler: function(form) {
			$.ajax({
			type: "POST", 
			url: "mail.php", 
			data: $(".form6").serialize(), 
			success: function(html)
			{		
                $('#m6').modal('toggle')
				$('#t1').modal('toggle');
                ym(53470108, 'reachGoal', 'Button1');
			} 
			}); 
			return false;
		}
	});
    
    
    
    $('.checks input').click(function() {
        var checked = $(this).closest('.modal').find("input[type=checkbox]:checked").length;
        if(!checked) {
        return false;
      }
        $(this).closest('.checks').each(function(){
            $(this).closest('.modal').find('.chDiv').hide()
            $(this).find('.inCh').each(function(){
                if($(this).has('input[type=checkbox]:checked').length) {
                    var index = $(this).index()
                    $(this).closest('.modal').find('.checked'+index+'').show()
                }
            })
        })
    })
});