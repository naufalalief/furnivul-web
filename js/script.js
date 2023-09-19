document.addEventListener("DOMContentLoaded", function() {
    const modalOverlay = document.getElementById("modalOverlay");
    const closeModalButton = document.getElementById("closeModal");

    modalOverlay.style.display = "flex";

    closeModalButton.addEventListener("click", function() {
        modalOverlay.style.display = "none";
    });
});
