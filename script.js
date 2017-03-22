$(".slide").eq(1).fadeOut();
$(".slide").eq(2).fadeOut();
// Set the counter
var i = 0;
$(function() {
	var icon = '<i class="fa-caret-down fa"></i>'
	// Header language
	$("header .language div:first-child").on("click",function() {
		$("header .select").slideToggle();
		$("header .select div").on("click",function() {
			$(".default").html($(this).html() + icon);
			$("header .select").slideUp();
		});
	});

	$("header .language .default-curnt").on("click",function() {
		$(".curnt").slideToggle();
		$(".curnt span").on("click",function() {
			$(".default-curnt").html($(this).html() + icon);
			$(".curnt").slideUp();
		});
	});


	// Slide the Menu Icon
	$("i.fa-align-justify").on("click",function() {
		$("nav ul").slideToggle();
	});

	// Slider 
	// Controllers Change The font weight on the click + Show the right slider
	$(".controllers .select span:even").eq(0).on("click",function() {
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		$(".slide").fadeOut();
		$(".slide").eq(0).fadeIn();
		i = 0;
	});
	$(".controllers .select span:even").eq(1).on("click",function() {
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		$(".slide").fadeOut();
		$(".slide").eq(1).fadeIn();
		i = 1;
	});
	$(".controllers .select span:even").eq(2).on("click",function() {
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		$(".slide").fadeOut();
		$(".slide").eq(2).fadeIn();
		i = 2;
	});
	// when Right arrow Clicked
	$(".arrows i.fa.fa-angle-right").on("click",function(){
		i++;
		// Change the font of the current controller to bold 
		switch(i) {
			case 3:
				i = 0;
		    case 0:
		        $(".controllers .select span:even").eq(0).addClass("active");
				$(".controllers .select span:even").eq(0).siblings().removeClass("active");
		        break;
		    case 1:
		        $(".controllers .select span:even").eq(1).addClass("active");
				$(".controllers .select span:even").eq(1).siblings().removeClass("active");
		        break;
		    case 2:
			    $(".controllers .select span:even").eq(2).addClass("active");
				$(".controllers .select span:even").eq(2).siblings().removeClass("active");
				break;
		    default:
		        break;
		}
		// Add class Hide to all div except the one that equals to the counter
		$(".slide").fadeOut();
		$(".slide").eq(i).fadeIn();

		if( i >= 2 ) {
			i = -1;
		}

	});
	// left arrow 
	$(".arrows i.fa.fa-angle-left").on("click",function(){
		i--;
		i += 3;
		// Change the font of the current controller to bold 
		switch(i) {
			case 3:
				i = 0;
		    case 0:
		        $(".controllers .select span:even").eq(0).addClass("active");
				$(".controllers .select span:even").eq(0).siblings().removeClass("active");
		        break;
		    case 1:
		        $(".controllers .select span:even").eq(1).addClass("active");
				$(".controllers .select span:even").eq(1).siblings().removeClass("active");
		        break;
		    case 2:
			    $(".controllers .select span:even").eq(2).addClass("active");
				$(".controllers .select span:even").eq(2).siblings().removeClass("active");
				break;
		    default:
		        break;
		}
		// Add class Hide to all div except the one that equals to the counter
		$(".slide").fadeOut();
		$(".slide").eq(i).fadeIn();

		if( i >= 2 ) {
			i = -1;
		}

	});

});
