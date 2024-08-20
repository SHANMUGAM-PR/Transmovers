document.getElementById('integrity-card').addEventListener('click', function() {
    this.classList.add('active');
    setTimeout(() => {
        this.classList.remove('active');
    }, 300);  
});
