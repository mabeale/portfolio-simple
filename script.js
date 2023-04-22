let palette = [];
const toggleMode = document.querySelector('.toggle-mode');
const body = document.querySelector('body');
let span = document.getElementById('fullYear');
span.textContent = new Date().getFullYear();
let isDarkMode = false;

fetch('./palette.json')
    .then(res => res.json())
    .then(data => {
        palette = data;
        applyColorMode();
    });

toggleColorMode = () => {
    isDarkMode = !isDarkMode;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    toggleMode.querySelector('i').classList.toggle('fa-sun');
    toggleMode.querySelector('i').classList.toggle('fa-moon');

    applyColorMode();
}
applyColorMode = () => {
    const colorPalette = isDarkMode ? palette.dark : palette.light;
    const randomIndex = Math.floor(Math.random() * colorPalette.length);

    document.documentElement.style.setProperty('--bg-color', colorPalette[randomIndex][0]);
    document.documentElement.style.setProperty('--content-color', colorPalette[randomIndex][1]);
    document.documentElement.style.setProperty('--border-color', colorPalette[randomIndex][2]);
    document.documentElement.style.setProperty('--text-color', colorPalette[randomIndex][3]);
};

toggleMode.addEventListener('click', toggleColorMode);

body.classList.toggle('active');
