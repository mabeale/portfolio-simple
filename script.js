document.querySelector('body').classList.toggle('active');
let palette = [];
const toggleMode = document.querySelector('.toggle-mode');
let span = document.getElementById('fullYear');
span.textContent = new Date().getFullYear();
let isDarkMode = false;

// get system color mode
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDarkMode = true;
    toggleMode.querySelector('i').classList.add('fa-moon');
    toggleMode.querySelector('i').classList.remove('fa-sun');
    // document.querySelector('body').classList.add('dark-mode');
}

fetch('./palette.json')
    .then(res => res.json())
    .then(data => {
        palette = data;
        applyColorMode();
    });

toggleColorMode = () => {
    isDarkMode = !isDarkMode;
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