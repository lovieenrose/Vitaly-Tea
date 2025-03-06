document.addEventListener("DOMContentLoaded", function () {
    let percentage = 0;
    const loadingText = document.getElementById("loading-percentage");
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    const coffee = document.querySelector(".coffee");

    function updateLoading() {
        if (percentage <= 100) {
            loadingText.textContent = percentage + "%";

            let speed = 50; // Syncs with 4s coffee filling animation (4000ms / 100 steps)
            percentage++;

            setTimeout(updateLoading, speed);
        } else {
            // Smoothly hide loader and show content
            setTimeout(() => {
                loader.style.opacity = "0";
                setTimeout(() => {
                    loader.style.display = "none";
                    content.classList.remove("hidden"); // Show content
                    content.style.opacity = "1";
                }, 1000);
            }, 500);

            // STOP COFFEE FROM FILLING BUT KEEP WAVE ANIMATION
            coffee.style.height = "100%"; // Keeps coffee full
        }
    }

    updateLoading();
});
