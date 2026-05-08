function teachers() {
    const bio = event.target.parentElement.parentElement.getAttribute('data-bio');
    const teacher = event.target.getAttribute('data-teacher');

    // Build the details card
    const detailsCard = document.createElement('div');
    detailsCard.classList.add('details-card');
    detailsCard.innerHTML = `
        <img src="../data/${teacher}.jpg" alt="${teacher}" class="details-image">
        <h2>${teacher}</h2>
        <p>${bio}</p>
        <button onclick="CloseDetails()">Close</button>
    `;
    document.body.appendChild(detailsCard);
}

function CloseDetails() {
    const detailsCard= document.querySelector('.details-card');
    if (detailsCard) {
        detailsCard.remove();
    }
}