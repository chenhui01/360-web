$(function(){
    $(window).scroll(function (){
        var top = $("html,body").scrollTop();
        console.log(top);
        if (top>0) {
            $(".piece").css("margin-top","0px")
        } else{
            $(".piece").css("margin-top","-50px")
        };
        if (top>0) {
            $(".circle").css("margin-top","0px")
        } else{
            $(".circle").css("margin-top","-50px")
        };  
        if(top>636){
            $(".title2").css("background-size", "100%")
        }
        if(top>636){
            setTimeout(function(){
                $('.item1').css("opacity","1")
                $(".item1").css("margin-top","0px");
            },500);
        }
        if(top>636){
            setTimeout(function(){
                $('.item3').css("opacity","1")
                $(".item3").css("margin-top","0px")
            },800);
           
        }
        if(top>636){
            setTimeout(function(){
                $('.item2').css("opacity","1")
                $(".item2").css("margin-top","0px")
            },1100);
            
        }
        if(top>636){
            setTimeout(function(){
                $('.item4').css("opacity","1")
                $(".item4").css("margin-top","0px")
            },1400);
            
        } 
        if(top>1194){
            setTimeout(function(){
                $('.main3-text').css("opacity","1")
                $(".main3-text").css("margin-top","0px")
            },0);
            
        }
        if(top>1194){
            setTimeout(function(){
                $(".fig-inner").css({"opacity":"1","top":"-90px"})
            },500);
        }
        if(top>1194){
            setTimeout(function(){
                $('.shadow').css({"top":"120px","right":"-5px","opacity":"1"})
            },800);  
        }
        if(top>2068){
            setTimeout(function(){
                $('.main4-text').css("opacity","1")
                $(".main4-text").css("margin-top","0px")
            },500);
            
        } 
        if(top>2068){
            setTimeout(function(){
                $('.lock-inner').css("opacity","1")
            },1000);   
        }
        if(top>2068){
            setTimeout(function(){
                $('.lock-shield').css("opacity","1")
            },1000);   
        }
        if(top>2068){
            setTimeout(function(){
                $('.left-paper').css("opacity","1")
                $(".left-paper").css("margin-top","0px")
            },1300);
        } 
        if(top>2068){
            setTimeout(function(){
                $('.right-paper').css("opacity","1")
                $(".right-paper").css("margin-top","0px")
            },1600); } 
        if(top>2800){
            $('.main5-right').css({'top':'103px','opacity':'1'})
            setTimeout(function(){
                $('.main5-left').css({"opacity":"1",'top':'0'})
            },800)
            $('.view-btn-bottom').mouseenter(function(){
                $('.bottom-tab').css({'opacity':'1'})
            })
            $('.view-btn-bottom').mouseenter(function(){
                $('.toptab').css({'opacity':'0'})
            })
            $('.view-btn-top').mouseenter(function(){
                $('.bottom-tab').css({'opacity':'0'})
            })
            $('.view-btn-top').mouseenter(function(){
                $('.toptab').css({'opacity':'1'})

            })
        }
        if(top>3500){
            $(".main5-img").css({"opacity":"1","top":"100px"});
            setTimeout(function(){
                $(".main5-text").css({"opacity":"1","top":"190px"});
            },800)
            setTimeout(function(){
                $(".djxz").css({"opacity":"1"});
            },1300)
        }    
    });
});