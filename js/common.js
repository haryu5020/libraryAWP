$(document).ready(function () {
    $('body > header > header > img').click(function(){
         $(location).attr('href', 'main.html');
     })
                $('header > nav > div:even').mouseover(function(){
                    $(this).css("background-image", "none");
                    $(this).css("background-color", "teal");
                    $(this).css("color", "#fff");
                })
                $('header > nav > div:even').mouseout(function(){
                    $(this).css("background-image", "url('../img/list_btn.png')");
                    $(this).css("color", "#000");
                })
                $('header >nav > div:odd').mouseover(function(){
                    $(this).css("background-image", "none");
                    $(this).css("background-color", "e84747");
                    $(this).css("color", "#fff");
                })
                $('header > nav > div:odd').mouseout(function(){
                    $(this).css("background-image", "url('../img/list_btn.png')");
                    $(this).css("color", "#000");
                })
                $("#b_nav").click(function(){
                    $(location).attr('href', 'book_list.html');
                })
                $("#q_nav").click(function(){
                    $(location).attr('href', 'question.html');
                })
                $("#n_nav").click(function(){
                    $(location).attr('href', 'notice.html');
                })
                $("#map_nav").click(function(){
                    $(location).attr('href', 'map.html');
                })

});



            