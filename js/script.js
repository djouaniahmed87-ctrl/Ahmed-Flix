// script.js

document.addEventListener("DOMContentLoaded", function() {
  // ======= البحث المباشر عن الأفلام =======
  const searchInput = document.querySelector("nav.top-nav input[type='text']");
  const movieCards = document.querySelectorAll(".movie-card");

  if (searchInput) {
    searchInput.addEventListener("input", function() {
      const query = this.value.toLowerCase();

      movieCards.forEach(card => {
        const title = card.querySelector(".movie-overlay h3").textContent.toLowerCase();
        const desc = card.querySelector(".movie-overlay p").textContent.toLowerCase();
        if (title.includes(query) || desc.includes(query)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // ======= تأثير overlay عند المرور (اختياري إذا لم يكن CSS يكفي) =======
  movieCards.forEach(card => {
    const overlay = card.querySelector(".movie-overlay");
    card.addEventListener("mouseenter", () => {
      overlay.style.background = "rgba(0,0,0,0.75)";
    });
    card.addEventListener("mouseleave", () => {
      overlay.style.background = "rgba(0,0,0,0.6)";
    });
  });
});
