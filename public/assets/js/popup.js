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

    // popup画像をクリックしたらcb-plan__camにスクロール
    $('#pop_up img').click(function () {
        var target = $('#cb-plan__cam');
        if (target.length) {
            // popupを閉じる
            upWindow.hide();
            // スクロール
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 800);
        }
    });
});