const container = document.getElementById('courses-container');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

function manageButtons() {
    const isScrollable = container.scrollWidth > container.clientWidth;

    if (!isScrollable) {
        leftBtn.style.display = "none";
        rightBtn.style.display = "none";
    } else {
        if (container.scrollLeft <= 0) {
            leftBtn.style.display = "none";
        } else {
            leftBtn.style.display = "flex";
        }

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
            rightBtn.style.display = "none";
        } else {
            rightBtn.style.display = "flex";
        }
    }
}

function moveLeft() {
    container.scrollBy({
        left: -320,
        behavior: 'smooth'
    });
}

function moveRight() {
    container.scrollBy({
        left: 320,
        behavior: 'smooth'
    });
}

container.addEventListener('scroll', manageButtons);
window.addEventListener('resize', manageButtons);
window.onload = manageButtons;
setTimeout(manageButtons, 100);

function toggleCard(card) {
    const isActive = card.classList.contains('active');

    document.querySelectorAll('.course-card').forEach(c => {
        c.classList.remove('active');   
        c.classList.add('inactive');
    });

    if (!isActive) {
        card.classList.add('active');
        card.classList.remove('inactive');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    var counter = 0;
    document.querySelectorAll('.course-card').forEach(c => {
        if (!isActive) {
            counter++;
        } 
    });

    if (counter === 0) {
        document.querySelectorAll('.course-card').forEach(c => {
            c.classList.remove('inactive');
        });
    }
}

window.addEventListener('click', function(event) {
    if (!event.target.closest('.course-card')) {
        document.querySelectorAll('.course-card').forEach(c => {
            c.classList.remove('active');
            c.classList.remove('inactive');
        });
    }
});