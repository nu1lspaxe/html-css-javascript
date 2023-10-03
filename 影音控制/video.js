$(() => {
    var video;

    window.onload = () => {
        video = $("video")[0];
        video.addEventListener("timeupdate", updateTimer);
        
    };

    function updateTimer() {
        $("#timer").text(video.currentTime + " / " + video.duration);
        // var timer = document.getElementById("timer");
        // timer.innerHTML = video.currentTime + "/" + video.duration;
    }

    function playVideo() {
        video.play();
    }

    function pauseVideo() {
        video.pause();
    }

    function replayVideo() {
        // 將當前撥放時間(進度)設為 0 -> 即重新開始
        video.currentTime = 0; 
        video.play();
        // var timer = document.getElementById("timer");
    }

    $("#play-video").click(playVideo);
    $("#pause-video").click(pauseVideo);
    $("#replay-video").click(replayVideo);
})