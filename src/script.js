window.addEventListener('DOMContentLoaded', function() {
    var navbarLinks = document.querySelectorAll('.navbar a');
    var registerButton = document.getElementById('register-btn');

    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            var targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                event.preventDefault();
                var targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    registerButton.addEventListener('click', function() {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfXSCYQiJgna5JIeLesypAP4OBhs4NztSwhf9QndrEzzrskUA/viewform?vc=0&c=0&w=1&flr=0K', '_blank');
    });
});
