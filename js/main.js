$(function(){
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $('.p-hamburger').on('click', function() {
        $('.l-header').toggleClass('is-open');
        $("body").toggleClass('is-open');
        // if($('l-header').hasClass('is-open'));    
        // }
    });
    
    //マスクエリアをクリックした際メニューを閉じる
    $('.p-mask').on('click', function() {
        $('l-header').removeClass('is-open');
    });
    
    //リンクをクリックした際メニューを閉じる
    $('.p-nav a').on('click', function() {
        $('l-header').removeClass('is-open');
    });

    //初期表示時、トップへ戻るボタンは非表示
    $('.p-to-top').hide();

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if (scroll < 700) {
            $('.p-to-top').fadeOut();
        } else {
            $('.p-to-top').fadeIn();
        }
    });

    $('.p-to-top').click(function(){
        $('body,html').animate({scrollTop: 0}, 500);
        return false;
    });
});

