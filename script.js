const pass = document.getElementById("pass");
const confPass = document.getElementById("conf-pass");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
    if(pass.value != confPass.value) {
        pass.classList.add("error")
        confPass.classList.add("error")
        e.preventDefault();
    }
});