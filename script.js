
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImage");
    const close = document.getElementById("closeModal");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = thumbnail.src;
        modalImg.alt = thumbnail.alt;
      });
    });

    close.onclick = () => {
      modal.style.display = "none";
    };

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };