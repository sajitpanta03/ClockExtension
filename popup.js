function updateCountdown() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const remainingTime = nextYear - now;
  
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
    updateFlipCard('days', days);
    updateFlipCard('hours', hours);
    updateFlipCard('minutes', minutes);
    updateFlipCard('seconds', seconds);
  }
  
  function updateFlipCard(id, value) {
    const card = document.getElementById(id);
    const front = card.querySelector('.front');
    const back = card.querySelector('.back');
  
    front.innerText = String(value).padStart(2, '0');
    back.innerText = String(value).padStart(2, '0');
  
    if (front.innerText !== back.innerText) {
      card.classList.add('flipped');
      setTimeout(() => {
        card.classList.remove('flipped');
      }, 500);
    }
  }
  
  setInterval(updateCountdown, 1000);


const img = new Image();
img.src = 'bg.jpg'; // Path to your image

img.onload = () => {
    document.body.style.backgroundImage = `url(${img.src})`;
    document.body.style.display = 'flex'; // Show body after image is loaded
    document.body.style.backgroundSize = 'cover'; // Show body after image is loaded

};

// Set the body display to flex immediately to avoid flickering
document.body.style.display = 'flex';
