var list=[
    '오늘은 도서관 휴무일 입니다.',
    '도서관은 음식물 반입이 금지되어 있습니다. 적발시 엄중처벌 하겠습니다.',
    '열람실에 짐을 놔둔채 자리를 비우지 마십시오.',
    '이번 달 신간 도서는 입고가 늦어질 예정입니다.'
];


for (var i=0;i<list.length;i++){
    list[i]= '<div><span class="glyphicon glyphicon-bell" aria-hidden="true"></span><p>'+list[i]+'</p></div>';
    $("#notice_list").append(list[i]);
};

console.log(list);

