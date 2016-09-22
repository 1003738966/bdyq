$(function(){

    // // 解除浏览器的默认行为
    // document.onmousedown=function (e) {
    //     e.preventDefault();
    //     document.onmousemove=function (e) {
    //         e.preventDefault();
    //     }
    // }
    // // 给每个屏幕注册滑动事件
    // // var flag=true;
    // var num=0;
    // // alert($(".row").length);
    // var screenH=document.getElementsByClassName("screen")[0].clientHeight;
    // window.onresize=function () {
    //     screenH=document.getElementsByClassName("screen")[0].clientHeight;
    // }
    // // $(".screen .text").css("opacity","0.3");
    // // console.log(screenH);
    // touch.on(".section","swipestart",function () {

    // })
    // touch.on(".section","swiping",function (e) {
    // })
    // touch.on(".section","swipeend",function (e) {
    //     // console.dir(e);
    //     if(e.direction=="up"){
    //         num++;
    //         if(num>=$(".section").length){
    //             num=$(".section").length-1
    //         }
    //         $(".bgbox").css("transition","margin 1s ease")
    //         $(".bgbox").css("marginTop",-num*screenH)
    //     }else if(e.direction=="down"){
    //         num--;
    //         if(num<=0){
    //             num=0;
    //         }
    //         $(".bgbox").css("transition","margin 1s ease")
    //         $(".bgbox").css("marginTop",-num*screenH)
    //     }





        /*手机客户端hot*/
$(".nav_2 li:eq(3) a").mouseover(function(){
    $(".erweima").css({display:"block"});
}).mouseout(function(){
    $(".erweima").css({display:"none"});
});

/*响应*/
var flag=true;
$(".small_right").click(function(){
    if(flag){
        $(".small_right_one").css({
            "transform-origin":"left",
            "transform":" rotate(45deg)"
        });
        $(".small_right_two").css({
            "transform-origin":"left",
            "transform":"rotate(-45deg)"
        });
        $(".menu").css({
            "height":"400px",visibility:"visible"
        });
        $(".menu li").each(function(index,obj){
            $(obj).css({
                transition:"all 0.1s linear "+index* 0.1+"s"
            })
        }).css({
            transform:"scale(1,1)",
            visibility:"visible"
        });
        flag=false;
    }else if(!flag){
        $(".small_right_one").css({
            "transform-origin":"left",
            "transform":"rotate(0)"
        });
        $(".small_right_two").css({
            "transform-origin":"left",
            "transform":"rotate(0)"
        });
        $(".menu").css({
            "height":"0px"
        });
        $(".menu li").each(function(index,obj){
            $(obj).css({
                transition:"none"
            })
        }).css({
            transform:"scale(1,0.3)",
            visibility:"hidden"
        });
        flag=true;
    }
});




//滑动
$(".bgBox").on("mousedown",function(e){
    e.preventDefault();
    $(".bgBox").on("mousemove",function(){
        e.preventDefault();
    })
});//阻止浏览器默认行为
 /*
//
var clientH=$(window).height();
var flag1=true;/!*设置开关，因为滑动时会一次触发多个滑动事件，为防止这样的事情发生，利用开关思想，当触发第一个滑动事件之后，就关闭开关，当执行完滑动事件里边的内容后，再次打开开关，以便下次执行下次的滑动事件*!/
var num=0;
touch.on($(".bgBox"),"swipe",function(e){
    if(e.direction=="up"){
        /!*
         * 1.方向
         * 2.开关
         * 3.数字关联
         * *!/
        if(num==$(".section").length-1){
            return;
        }
        if(!flag1){
            return;
        }
        if(num==2){
            $(".page_two .left img").css({
                "margin-left":"0px",
                "opacity":"1"
            });
            $(".page_two .right img").css({
                "margin-left":"0px",
                "opacity":"1"
            });
        }

        flag1=false;
        num++;
        $(".bgBox").css({marginTop:-num*clientH});
    }else if(e.direction=="down"){
        if(num==0){
            return;
        }
        if(!flag1){
            return;
        }
        if(num==2){
            $(".page_two .left img").css({
                "margin-left":"-50px",
                "opacity":"0.5"
            });
            $(".page_two .right img").css({
                "margin-left":"50px",
                "opacity":"0.5"
            });
        }

        flag1=false;
        num--;
        $(".bgBox").css({marginTop:-num*clientH});
    }
});
$(".bgBox")[0].addEventListener("webkitTransitionEnd",function(){
    flag1=true;
});
*/


    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#myMenu',
        onLeave: function(index, nextIndex){
            //after leaving section 2
            if(index==1){
                $(".chuan").css({"left":"20%"});
            }else if(nextIndex==1){
                $(".chuan").css({"left":"22%"});
            }
            if(index==2){
                $(".lingxian").css({"marginLeft":"-80px", "opacity":"0.1"});
                $(".lingxianBox p").css({"left":"20%", "opacity":"0.1"});
                $(".brain").css({"right":"10%", "opacity":"0.1"});
            }else if(nextIndex==2){
                $(".lingxian").css({"marginLeft":"0", "opacity":"1"});
                $(".lingxianBox p").css({"left":"22%", "opacity":"1"});
                $(".brain").css({"right":"15%", "opacity":"1"});
            }
            if(index==3){
                $(".quanmian").css({"marginLeft":"-80px", "opacity":"0.1"});
                $(".quanmianBox p").css({"left":"20%", "opacity":"0.1"});
                $(".quanmian_img").css({"right":"10%", "opacity":"0.1"});
            }else if(nextIndex==3){
                $(".quanmian").css({"marginLeft":"0", "opacity":"1"});
                $(".quanmianBox p").css({"left":"22%", "opacity":"1"});
                $(".quanmian_img").css({"right":"15%", "opacity":"1"});
            }
            if(index==4){
                $(".zhuanye").css({"marginLeft":"-80px", "opacity":"0.1"});
                $(".zhuanyeBox p").css({"left":"20%", "opacity":"0.1"});
                $(".zhuanye_img").css({"right":"10%", "opacity":"0.1"});
            }else if(nextIndex==4){
                $(".zhuanye").css({"marginLeft":"0", "opacity":"1"});
                $(".zhuanyeBox p").css({"left":"22%", "opacity":"1"});
                $(".zhuanye_img").css({"right":"15%", "opacity":"1"});
            }

        }
    });



});














