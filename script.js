const card = document.getElementById("card");

card.addEventListener("mouseover", () => {
	card.style.transform = "rotateY(180deg)";
});

card.addEventListener("mouseout", () => {
	card.style.transform = "rotateY(0deg)";
});



var testi = $('#testimonial-slide');
var owlcarouselslide = function(e) {

	// testimonial slide
	testi.owlCarousel({
		autoplay: false,
		center: true,
		loop: true,
		dots: true,
		touchDrag: false,
		mouseDrag: false,
		smartSpeed: 900,
		items: 1,
		margin: 100,
		nav: true,
		navText: [
			'<i class="fa fa-long-arrow-left " aria-hidden="true"></i>',
			'<i class="fa fa-long-arrow-right " aria-hidden="true"></i>'
		],
		navContainer: '.custom-nav',
	});
};

$(document).ready(function() {
	owlcarouselslide();
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop();

    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop through each link and check if its href matches the current page
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        // If the href matches the current page, add the 'active' class
        if (linkPage === currentPage || (linkPage === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        }
    });
});
