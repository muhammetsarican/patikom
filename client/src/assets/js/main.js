const avatarButton = document.querySelector("#avatar");
const avatarBox = document.querySelector("#avatar-box");

// avatar button - script
avatarButton.addEventListener("click", () => {
    avatarBox.classList.toggle("hidden");
    avatarButton.classList.toggle("bg-primary");
    avatarButton.classList.toggle("bg-tertiary");
})
// avatar button - script