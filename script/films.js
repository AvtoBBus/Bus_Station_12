const button_info = document.getElementById("button_info");

button_info.addEventListener('click', function (event) {
    window.location.href = this.getAttribute("href");
})


const birthDay = new Date('12-11-1980');
const now = new Date;
const daysLag = Math.ceil(Math.abs(birthDay.getTime() - now.getTime()) / (1000 * 3600 * 24));
const age = Math.floor(daysLag / 365);

document.getElementsByClassName("actorBirthDay")[0].textContent = "Родился: " + birthDay.toISOString().split("T")[0];
document.getElementsByClassName("actorAge")[0].textContent = "Возраст: " + age;