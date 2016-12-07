$("#join").click(function(){
                $("#join_modal").css("display", "block");
})
$("#join_close").click(function(){
                $("#join_modal").css("display", "none");
})

$('#join_bottom > input:even').mouseover(function(){
                $(this).css("background-image", "none");
                $(this).css("background-color", "teal");
                $(this).css("border", "0px");
                $(this).css("color", "#fff");
})
$('#join_bottom > input:even').mouseout(function(){
                $(this).css("background-image", "url('../img/list_btn.png')");
                $(this).css("border", "1px solid #a6a6a6");
                $(this).css("color", "#000");
})
$('#join_bottom > input:odd').mouseover(function(){
                $(this).css("background-image", "none");
                $(this).css("background-color", "#e84747");
                $(this).css("border", "0px");
                $(this).css("color", "#fff");
})
$('#join_bottom > input:odd').mouseout(function(){
                $(this).css("background-image", "url('../img/list_btn.png')");
                $(this).css("border", "1px solid #a6a6a6");
                $(this).css("color", "#000");
});
$("#join_section > div > input[type='text']").click(function(){
    $(this).val('');
});

$('#submit_btn').click(function(){

    if($("#jid_put").val()==''){
        alert("아이디는 필수입니다.");
    }else if($("#jpw_put").val()!=$("#jpw_put_ck").val()){
        alert("비밀번호와 확인이 일치하지 않습니다.");
    }
})