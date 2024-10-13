function toggleTheme() {
    if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
        window.dispatchEvent(new Event('changeTheme'))
    } else {
        localStorage.setItem("theme", "light");
        window.dispatchEvent(new Event('changeTheme'))
    }

    initializeTheme();
}

function initializeTheme() {
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
}

initializeTheme();
