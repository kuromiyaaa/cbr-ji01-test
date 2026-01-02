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
});