function show() {
    var box = document.getElementById("box");
    // 取得 [box] 的尺寸
    var style = window.getComputedStyle(box);
    var width = style.getPropertyValue("width");    /* return "50px" */
    width = parseInt(width);    /* 轉字串型態為數字型態(方便計算) */
    // 產生放大動畫特效
    // window.setInterval(function(), millisecond) : 每 millisecond 執行 function() -> return 排程ID
    var animeId = window.setInterval(function() {
        // 設定停止條件
        // window.clearInterval(排程Id) : 清除排程
        if (width >= 300) { window.clearInterval(animeId); return; }
        width ++;   // 調整數值
        box.style.width = width + "px";     // 設定進 box
        box.style.height = width + "px";
    }, 1)
}