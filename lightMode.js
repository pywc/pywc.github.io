function toggleLight() {
    var element = document.body;
    var toggle = document.getElementById('light-toggle')
    element.classList.toggle("light-mode");

    if (localStorage.getItem('isLightMode') === 'true') {
        localStorage.setItem('isLightMode', false);
        toggle.classList.remove('bi-moon');
        toggle.classList.add('bi-sun')
    } else {
        localStorage.setItem('isLightMode', true);
        toggle.classList.remove('bi-sun');
        toggle.classList.add('bi-moon')
    }
}

if (localStorage.getItem('isLightMode') === 'true') {
    var element = document.body;
    var toggle = document.getElementById('light-toggle')
    element.classList.toggle("light-mode");

    toggle.classList.remove('bi-sun');
    toggle.classList.add('bi-moon')
}