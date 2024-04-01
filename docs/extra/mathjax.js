<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],  // Enable inline math using $...$
      processEscapes: true,                      // Process escaped LaTeX characters
      processEnvironments: true                 // Process LaTeX environments
    },
    TeX: {
      extensions: ["AMSmath.js", "AMSsymbols.js"], // Enable AMS extensions for LaTeX
      equationNumbers: { autoNumber: "AMS" }       // Automatically number equations with AMS
    }
  });

  // Function to reprocess MathJax
  function reprocessMathJax() {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  }

  // Trigger reprocessing after content is loaded
  document.addEventListener("DOMContentLoaded", function() {
    reprocessMathJax();
  });

  // Trigger reprocessing after TOC link is clicked
  document.addEventListener("click", function(event) {
    if (event.target.tagName === "A" && event.target.getAttribute("href").charAt(0) === "#") {
      reprocessMathJax();
    }
  });
</script>
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
