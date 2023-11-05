const button_films = document.getElementById("button_films");

button_films.addEventListener('click', function (event) {
    window.location.href = this.getAttribute("href");
});