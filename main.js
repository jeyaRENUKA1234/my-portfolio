        let body = document.querySelector("body");
        let btn = document.querySelector("#burger");

        btn.addEventListener('click', function() {
            body.classList.toggle("line");
        });

        let hamburger = document.querySelector(".hamburger");

      hamburger.addEventListener("click", function() {
          document.querySelector("body").classList.toggle("active");
      });