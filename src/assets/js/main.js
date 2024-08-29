// THEME DARK/LIGHT
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
function applyStoredTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        html.dataset.theme = storedTheme;
    } else {
        html.dataset.theme = 'light';
    }
}
applyStoredTheme();
themeToggle.addEventListener("click", () => {
    const currentTheme = html.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
});


// HEADER SCROLL
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 200) {
        header.classList.add("headNoActive");
    } else {
        header.classList.remove("headNoActive");
    }
    if (scrollPosition >= 300) {
        header.classList.add("headActive");
    } else {
        header.classList.remove("headActive");
    }
});

// 
const yearElement = document.getElementById('year');
yearElement.textContent = new Date().getFullYear();