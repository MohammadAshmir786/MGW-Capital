// Get the button
var mybutton = document.getElementsByClassName("scroll_btn")[0];

/**
 * Display the scroll-to-top button based on the scroll position.
 * If the user scrolls down 1300px from the top of the document, show the button.
 * Otherwise, hide it.
 */
function btnShow() {
    if (
        document.body.scrollTop > 1300 ||
        document.documentElement.scrollTop > 1300
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

/**
 * Scroll the document to the top when the button is clicked.
 */
function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Set up the scroll event listener to show/hide the button
window.onscroll = () => btnShow();

// Add click event listener to the button to trigger scrolling to the top
mybutton.addEventListener("click", goToTop);
