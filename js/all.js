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
    $(window).scroll(function () {
        // 偵測畫面寬度，寫法。
        let window_width=$(window).width();
        console.log("畫面寬度",window_width);
        // 及時偵測網頁高度。
        let windowghight=$(window).height();
        // 先宣告總化面高度。
        // 偵測看到畫面的高度。只能偵測畫面顯示的高度。
        let allheight=$("body").height();
        console.log("body總高度",allheight)
        let sum=allheight-windowghight;
        console.log("剩餘高度",sum);
        // sum=sum-windowghight;
        // console.log(sum);
        // 綁定文檔的最高值，跟顯示出現在的最高位置顯示。
        console.log($(document).scrollTop());
        // 宣告測試物件頂端，距離body高度0距離多少。
        let box_size_change=$(".box").offset().top;
        console.log("物件頂端高度",box_size_change);
        let witch_window_height=$(window).height();
        console.log("視窗大小",witch_window_height);
        let window_to_top=$(document).scrollTop();
        console.log("距離頂端高度",window_to_top);
        let all_window=witch_window_height+window_to_top;
        console.log("視窗與以捲動部份",all_window);
        if(box_size_change<all_window){
            $(".box").css('width','700px');
        }
        /* 1.當滾動高度，>100時class box 會改變寬度。
        if($(document).scrollTop()>100){
            $(".box").css("width","700px");
        }
        // 當滾動高度小於多少時，變小表格。
        if($(document).scrollTop()<100){
            $(".box").css("width","200px");
        }*/
        // if(sum-$(document).scrollTop()<0){
        //     alert("你已經到底了唷。")
        // }
    });
    // 取消動作語法。
    // e代表物件本身。
    $(".no_move").click(function (e) {
        // preventDefault()取消預設動作。 
        e.preventDefault();
    });
    // .css語法。
    // $(".box").css("width","700px");
    // 下拉式選單出現與隱藏。
    $(".menu").hover(function () {
        $(".menu").css("background","blue");
        // .menu>ul 指class menu下面的ul才會有動作，
            $(".menu > ul").slideDown(500);
            $(".menu > ul").hover(function () {
                    $(".menu > ul").show();
                    // 當class menu 下面的ul 下面的li被hover時，用被選取的this(被選取)改變css顏色。
                    $(".menu > ul > li").hover(function () {
                            $(this).css("background","blue");
                            
                        }, function () {
                            $(this).css("background","rgba(255,255,255)");
                        }
                    );
                    
                }, function () {
                    $(".menu > ul").hide();
                }
            );
        }, function () {
            $(".menu").css("background","rgba(255,255,255,0.2)");
            $(".menu > ul").hide();
        }
    );
});
