// Student ID: 301215136
// Name: Wonyoung Chung
// Date: Oct 01, 2022

console.log("it goes to the client-side.");

if (getTitle === "Inventory List")
{
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
