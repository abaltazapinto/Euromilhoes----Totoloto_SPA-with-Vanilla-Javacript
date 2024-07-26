document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => content.innerHTML = html);
    }

    document.getElementById('euromilhoes-link').addEventListener('click', () => {
        event.preventDefault();
        loadPage('euromilhoes.html');
    });

    document.getElementById('totoloto-link').addEventListener('click', () => {
        event.preventDefault();
        loadPage('totoloto.html ');
    });

    document.getElementById('trendAnalysis-link').addEventListener('click', () => {
        event.preventDefault();
        loadPage('trendAnalysis.html');
    });

    // Load the default page
    loadPage('euromilhoes.html');
});
