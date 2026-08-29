```javascript
/* =========================================================
   PARVIZ TAVAKOLI-KOLOUR WEBSITE
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                mainNav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

    }


    /* =====================================================
       MOBILE DROPDOWNS
       ===================================================== */

    const dropdowns =
        document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {

        const trigger =
            dropdown.querySelector(":scope > a");

        if (!trigger) return;

        trigger.addEventListener("click", function (event) {

            if (window.innerWidth <= 800) {

                event.preventDefault();

                dropdowns.forEach(function (other) {

                    if (other !== dropdown) {
                        other.classList.remove("open");
                    }

                });

                dropdown.classList.toggle("open");
            }

        });

    });


    /* =====================================================
       CLOSE MOBILE MENU AFTER LINK CLICK
       ===================================================== */

    const navLinks =
        document.querySelectorAll(
            ".main-nav a:not(.dropdown > a)"
        );

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 800) {

                mainNav?.classList.remove("open");

                menuToggle?.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    });


    /* =====================================================
       PUBLICATION FILTERS
       ===================================================== */

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const publications =
        document.querySelectorAll(".full-publication");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedYear =
                button.dataset.filter;

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            publications.forEach(function (publication) {

                const publicationYear =
                    publication.dataset.year;

                if (
                    selectedYear === "all" ||
                    publicationYear === selectedYear
                ) {

                    publication.classList.remove("hidden");

                } else {

                    publication.classList.add("hidden");

                }

            });

        });

    });


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            image.classList.add("image-error");

            image.alt =
                "Image unavailable";

        });

    });


    /* =====================================================
       CLOSE MOBILE NAV ON RESIZE
       ===================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 800) {

            mainNav?.classList.remove("open");

            menuToggle?.setAttribute(
                "aria-expanded",
                "false"
            );

            dropdowns.forEach(function (dropdown) {
                dropdown.classList.remove("open");
            });

        }

    });


    /* =====================================================
       SMOOTH ANCHOR SCROLLING
       ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (anchor) {

        anchor.addEventListener("click", function (event) {

            const targetId =
                anchor.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});
```

