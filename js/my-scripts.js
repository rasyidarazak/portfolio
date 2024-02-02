var images = document.querySelectorAll('img');

images.forEach(function(image) {
    image.ondragstart = function() { return false; };
});

[...document.querySelectorAll('[data-bs-toggle="popover"]')]
    .forEach(el => {
    const popover = new bootstrap.Popover(el, {
        html: true,
        content: function () {
            return el.getAttribute('data-bs-content');
        }
    });
});

function toggleNavbar() {
    var toggler = document.getElementById("navbar-toggler");
    var icon = document.getElementById("navbar-toggler-icon");
  
    icon.classList.add("rotate-icon");

    setTimeout(function() {
        toggler.classList.toggle("collapsed");
        icon.innerHTML = toggler.classList.contains("collapsed") ? "<i class='fa-solid fa-xmark fa-xl text-info'></i>" : "<i class='fa-solid fa-bars fa-xl text-info'></i>";
        icon.classList.remove("rotate-icon");
    }, 150);
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var myName = document.getElementById("my-name");
        myName.classList.add("my-name-go");
    }, 100);

    setTimeout(function() {
        var firstName = document.getElementById("first-name");
        firstName.classList.add("first-name-go-bright");
    }, 500);

    setTimeout(function() {
        var firstName = document.getElementById("first-name");
        firstName.classList.remove("first-name-go-bright");
        firstName.classList.add("first-name-go");
    }, 1000);
});

window.addEventListener('scroll', function () {
    var top = document.getElementById('about');
    if (top) {
        var wScroll = window.scrollY;

        var skillsSection = document.getElementById('skills');
        if (wScroll > skillsSection.offsetTop - 200) {
            var cards = document.querySelectorAll('#skills .card');

            cards.forEach(function (card, i) {
                setTimeout(function () {
                    cards[i].classList.add('skills-go');
                }, 100 * (i + 1));
            });
        }

        var interestsSection = document.getElementById('interests');
        if (wScroll > interestsSection.offsetTop - 200) {
            setTimeout(function() {
                var cloudStrife = document.getElementById("cloud-strife");
                cloudStrife.classList.add("cloud-strife-go");
            }, 100);
        }
    }
});

(function(){
    emailjs.init("uNRyc5EjJmWCr_NFO");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var submitButton = document.getElementById('submit-btn');
    submitButton.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
    submitButton.setAttribute('disabled', 'disabled');

    emailjs.sendForm("service_vp3665j", "template_53wiq0h", this)
    .then(function(response) {
        console.log("Email sent successfully:", response);

        submitButton.innerHTML = 'Submit';
        submitButton.removeAttribute('disabled');

        var myToast = new bootstrap.Toast(document.getElementById('myToast'));
        myToast.show();

        document.getElementById('contact-form').reset();
    }, function(error) {
        console.log("Email sending failed:", error);

        submitButton.innerHTML = 'Submit';
        submitButton.removeAttribute('disabled');

        var myToastFail = new bootstrap.Toast(document.getElementById('myToastFail'));
        myToastFail.show();
    });
 });