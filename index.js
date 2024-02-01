document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Sticky navbar
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav");
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  // Slideshows
  function showSlides(containerId) {
    let slideIndex = 0;
    const slides = document.getElementById(containerId).getElementsByClassName("mySlides");

    function show() {
      let i;

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = "block";
      setTimeout(show, 2000); // Change slide every 2 seconds (adjust as needed)
    }

    show();
  }

  // Initial call to start the slideshows
  showSlides("slideshow1");
  showSlides("slideshow2");
  showSlides("slideshow3");
});
