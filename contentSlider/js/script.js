/**
 * Created by priyankark on 21/12/16.
 */
$(document).ready(
    function () {
        //set defaults
        var speed=500; //fade speed
        var autoswitch=true; //auto slider options
        var autoswitch_speed=4000;

        //Add initial active class
        $('.slide').first().addClass('active');

        //Hide all slides
        $('.slide').hide();

        $('.active').show();

        $('#next').on("click",function () {
           $('.active').removeClass('active').addClass('oldActive');
            if($('.oldActive').is(':last-child')){
                $('.slide').first().addClass('active');

            }
            else
                $('.oldActive').next().addClass('active');
            $('.oldActive').removeClass('oldActive');
            $('.slide').fadeOut(speed);
            $('.active').fadeIn(speed);
        });

        $('#prev').on("click",function () {
            $('.active').removeClass('active').addClass('oldActive');
            if($('.oldActive').is(':first-child')){
                $('.slide').last().addClass('active');

            }
            else
                $('.oldActive').prev().addClass('active');
            $('.oldActive').removeClass('oldActive');
            $('.slide').fadeOut(speed);
            $('.active').fadeIn(speed);
        });

        if(autoswitch==true){
            setInterval(function () {
                $('.active').removeClass('active').addClass('oldActive');
                if($('.oldActive').is(':last-child')){
                    $('.slide').first().addClass('active');

                }
                else
                    $('.oldActive').next().addClass('active');
                $('.oldActive').removeClass('oldActive');
                $('.slide').fadeOut(speed);
                $('.active').fadeIn(speed);
                
            },autoswitch_speed);
        }

        
    }
);