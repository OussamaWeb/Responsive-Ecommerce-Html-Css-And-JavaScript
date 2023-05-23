window.addEventListener('load', () => {
    let srcOne = localStorage.getItem('srcOne');
    let srcTwo = localStorage.getItem('srcTwo');
    document.querySelector('.details-img').src = srcOne;
    document.querySelector('.details-small-default').src = srcOne;
    document.querySelector('.details-small-hover').src = srcTwo;
})
let textarea = document.querySelector('.textarea'),
    namePerson = document.querySelector('.name');
let addCommentsBtn = document.getElementById('add-comments');
let reviewsContainer = document.querySelector('.reviews-container');
let arraySingle;
if (localStorage.arraySingle != null) {
    arraySingle = JSON.parse(localStorage.arraySingle);
} else {
    arraySingle = [];
}
addCommentsBtn.addEventListener('click', () => {
    let objectSingle = {
        nameSingle: namePerson.value,
        textSingle: textarea.value,
    };
    arraySingle.push(objectSingle);
    localStorage.setItem('arraySingle', JSON.stringify(arraySingle));
    let newSingle = '';
    for (let i = 0; i < arraySingle.length; i++) {
        newSingle += `
                <div class="review-single">
                    <div>
                        <img src="ecommerce website/assets/img/avatar-3.jpg" class="review-image">
                        <h4 class="review-title">${arraySingle[i].nameSingle}</h4>
                    </div>
                    <div class="review-data">
                        <div class="product-rating">
                            <img src="star-line.svg" class="icons stars">
                            <img src="star-line.svg" class="icons stars">
                            <img src="star-line.svg" class="icons stars">
                            <img src="star-line.svg" class="icons stars">
                            <img src="star-line.svg" class="icons stars">
                        </div>
                        <p class="review-description">
                            ${arraySingle[i].textSingle}
                        </p>
                        <span class="review-date">December 4,2023 At 3:00 pm </span>
                    </div>
                </div>`;
    };
    reviewsContainer.innerHTML = newSingle;
    clearData();
});

function clearData() {
    namePerson.value = '';
    textarea.value = '';
};