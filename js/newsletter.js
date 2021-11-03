

const inputSub = document.getElementById('subscripcion')

const SubForm = document.getElementById('sub-form')

inputSub.onfocus = () => {
    inputSub.placeholder = ''
}

inputSub.onblur = () => {
    inputSub.placeholder = ' ejemplo@gmail.com'
}

SubForm.onsubmit = () => {

    const SubEmail = JSON.stringify(inputSub.value)

    if (SubEmail == localStorage.getItem("SubEmail")) {

        console.error("Este email ya esta registrado");
        alert("Este email ya esta registrado")
    }
    else {
        localStorage.setItem ("SubEmail", SubEmail)
    }

}