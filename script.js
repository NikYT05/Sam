const heartContainer = document.getElementById('heart-container');
const message = document.getElementById('message');
const names = document.getElementById('names');
const personalizeButton = document.getElementById('personalize-button');
const yourNameInput = document.getElementById('your-name');
const valentineNameInput = document.getElementById('valentine-name');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    heart.style.animationDelay = Math.random() * 2 + 's'; // Random start delay
    heartContainer.appendChild(heart);

    heart.addEventListener('animationend', () => {
      heart.remove(); // Remove heart after animation
    });
}


setInterval(createHeart, 200); // Create hearts periodically

personalizeButton.addEventListener('click', () => {
    const yourName = yourNameInput.value;
    const valentineName = valentineNameInput.value;

    let personalizedMessage = "Wishing you a day filled with love and happiness!";

    if (yourName && valentineName) {
      personalizedMessage = `Happy Valentine's Day, ${valentineName}!  Wishing you a day filled with love and happiness from ${yourName}!`;
    } else if (valentineName) {
      personalizedMessage = `Happy Valentine's Day, ${valentineName}! Wishing you a day filled with love and happiness!`;
    }

    names.textContent = personalizedMessage;
});