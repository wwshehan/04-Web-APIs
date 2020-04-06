var btnHome = document.getElementById("btn-home");
var btnClear = document.getElementById("btn-clear");

function goHome() {
    window.location.href = "index.html";
}

btnHome.addEventListener("click", goHome);