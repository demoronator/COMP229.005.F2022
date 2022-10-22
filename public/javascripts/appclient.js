// Student ID: 301215136
// Name: Wonyoung Chung
// Date: Oct 01, 2022

console.log("app script is working.")

if (getTitle === "Inventory List") {
    const deleteButtons = document.querySelectorAll(".btn-danger")
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (!confirm("Are you sure?")) {
                e.preventDefault()
                // TODO
            }
        })
    })
}
if (getTitle === "Sign-up Form") {
    const confirm = document.querySelector("input[name=password_confirm]")
    confirm.addEventListener("change", onChange)
}

function onChange() {
    const password = document.querySelector("input[name=password]")
    const confirm = document.querySelector("input[name=password_confirm]")

    if (confirm.value === password.value) {
        confirm.setCustomValidity("")
    } else {
        confirm.setCustomValidity("Passwords do not match")
    }
}
