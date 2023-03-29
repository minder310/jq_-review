// 這個是起手式，可以用來寫JQ，裡面才可以寫jq
$(document).ready(function () {
    // 當我點選class button時，會執行function裡面，的程式碼。
    $('.button').click(function (e) { 
        // 這邊前面可以寫class裡面的哪個元件。顯示或是隱藏。
        // $('.title #test').hide();
        // 綁定特定物件，後面teggle()判斷現在是顯示或是隱藏，隱藏他就顯示，顯示他就隱藏。
        $('.title #test').toggle(); 
    });
    $('.button2').click(function (e) { 
        // 綁定特定物件，顯示物件。
        $('.title #test').show();
    });
});
