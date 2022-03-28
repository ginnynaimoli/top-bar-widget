$(document).ready(function(){
    var $body = $('body'),
        $topbarBar = $('.topbar-bar'),
        $topbarLever = $('.topbar-lever'),
        $bodyMargin = parseInt($('body').css('margin').replace('px','')),
        // change body margin to an integer
        $topbarHeight = $topbarBar.outerHeight();

    // Calculate the total height of the bar (39) + the margin of the body (8) to make space
    // Once the bar goes up, make the margin back to original margin (8)

    $topbarBar.slideDown(); // slideDown to make smoother when reload the page
    $body.css('margin', ($bodyMargin + $topbarHeight));
    $topbarLever.hide();

    $('.closelink').on('click', function(){
        $topbarBar.slideUp('100');
        $topbarLever.delay('200').slideDown('100');
        $body.animate({
            'margin': $bodyMargin
            }); 
        
    })
    $('.topbar-lever').on('click', function(){
        $topbarLever.slideUp('100');
        $topbarBar.delay('200').slideDown('100');
        $body.animate({
            'margin': ($bodyMargin + $topbarHeight)
            }); 
        
    })


});