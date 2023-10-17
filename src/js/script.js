if (window.screen.width < 426) {
    $(document).ready(function(){
        $(".gallery-image-fix").owlCarousel(
            {
                loop:true,
                margin:10,
                nav:false,
                dots: false,
                items:2
            }
        );
    });

    $('.burger-menu').on('click ontouchstart', function () {
        if ($( ".menu-container" ).hasClass('active')){
            $( ".menu-container" ).removeClass("active");
        } else {
            $( ".menu-container" ).addClass("active");
        }
    });
}