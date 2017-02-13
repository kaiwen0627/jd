/**
 * Created by KaiWen on 2017/2/3.
 */

$(function () {
    /*生活服务*/
    (function () {
        var is = document.getElementById("life-i").getElementsByTagName("i");
        for (var k = 0; k < is.length; k++) {
            is[k].style.backgroundPosition = "0 " + (-k * 25) + "px"
        }
    })()


    /*top-ad*/
    $('.close-top-ad').click(function () {
        $('.top-ad').fadeOut();
    })

    /*banner*/
    banner();
    function banner() {
        var time = 0;
        var m = $('.circle li.active').index();
        $('.banner-ctrl').click(function () {
            var date = new Date();
            if (date - time > 200) {
                console.log(date - time);
                var i = $(this).index();
                if (i == 0) {//左按钮
                    m--;
                    if (m < 0) {
                        m = 7;
                    }
                } else {
                    m++;
                    if (m > 7) {
                        m = 0;
                    }
                }
                $('.big-pic-list li').eq(m).stop().fadeIn(200).siblings().stop().fadeOut(50);
                $('.circle li').eq(m).addClass('active').siblings().removeClass('active');
            }

            time = new Date();
        })

        //底部按钮

        $('.circle li').on('mouseenter', function () {
            var date = new Date();
            if (date - time > 200) {
                $(this).addClass('active').siblings().removeClass('active');
                var index = $(this).index();
                $('.big-pic-list li').eq(index).stop().fadeIn(200).siblings().stop().fadeOut(50);
                m = $('.circle li.active').index();
            }
            time = new Date;
        })
        // 自动播放

        var bannerTimer = null;
        autoBanner();
        function autoBanner() {
            bannerTimer = setInterval(function () {
                m++;
                if (m > 7) {
                    m = 0;
                }
                $('.big-pic-list li').eq(m).stop().fadeIn(400).siblings().stop().fadeOut(50);
                $('.circle li').eq(m).addClass('active').siblings().removeClass('active');

            }, 3000)
        }

        $('.slider').hover(function () {
            m = $('.circle li.active').index();
            clearInterval(bannerTimer);
        }, function () {
            autoBanner();
        })

    }

    /*秒杀倒计算*/
    (function () {
        var endTime = new Date("2018/01/26 0:0:0");//获取目标时间
        setInterval(function () {
            var date = new Date();//获取最新时间，一定放在定时器里面；
            var time = endTime.getTime() - date.getTime();//毫秒
            var s = parseInt(time / 1000);//总共剩余秒数
            // var d = parseInt(s / 3600 / 24);//计算天数
            var h = parseInt(s / 3600 % 24);//小时
            var m = parseInt(s / 60 % 60);//分钟
            var sec = parseInt(s % 60);//秒

            if (h < 10) {
                h = "0" + h;
            }
            if (m < 10) {
                m = "0" + m;
            }
            if (sec < 10) {
                sec = "0" + sec;
            }
            $('.hou').html(h);
            $('.min').html(m);
            $('.sec').html(sec);
        }, 1000);

    })();

    /*秒杀banner*/
    (function () {
        var i = -1;
        var date = 0;
        var timer = null;
        $('.next').on('click', function () {
            var time = new Date();
            if (time - date > 1000) {
                autoplay();
            }

            date = new Date();
        })
        $('.prev').on('click', function () {
            var time = new Date();
            if (time - date > 1000) {
                i++;
                if (i > 0) {
                    i = -5;
                    $('.cont').css({'left': i * 1000}).animate({'left': (i + 1) * 1000}, 1000)

                } else {
                    $('.cont').animate({'left': i * 1000}, 1000)
                }
            }
            date = new Date();
        })

        function autoplay() {
            i--;
            if (i < -5) {
                i = 0;
                $('.cont').css({'left': i * 1000}).animate({'left': (i - 1) * 1000}, 1000)
            } else {
                $('.cont').animate({'left': i * 1000}, 1000)
            }
        }

        clearInterval(timer);
        timer = setInterval(autoplay, 5000);
        $('.sm-banner-view').hover(function () {
            clearInterval(timer);
            $('.next').fadeIn();
            $('.prev').fadeIn();
        }, function () {
            timer = setInterval(autoplay, 5000);
            $('.next').fadeOut();
            $('.prev').fadeOut();
        })
    })();

    /*多个小轮播*/


    function ash(moveId, controlCls) {
        var time = 0;
        var k = -2;
        $(controlCls).on('click', function () {
            var i = $(this).index();
            var date = new Date();
            if (date - time > 500) {
                if (i == 1) {    /*left*/
                    k++;
                    if (k > 0) {
                        k = -3;
                        // $(moveId).css({
                        //     "transform": "translateX("+ 570*(k-1) +"px)"
                        // })
                    }
                    $(moveId).css({
                        "transform": "translateX("+ 570*k +"px)"
                    })
                    // $(moveId).stop().animate({
                    //     left: 570 * k
                    // }, 500)

                } else {          /*right*/
                    k--;
                    if (k < -3) {
                        k = 0;
                    }
                    $(moveId).css({
                        "transform": "translateX("+ 570*k +"px)"

                    })
                    // $(moveId).stop().animate({
                    //     left: 570 * k
                    // }, 500)
                }
            }
            time = new Date();
        })
    }

    ash('#ag-slide', '.ag-cont');
    ash('#aj-slide', '.aj-cont');
    ash('#ac-slide', '.ac-cont');
    ash('#ayd-slide', '.ayd-cont');
    ash('#ababy-slide', '.ababy-cont');
    ash('#aml-slide', '.aml-cont');


    /*两列合在一块*/

    $('.pcsm-cont').on('click', function () {
        var i = $(this).index();
        if (i == 1) {
            $('#pcsm-slide').css({
                "transform": "translateX(18px)"
            })
        } else {
            $('#pcsm-slide').css({
                "transform": "translateX(-1126px)"
            })
        }
    })

    // (function () {
    //     var time = 0;
    //     var k = -2;
    //     $('.ag-cont').on('click', function () {
    //         var i = $(this).index();
    //         var date=new Date();
    //         if(date-time>500){
    //             // alert($(this).index())
    //             if (i == 1) {    /*left*/
    //                 k++;
    //                 if (k > 0) {
    //                     k = -3;
    //                 }
    //                 $('#ag-slide').stop().animate({
    //                     // ' transform': 'translateX('+ 570*k +'px)'
    //                     left: 570 * k
    //                 }, 500)
    //                 // alert(k*570)
    //             } else {          /*right*/
    //                 k--;
    //                 if (k < -3) {
    //                     k = 0;
    //                 }
    //                 $('#ag-slide').stop().animate({
    //                     // ' transform': 'translateX('+ 570*k +'px)'
    //                     left: 570 * k
    //                 }, 500)
    //             }
    //         }
    //         time=new Date();
    //     })
    // })();


    /*享生活*/
    // (function () {
    //     $('.enjoy_life_item').hover(function () {
    //         $('this').children('img').animate({'left':-10},200);
    //     },function () {
    //         $('this').children('img').animate({'left':0},200);
    //     })
    // })();

    // $('.enjoy_life_item').hover(function () {
    //     $('.enjoy_life_item img').animate({'left':-10},200);
    // },function () {
    //     $('.enjoy_life_item img').animate({'left':0},200);
    // })


})