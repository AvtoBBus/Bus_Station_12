let index = 0;
const formElement = document.getElementById('form');
const button = document.getElementById('submit_button');
button.addEventListener('click', (e) => {
    const formData = new FormData(formElement);
    if (formData.get("fvk") == "YOUR_VK_ID") {
        alert("pls entry your vk id");
        return;
    }
    if (formData.get("fgit") == "YOUR_GITHUB_ID") {
        alert("pls entry your github id");
        return;
    }
    result_output = "#";
    result_output += index;
    result_output += " ";
    for (pair of formData.entries()) {
        result_output += pair[0];
        result_output += ": ";
        result_output += pair[1];
        result_output += "; ";
    }
    console.log(result_output)
    index++;
})


