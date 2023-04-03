// 這個是起手式，可以用來寫JQ，裡面才可以寫jq
$(document).ready(function () {
    // 當我點選class button時，會執行function裡面，的程式碼。
    $('.button').click(function (e) {
        console.log(1);
        // 這邊前面可以寫class裡面的哪個元件。顯示或是隱藏。
        // $('.title #test').hide();
        // 綁定特定物件，後面teggle()判斷現在是顯示或是隱藏，隱藏他就顯示，顯示他就隱藏。
        $('.title #test').toggle();
    });
    // 綁定留言板顯示按鈕，當要留言時才
    $('.button2').click(function (e) {
        // 綁定特定物件，顯示物件。
        // slideDown是指慢慢顯示用三秒。
        $('.text').slideToggle(3000);
    });
    // 當滑鼠hover，滑入滑出時動作。。
    $('.hover').hover(function () {
        // 滑鼠滑到時顯示。
        $('.title #test').show();

    }, function () {
        // 滑鼠離開時動作。 
        $('.title #test').hide();
    }
    );
    $('.fade-button').click(function (e) {
        // 自動偵測現在隱藏或顯示，當隱藏就顯示，當顯示舊隱藏。
        $('.fade').fadeToggle();
        // 漸漸顯示。
        // $('綁定物件').fadeIn("秒數");
        // 漸漸隱藏。
        // $('綁定物件').fadeOut("秒數");
    });
    $('.toggle-button').click(function (e) {
        $('.toggle').toggleClass("active");
    });
    // 連連接動畫效果。
    // 綁定class start，click點擊時會，執行以下動做。
    $(".start").click(function (e) { 
        console.log("測試連接");
        // class box_link_jq，會先滑下用三秒，接下來滑上用三秒。可以無限接下去。
        $(".box_link_jq").slideDown(3000).slideUp(3000).fadeIn().fadeOut();
        // 這邊是連續動作。
    });
    // 測試輸入輸出。
    $(".box").hover(function () {
            $(".box .title").show(1000);
            
        }, function () {
            $(".box .title").slideUp(1000);
        }
    );

});
