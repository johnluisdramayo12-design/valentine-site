// --------------------
// YES / NO BUTTON LOGIC
// --------------------

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

// Sweet message when YES clicked
yesBtn.addEventListener("click", () => {
    response.innerHTML = "Yay!! ❤️ I can't wait!";
    createHeartsBurst();
});

// Move NO button randomly on hover
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100; // random x offset
    const y = Math.random() * 200 - 100; // random y offset
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// --------------------
// SLIDESHOW
// --------------------

const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

// Show next image
function nextSlide() {
    index = (index + 1) % images.length;
    slide.src = images[index];
}

// Show previous image
function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    slide.src = images[index];
}

// Auto-play slideshow every 3 seconds
setInterval(nextSlide, 3000);

// --------------------
// FLOATING HEARTS
// --------------------

// Create a single heart
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Random horizontal position and size
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    document.body.appendChild(heart);

    // Remove heart after 6 seconds
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Continuous floating hearts
setInterval(createHeart, 400);

// Burst of hearts on YES click
function createHeartsBurst() {
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
}

// --------------------
// MUSIC TOGGLE BUTTON
// --------------------

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Initialize button state
musicBtn.textContent = "Music OFF 🔇";

// Toggle music ON/OFF and update button style
musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.classList.add("active");
        musicBtn.textContent = "Music ON 🎵";
    } else {
        music.pause();
        musicBtn.classList.remove("active");
        musicBtn.textContent = "Music OFF 🔇";
    }
});
