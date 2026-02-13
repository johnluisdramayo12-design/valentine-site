// --------------------
// YES / NO BUTTON LOGIC
// --------------------

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

// Sweet message when YES clicked
yesBtn.onclick = () => {
    response.innerHTML = "Yay!! ❤️ I can't wait!";
    createHeartsBurst();
};

// Move NO button randomly
noBtn.onmouseover = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
};

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

// Next image
function nextSlide(){
    index = (index + 1) % images.length;
    slide.src = images[index];
}

// Previous image
function prevSlide(){
    index = (index - 1 + images.length) % images.length;
    slide.src = images[index];
}

// Auto play every 3 sec
setInterval(nextSlide, 3000);


// --------------------
// FLOATING HEARTS
// --------------------

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Continuous hearts
setInterval(createHeart, 400);


// Burst effect on YES
function createHeartsBurst(){
    for(let i=0;i<20;i++){
        createHeart();
    }
}


// --------------------
// MUSIC CONTROL
// --------------------

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = () => {
    if(music.paused){
        music.play();
        musicBtn.textContent = "Pause Music ⏸";
    }else{
        music.pause();
        musicBtn.textContent = "Play Music 🎵";
    }
};
