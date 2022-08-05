  document.addEventListener("DOMContentLoaded", function () {

      /* ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

      Define DOM id's and classes

      ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ */

    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.animation-fade-in-from-bottom');
        for (const element of elements) {
            const position = element.getBoundingClientRect();
        // Check if element is fully visible
        if(position.top < window.innerHeight && position.bottom >= 0) {
            setTimeout(() => {
                element.classList.add('show-fade-in-from-bottom');
              }, 200);
        } 
        }
    });

  });