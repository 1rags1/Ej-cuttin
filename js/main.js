document.addEventListener("DOMContentLoaded", () => {
    const panels = document.querySelectorAll(".panel");
    const modal = document.getElementById("panel-modal");
    const closeModal = document.querySelector(".close-btn");
    const panelDetails = document.querySelectorAll(".panel-details");

    panels.forEach(panel => {
        panel.addEventListener("click", () => {
            const panelId = panel.getAttribute("data-panel") + "-details";
            panelDetails.forEach(detail => detail.classList.remove("active"));
            document.getElementById(panelId).classList.add("active");
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
