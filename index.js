
var menu=document.getElementById("nav");
var styles=getComputedStyle(menu);

$('#menu_img').click(function(){
    if(styles.display==='block'){
        $('.header-nav').css({

            'display':'none'
        })
       
    }else{
        $('.header-nav').css({

            'display':'block'
        })
    }
   
});