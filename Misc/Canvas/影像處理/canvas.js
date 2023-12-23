$(function() {
    var cvs, ctx;

    window.onload = () => {
      // onload 的加載速度比 ready 快，所以要在裡面指派 cvs、ctx
      cvs = document.getElementById("cvs");
      ctx = cvs.getContext("2d");
      /*
      // 綁定圖片
      var img = new Image();
      img.src = "arcane-bg.jpg";
      img.onload = function () {
        // Image().onload -> 在圖片載入完成後，才會繪製
        ctx.drawImage(this, 0, 0, cvs.width, cvs.height);
      };
      */
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

    function loadFile() {
      var file = this.files[0];  // 多物件中的第一個
      var img = new Image();
      img.src = URL.createObjectURL(file); // 內建URL物件，轉換檔案為網址型態
      img.onload = function() {
        ctx.drawImage(this, 0, 0, cvs.width, cvs.height);
      };
    }

    function saveFile() {
      const link = $("#download")[0];
      link.download = 'image.jpg';  // 預設下載檔名
      link.href = cvs.toDataURL("image/jpeg");    // 指定影像輸出格式
      link.click();
    }

    $("#invert").click(invertColor);
    $("#load-file").change(loadFile);
    $("#save").click(saveFile);
    // document.getElementById("invert").addEventListener("click", invertColor);
})

