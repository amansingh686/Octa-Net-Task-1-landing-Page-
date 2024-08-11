document.querySelector('.about-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.about-section').style.display = 'flex';
});

document.getElementById('close-about').addEventListener('click', function() {
    document.querySelector('.about-section').style.display = 'none';
});
