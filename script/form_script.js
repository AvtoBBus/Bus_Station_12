function submitListner(index) {
    const formElement = document.getElementById('form');
    formElement.addEventListener('submit', (e) => {
        const formData = new FormData(formElement);
        e.preventDefault();
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
}

var index = 0;
submitListner(index);