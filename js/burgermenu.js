function toggleMenu() {
    var menu = document.querySelector('.mobile-header-nav');
    if (!menu) return;

    menu.classList.toggle('active');

    var icon = document.querySelector('.icon i');
    if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    }
}