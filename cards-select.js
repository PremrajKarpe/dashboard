$(document).ready(function(){

    $(".card").click(function(){
        $(this).toggleClass('active');
        $(".status").removeClass('active');
        $(".active .status").addClass('active');
    });
    
    });