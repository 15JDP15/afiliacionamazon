document.addEventListener('DOMContentLoaded', function() {
    var startTestButton = document.getElementById('startTest');
    var introElement = document.getElementById('intro');
    var timerElement = document.getElementById('timer');
    var imageArea = document.getElementById('imageArea');
    var questionForm = document.getElementById('questionForm');
    var confirmationMessage = document.getElementById('confirmationMessage');
    var acc = document.getElementById("aboutToggle");

    acc.addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });

    const navbarLinks = document.querySelectorAll('#navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    startTestButton.addEventListener('click', function() {
        introElement.style.display = 'none';
        startTestButton.style.display = 'none';
        imageArea.style.display = 'block';
        imageArea.innerHTML = '<img src="images/pruebamemoria.jpg" alt="Memory Test Image" class="responsive-image" />';
        timerElement.style.display = 'block';

        var timeLeft = 5;
        var timerInterval = setInterval(function() {
            timerElement.innerText = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerElement.style.display = 'none';
                imageArea.style.display = 'none';
                questionForm.style.display = 'block';
            }

            timeLeft -= 1;
        }, 1000);
    });

    questionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        confirmationMessage.style.display = 'block';
        questionForm.style.display = 'none';
    });
});
