$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    
    $(".next").click(function(){
    
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
    
        var arr = [];
        
    
          $('.form-card :input', current_fs).each(function() {
            
            
              if(!$(this).val()){
                  $(this).removeClass( " border-success" ).addClass(" border-danger");
                  farr(0);
                  return true;
                  
              } else if($(this).val()) {
                  $(this).removeClass( " border-danger" ).addClass(" border-success");
                  varr(1);
                  return true;
              }
              
              
          });
         
      if($.inArray(0, arr) == -1){
              //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        
        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;
                
                    current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                    });
                next_fs.css({'opacity': opacity});
                },
            duration: 600
            });
      }else{
          //alert( '0 is found');
      }
        function farr(i){
            arr.push(i);
        }
        function varr(i){
            arr.push(i);
            
        } 
    });
    
    $(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();
    
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 600
    });
    });
    
    $('.radio-group .radio').click(function(){
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
    });
    
    $(".submit").click(function(){
    return false;
    })
    
    });