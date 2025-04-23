
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    document.querySelector('#theme-toggle i').classList.remove('fa-moon');
    document.querySelector('#theme-toggle i').classList.add('fa-sun');
}

document.getElementById('navToggle').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('nav').classList.remove('active');
    });
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    
    const icon = document.querySelector('#theme-toggle i');
    if (document.documentElement.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

    
    
    
    
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('videoPlayer');

    function openModal() {
      modal.style.display = 'flex';
      video.play();
    }

    function closeModal() {
      modal.style.display = 'none';
      video.pause();
    }

    // Fermer le modal en cliquant à l'extérieur
    window.onclick = function(event) {
      if (event.target === modal) {
        closeModal();
      }
    };

