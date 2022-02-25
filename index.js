
var menu=document.getElementById("nav");
var styles=getComputedStyle(menu);
var enviar=document.getElementById('enviar');



/*  Función para mostrar el desplaegable del menú y/o ocultarlo 
con un click*/
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
