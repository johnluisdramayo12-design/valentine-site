// --------------------
// YES / NO BUTTON LOGIC
// --------------------

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

// Popup card elements
const popupCard = document.getElementById("popupCard");
const closeCard = document.getElementById("closeCard");

// YES button click event
yesBtn.addEventListener("click", () => {
    // Show cute response
    response.innerHTML = "Yeheyyy!! ❤️ See you baby sa February 17–18";

    // Show popup card
    popupCard.style.display = "flex";

    // Create heart burst
    createHeartsBurst();

    // Open email draft after short delay
    setTimeout(() => {
        const email = "fromyourboyfriend@mwamwa.com"; // <-- replace with her email
        const subject = encodeURIComponent("Be my Valentine Date");
        const body = encodeURIComponent(
            "Hi Luna,\n\nSee you sa February 17-18 po 😍 I’ve been planning something special for us… a dinner date hehe🥰 \n I really wanna spend time with you this month of February, kasi it’s our monthsary too, Happy monthsary, baby! 🥰\n I really wanna spend time with you this month of February, kasi it’s our monthsary too, Happy monthsary, baby! 🥰\n I hope you can say yes, kasi I really wanna make this day super special for us. Can’t wait to see you po and spend some quality time together 😘 \n\nI miss you Luna, -Luis"
        );
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }, 500);
});

// Close popup card
closeCard.addEventListener("click", () => {
    popupCard.style.display = "none";
});

// --------------------
// NO BUTTON LOGIC
// --------------------

function moveNoButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const maxX = window.innerWidth - btnWidth - 20; // padding
    const maxY = window.innerHeight - btnHeight - 20;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

function playfulNoText() {
    const originalText = noBtn.textContent;
    noBtn.textContent = "Not so fast! 🤣";
    setTimeout(() => (noBtn.textContent = originalText), 1000);
}

// Desktop hover event
noBtn.addEventListener("mouseover", () => {
    moveNoButton();
    playfulNoText();
});

// Mobile touch event
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // prevent scrolling on tap
    moveNoButton();
    playfulNoText();
});

// --------------------
// SLIDESHOW WITH TEXT
// --------------------

const slides = [
    { img: "images/photo1.jpg", text: "Our sweet moment 💖 – Feb 17–18" },
    { img: "images/photo2.jpg", text: "Love and laughter 😊 – Feb 17–18" },
    { img: "images/photo3.jpg", text: "Memories together 🌸 – Feb 17–18" },
    { img: "images/photo4.jpg", text: "Just us two 💕 – Feb 17–18" },
    { img: "images/photo5.jpg", text: "Forever in my heart ❤️ – Feb 17–18" }
];

let index = 0;
const slideImg = document.getElementById("slide");
const slideText = document.getElementById("slideText");

function updateSlide() {
    slideImg.src = slides[index].img;
    slideText.textContent = slides[index].text;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
}

// Auto-play slideshow
setInterval(nextSlide, 3000);

// Initialize first slide
updateSlide();

// --------------------
// FLOATING HEARTS
// --------------------

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

// Continuous floating hearts
setInterval(createHeart, 400);

// Burst hearts on YES
function createHeartsBurst() {
    for (let i = 0; i < 20; i++) createHeart();
}

// --------------------
// MUSIC TOGGLE BUTTON
// --------------------

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.textContent = "Music OFF 🔇";

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




