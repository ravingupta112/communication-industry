$(document).ready(function(){

    $(".m-menu").on('click', function(){
$(".main-nav").show();
$(this).hide();
$(".fa-times").show();


    });

    $(".fa-times").on('click', function(){
        $(".main-nav").hide();
        $(this).hide();
        $(".m-menu").show();
        
            });

            $(".s-menu").on('click', function(){
                   $(".nav").show();
                $(this).hide();
                $("#s-nav-close").show();
                
                
                    });
                
                    $("#s-nav-close").on('click', function(){
                        $(".nav").hide();
                        $(this).hide();
                        $(".s-menu").show();
                        
                            });

});