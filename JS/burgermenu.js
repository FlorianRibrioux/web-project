function toggleMenu() {
    var menu = document.querySelector('.mobile-header-nav');
    if (!menu) return;
    var display = window.getComputedStyle(menu).display;
    if (display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}