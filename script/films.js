const button_info = document.getElementById("button_info");

button_info.addEventListener('click', function (event) {
    window.location.href = this.getAttribute("href");
})