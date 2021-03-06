(function ($) {
// VERTICALLY ALIGN FUNCTION
$.fn.vAlign = function() {
    return this.each(function(i){
    var ah = $(this).height();
    var ph = $(this).parent().height();
    var mh = Math.ceil((ph-ah) / 2);
    $(this).css('padding-top', mh);
    });
};
})(jQuery);
$(document).ready(function(){
	var win_h = $(window).height();

	function setHeight(){
		$('.home > .hero').css({height:win_h});
		$(".vcenter").vAlign();
	}

    var audio = $("#preview-track");

    $(".preview-track-button .btn").click(function(event) {
        event.preventDefault();
        var icon = $(this).find("i");

        if (icon.attr("class") == "icon-play") {
            audio.trigger("play");
            icon.removeClass("icon-play").addClass("icon-pause");
        } else {
            audio.trigger("pause");
            icon.removeClass("icon-pause").addClass("icon-play");
        }
    });

	setHeight();

    function toggleLogo() {
        if (isHome()) {
            $("#logo").hide();
        } else if(isWide()) {
            $("#logo").show();
        }
    }

    function isWide() {
        var win_w = $(window).width();
        return win_w > 767;
    }

    function isHome() {
        return $("#top-nav .current").find("a").attr("href") == "#home";
    }
	
	$(window).bind('resize',function() {
		setHeight();
	 });

	 $('#top-nav').onePageNav({

        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollOffset: 50,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        begin: function() {
            //I get fired when the animation is starting
        },
        end: function() {
            //I get fired when the animation is ending
            toggleLogo();
        },
        scrollChange: function($section) {
            //I get fired when you enter a section and I pass the list item of the section
            toggleLogo();
        }
    });

     $('#nav-button').click(function(){
        $top_nav = $('#top-nav');
        if($top_nav.is(':hidden')){
            $top_nav.slideDown("slow");
        }else{
            $top_nav.slideUp();
        }
     })

});