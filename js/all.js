// 這個是起手式，可以用來寫JQ，裡面才可以寫jq
$(document).ready(function () {
    $('.button').click(function (e) { 
        // 這邊前面可以寫class裡面的哪個元件。顯示或是隱藏。
        $('.title h1').hide(); 
    });
    $('.button2').click(function (e) { 
        $('.title h1').show();
    });
});