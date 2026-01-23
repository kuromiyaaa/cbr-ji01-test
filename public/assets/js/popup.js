$(document).ready(function () {
    var upWindow = $('#pop_up');
    var flag = true;
    var hasShown = false; // ポップアップが一度表示されたかどうか

    // 初期状態でポップアップを非表示
    upWindow.hide(); 

    // 「月額費用以外にかかる費用はありますか？」のFAQ項目を取得（2番目のFAQ項目）
    var targetFaqItem = $('.c-faq__item').eq(1);

    // スクロールイベントを監視
    $(window).on('scroll', function () {
        if (!hasShown && flag && targetFaqItem.length) {
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            var targetTop = targetFaqItem.offset().top;
            
            // 要素が画面の中央付近に来たらポップアップを表示
            if (scrollTop + windowHeight / 2 >= targetTop) {
                upWindow.show();
                hasShown = true;
            }
        }
    });

    // ✖ボタンで非表示
    $('#pop_up button').click(function () {
        flag = false;
        $('#pop_up').hide();
    });

    // popup画像をクリックしたらc-formにスクロール
    $('#pop_up img').click(function () {
        var target = $('#c-form');
        if (target.length) {
            // スクロール
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 800);
            // ポップアップを閉じる
            $('#pop_up').hide();
        }
    });
});