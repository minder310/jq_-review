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
        let window_width = $(window).width();
        // console.log("畫面寬度", window_width);
        // 及時偵測網頁高度。
        let windowghight = $(window).height();
        // 先宣告總化面高度。
        // 偵測看到畫面的高度。只能偵測畫面顯示的高度。
        let allheight = $("body").height();
        // console.log("body總高度", allheight)
        let sum = allheight - windowghight;
        // console.log("剩餘高度", sum);
        // sum=sum-windowghight;
        // console.log(sum);
        // 綁定文檔的最高值，跟顯示出現在的最高位置顯示。
        // console.log($(document).scrollTop());
        // 宣告測試物件頂端，距離body高度0距離多少。
        let box_size_change = $(".box").offset().top;
        // console.log("物件頂端高度", box_size_change);
        let witch_window_height = $(window).height();
        // console.log("視窗大小", witch_window_height);
        let window_to_top = $(document).scrollTop();
        // console.log("距離頂端高度", window_to_top);
        let all_window = witch_window_height + window_to_top;
        // console.log("視窗與以捲動部份", all_window);
        if (box_size_change < all_window) {
            $(".box").css('width', '700px');
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
        $(".menu").css("background", "blue");
        // .menu>ul 指class menu下面的ul才會有動作，下滑顯示0.5秒，並且
        $(".menu > ul").slideDown(500);
        $(".menu > ul").hover(function () {
            $(".menu > ul").show();
            // 當class menu 下面的ul 下面的li被hover時，用被選取的this(被選取)改變css顏色。
            $(".menu > ul > li").hover(function () {
                $(this).css("background", "blue");

            }, function () {
                $(this).css("background", "rgba(255,255,255)");
            }
            );

        }, function () {
            $(".menu > ul").hide();
        }
        );
    }, function () {
        $(".menu").css("background", "rgba(255,255,255,0.2)");
        $(".menu > ul").hide();
    }
    );
    // 一.變換黏貼物件，大小至可做成下拉是選單。
    // 1.宣告黏貼物件距離頂端多少。
    // 2.scroll轉動高度高度多少。
    // 3.視窗可視範圍多少。
    // 將1.2.相加，並且就可知道目前可視範圍有多少。
    var test;
    $(window).scroll(function () {
        // sticky高度有多少。
        let stickyTop = $(".sticky").offset().top;
        // 動態顯示，目前視窗最高點距離視窗最高點多少。
        let scrollHeight = $(document).scrollTop();
        // 顯示目前視窗高度多少。
        let windowheight = $(window).height();
        // console.log("偵測高度", scrollHeight, "視窗高度", windowheight, "物件距離高度", stickyTop)
        if (stickyTop == scrollHeight) {
            $(".sticky").css("height", "30px").html("<button class='tobig'>變大</button><button class='tosmall'>變小</button>");
            // 綁定特定物件。
            chang_size_big = $(".tobig");
            chang_size_small=$(".tosmall");
            // 字體變大程式碼。
            chang_size_big.click(function (e) {
                e.preventDefault();
                // 型態轉換，要加在後面，讓後面的數值，轉換成你想要的數值，在塞入容器內。
                let size=$("p").css("font-size");
                // 因為取出的的字串型態，所以要將px給拿掉，並且要宣告為數字。。
                size=Number(size.replace("px",""));
                // console.log("型態",typeof(size),"數值",size);
                size=size+2;
                // console.log(size);
                $("p").css("font-size",size); 
            });
            chang_size_small.click(function (e) {
                e.preventDefault();
                // 型態轉換，要加在後面，讓後面的數值，轉換成你想要的數值，在塞入容器內。
                let size=$("p").css("font-size");
                // 因為取出的的字串型態，所以要將px給拿掉，並且要宣告為數字。。
                size=Number(size.replace("px",""));
                // console.log("型態",typeof(size),"數值",size);
                size=size-2;
                // console.log(size);
                $("p").css("font-size",size); 
            });

        } else {
            $(".sticky").css("height", "150px");
        }
    });
    // 以下關閉廣告jq
    $(".ad > a").click(function (e) { 
        e.preventDefault();
        $(".ad").hide(500);
    });
    // 顯示右邊選項列jq
    $(".top").click(function (e) {
        // 暫停預設的所有動作。 
        e.preventDefault();
        // 取用class aside 裡面的css並且，==後面這個值，適用conlog.log看出來的，所以才會這樣寫。
        if($(".aside").css("transform")=="matrix(1, 0, 0, 1, 0, 0)"){
            // 如果==就縮回去。
            $(".aside").css("transform","translateX(-270px)");
        }else{
            // 如果!=就把他推出來。
            $(".aside").css("transform","translateX(0px)");
        }
    })
    // 測試parent。會將點擊物件，的上一個物件改變class或是其他功能。
    $("input").click(function (e) { 
        e.preventDefault();
        // 點擊這個的parent()父元素，的所有siblings()同階層元素，刪除class active。
        $(this).parent().siblings().removeClass("active");
        // 點擊這個元素的parent()父元素，toggleclass()新增或是刪除，class active。
        $(this).parent().toggleClass("active");
    });
    // 測試find()可以拿來幹嘛。
    $(".find li").click(function (e) { 
        e.preventDefault();
        // 當點擊this的時候搜尋子元素，有沒有h4這個物件，要是有的化偵測，有沒有加入active沒有的話加入有的話刪除。
        $(this).find("h4").toggleClass("active");        
    });
    $(".sum").click(function (e) { 
        e.preventDefault();
        $(this).next("div").toggle(500);
    });
    // 使用parent與find進行選取，與建置。
    $(".test-parent-find > ul > li > a ").click(function (e) { 
        // 停止原本要做的動作。
        e.preventDefault();
        // 將所選物件，的父階層，的同階層裡的，裡面的ul全部隱藏。
        $(this).parent().siblings().find("ul").slideUp();
        // 將所選的物件顯示出來，或是隱藏。
        $(this).next("ul").slideToggle();
    });
    $("li").attr("title","123456789");
    // 測試remove()
    $("input").on("click", function () {
        $(this).parent().parent().remove();
    });
    // 綁定，class totop a下面，並綁定html body。
    $(".totop a").click(function (e) { 
        e.preventDefault();
        // 來到卷軸處，高度0處。
        $('html,body').animate({
            scrollTop: 0 
        //運用0.7秒。 
        },700);
    });
    // 可以綁定，物件裡面，a[href($)<<意思是包含.docx的名稱，就會加上後面的class。]
    // 這邊class仔入的是字型檔，並且可以直接用font-size改大小跟顏色。
    $("a[href$='.docx']").addClass("fa fa-sharp fa-light fa-file-word");
});
