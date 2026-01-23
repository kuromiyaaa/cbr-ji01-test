$(document).ready(function () {
    var upWindow = $('#pop_up');
    var flag = true;
    var hasShown = false; // ポップアップが一度表示されたかどうか

    // 初期状態でポップアップを非表示
    upWindow.hide(); 

    // FVセクションの高さを取得
    var fvSection = $('.cb-fv');
    var fvHeight = fvSection.length ? fvSection.outerHeight() : 0;
    // FVより少し下（FVの高さ + 200px）で表示
    var scrollThreshold = fvHeight + 200;

    // スクロールイベントを監視
    $(window).on('scroll', function () {
        if (!hasShown && flag) {
            var scrollTop = $(window).scrollTop();
            
            // スクロール位置が閾値を超えたらポップアップを表示
            if (scrollTop > scrollThreshold) {
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