document.addEventListener("DOMContentLoaded", function(event) {
    // Get all TOC links
    var tocLinks = document.querySelectorAll(".md-toc a");
    
    // Add click event listener to each TOC link
    tocLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            // Force a page reload after clicking on the TOC link
            location.reload();
        });
    });
});

