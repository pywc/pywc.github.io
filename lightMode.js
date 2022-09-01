// light mode toggle handler
function toggleLight() {
    var element = document.body;
    var toggle = document.getElementById('light-toggle');
    var name = document.getElementById('my-name');
    element.classList.toggle("light-mode");

    // change to dark mode
    if (localStorage.getItem('isLightMode') === 'true') {
        localStorage.setItem('isLightMode', false);
        toggle.classList.remove('bi-moon');
        toggle.classList.add('bi-sun');
        if (name !== null) {
            name.setAttribute('style', '');
        }
    }

    // change to light mode
    else {
        localStorage.setItem('isLightMode', true);
        toggle.classList.remove('bi-sun');
        toggle.classList.add('bi-moon');
        if (name !== null) {
            name.setAttribute('style', 'color: black;');
        }
    }
}

// set to light mode if saved as on
if (localStorage.getItem('isLightMode') === 'true') {
    var element = document.body;
    var toggle = document.getElementById('light-toggle');

    element.classList.toggle("light-mode");
    toggle.classList.remove('bi-sun');
    toggle.classList.add('bi-moon');
    window.addEventListener('load', function () {
        var name = document.getElementById('my-name');

        if (name !== null) {
            name.setAttribute('style', 'color: black;');
        }
    })
}