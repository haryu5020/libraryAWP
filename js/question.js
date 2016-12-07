var list = [];


$("#q_submit").click(function(){
    var title=$("#q_title").val();
    var con=$("#q_con").val();
    event.preventDefault();
    
    list.push({
        'title' : title,
        'con' : con
    });
    
    var add_con='<div><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span><p>'+title+'</p><input type="button" value="답변확인"></div>';
    
    $("#question_list").append(add_con);
    console.log(list);
});

$("#q_title").click(function(){
    $("#q_title").val('');
});
$("#q_con").click(function(){
    $("#q_con").val('');
})