window.addEventListener('load', ()=> {
    
    // CLick button
    const hamburgerButton = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    function toggleButton() {
        navList.classList.toggle('show');
    }
    hamburgerButton.addEventListener('click', toggleButton);

    // button aboutme
    let btnabout = document.querySelector('.button');
    btnabout.addEventListener('click', () => {
        window.location.href = '#aboutme';
    });

    // Copyright
    let spancopy = document.getElementById('copyright');
    let txtfecha = new Date().toDateString();
    let fecha = txtfecha.substring((txtfecha.length -4), txtfecha.length);
    spancopy.innerHTML = "Armando Salinas Elizondo &copy; " + fecha;
});