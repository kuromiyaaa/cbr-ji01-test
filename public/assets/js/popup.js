$(document).ready(function () {
    var upWindow = $('#pop_up');
    var flag = true;

    // 初期状態でポップアップを表示
    upWindow.show(); 

    // ✖ボタンで非表示
    $('button').click(function () {
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