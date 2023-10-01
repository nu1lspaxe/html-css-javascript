$(function() {
    var cvs, ctx;

    window.onload = () => {
      cvs = document.getElementById("cvs");
      ctx = cvs.getContext("2d");
      var img = new Image();
      img.src = "arcane-bg.jpg";
      img.onload = function () {
        // Image().onload -> 在圖片載入完成後，才會繪製
        ctx.drawImage(this, 0, 0, cvs.width, cvs.height);
      };
    };
    
    function invertColor() {
      var pixels = ctx.getImageData(0, 0, cvs.width, cvs.height); // ImageData 物件 -> 取得圖像資料
      var data = pixels.data; // 一個像素含有 4 個資料 (bytes) -> 分別是 r、g、b、a (範圍0~255)
      for (var i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
      }
    
      ctx.putImageData(pixels, 0, 0);
    }
    $("#invert").click(invertColor);
    // document.getElementById("invert").addEventListener("click", invertColor);
})

