// winndow.onload() -> 在加載完頁面後立即執行
window.onload = () => {
    var cvs = document.getElementById("cvs");
    var ctx = cvs.getContext("2d");     // 用 canvas.getContext物件(Convas Context Object) 做繪圖，常見的是 '2d'繪圖
    
    // Fill 填滿
    ctx.fillStyle = 'darkblue';
    // ctx.globalAlpha = 1;
    ctx.fillRect(50, 50, 100, 100);

    // Stroke 描邊
    ctx.strokeStyle = 'purple';
    ctx.strokeRect(200, 50, 100, 100);

    // Path 路徑
    ctx.beginPath();    // 建立路徑
    ctx.moveTo(200, 100);   // 移動當前所在位置
    ctx.lineTo(250, 150);
    ctx.closePath();    // 關閉路徑
    ctx.stroke();   // 描邊

    ctx.beginPath();    // 建立路徑
    ctx.moveTo(250, 150);   // 移動當前所在位置
    ctx.lineTo(300, 100);
    ctx.closePath();    // 關閉路徑
    ctx.stroke();   // 描邊

    ctx.beginPath();    // 建立路徑
    ctx.moveTo(300, 100);   // 移動當前所在位置
    ctx.lineTo(250, 50);
    ctx.closePath();    // 關閉路徑
    ctx.stroke();   // 描邊

    ctx.beginPath();    // 建立路徑
    ctx.moveTo(250, 50);   // 移動當前所在位置
    ctx.lineTo(200, 100);
    ctx.closePath();    // 關閉路徑
    ctx.stroke();   // 描邊
}