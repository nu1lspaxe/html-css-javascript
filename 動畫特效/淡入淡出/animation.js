window.onload = function() {
    var box = document.getElementById("box");
    box.addEventListener("mouseover", function() {
        this.style.opacity = 1;
        this.style.backgroundColor = "black";
    })
    box.addEventListener("mouseout", function() {
        this.style.opacity = 0.5;
        this.style.backgroundColor = "darkcyan";
    })
}