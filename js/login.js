$("#login").click(function(){
                $("#login_modal").css("display", "block");
})
$("#login_close").click(function(){
                $("#login_modal").css("display", "none");
})
           
$('#login_bottom > input:even').mouseover(function(){
                $(this).css("background-image", "none");
                $(this).css("background-color", "teal");
                $(this).css("border", "0px");
                $(this).css("color", "#fff");
})
$('#login_bottom > input:even').mouseout(function(){
                $(this).css("background-image", "url('../img/list_btn.png')");
                $(this).css("border", "1px solid #a6a6a6");
                $(this).css("color", "#000");
})
$('#login_bottom > input:odd').mouseover(function(){
                $(this).css("background-image", "none");
                $(this).css("background-color", "#e84747");
                $(this).css("border", "0px");
                $(this).css("color", "#fff");
})
$('#login_bottom > input:odd').mouseout(function(){
                $(this).css("background-image", "url('../img/list_btn.png')");
                $(this).css("border", "1px solid #a6a6a6");
                $(this).css("color", "#000");
});


$("#id_put").click(function(){
    $("#id_put").val('');
})

$("#login_btn").click(function(){

    if($("#id_put").val()=='admin'){
        if($("#pw_put").val()=='1234'){

            alert("관리자님 환영합니다!");
            $(location).attr('href', 'manage_main.html');
        }
    }else if($("#id_put").val()==''){
        alert("아이디를 입력해주세요.");
    }else if($("#pw_put").val()==''){
        alert("비밀번호를 입력해주세요.");
    }

})