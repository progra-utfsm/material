window.MathJax = {
    tex: {
        inlineMath: [["\\(", "\\)", ["$", "$"]]],
        displayMath: [["\\[", "\\]"], ["$$", "$$"], ["\\begin{equation}", "\\end{equation}"]],
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex"
    }
};

document$.subscribe(() => { 
  MathJax.typesetPromise()
})
