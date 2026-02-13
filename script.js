// Wait until DOM fully loads
document.addEventListener("DOMContentLoaded", () => {

    // --------------------
    // ELEMENT REFERENCES
    // --------------------
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const response = document.getElementById("response");

    const popupCard = document.getElementById("popupCard");
    const closeCard = document.getElementById("closeCard");

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    const slideImg = document.getElementById("slide");
    const slideText = document.getElementById("slideText");

    // --------------------
    // YES BUTTON
    // --------------------
    yesBtn.addEventListener("click", () => {

        response.innerHTML = "Yeheyyy!! ❤️ See you baby sa February 17–18";

        popupCard.style.display = "flex";

        createHeartsBurst();

        // Email launch
        setTimeout(() => {
            const email = "fromyourboyfriend@mwamwa.com";
            const subject = encodeURIComponent("Be my Valentine Date");
            const body = encodeURIComponent(
`Hi Luna,

See you sa February 17–18 po 🥰

I’ve been planning something special for us — dinner date hehe.

Happy monthsary babyyy ❤️  
I really want to make this meet memorable.

Miss you so much 😘
- Luis`
            );

            window.location.href =
                `mailto:${email}?subject=${subject}&body=${body}`;
        }, 600);
    });

    // Close popup
    closeCard.addEventListener("click", () => {
        popupCard.style.display = "none";
    });


    // --------------------
    // NO BUTTON CHAOS 😈
    // --------------------
    function moveNoButton() {
        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;

        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * maxX + "px";
        noBtn.style.top = Math.random() * maxY + "px";
    }

    function playfulNoText() {
        const original = noBtn.textContent;
        noBtn.textContent = "Not so fast 🤣";
        setTimeout(() => noBtn.textContent = original, 900);
    }

    noBtn.addEventListener("mouseover", () => {
        moveNoButton();
        playfulNoText();
    });

    noBtn.addEventListener("touchstart", e => {
        e.preventDefault();
        moveNoButton();
        playfulNoText();
    });


    // --------------------
    // SLIDESHOW
    // --------------------
    const slides = [
        { img: "images/photo1.jpg", text: "Our First Meet - May 30-31, 2025" },
        { img: "images/photo2.jpg", text: "Your Birthday - July 17-18, 2025" },
        { img: "images/photo3.jpg", text: "Met tita first time - Nov 22-23, 2025" },
        { img: "images/photo4.jpg", text: "Tayo na ❤️ - Dec 12-14, 2025" },
        { img: "images/photo5.jpg", text: "Graduation & Month 1 - Jan 14-16, 2026" }
    ];

    let index = 0;

    function updateSlide() {
        slideImg.src = slides[index].img;
        slideText.textContent = slides[index].text;
    }

    window.nextSlide = function () {
        index = (index + 1) % slides.length;
        updateSlide();
    }

    window.prevSlide = function () {
        index = (index - 1 + slides.length) % slides.length;
        updateSlide();
    }

    setInterval(window.nextSlide, 10000);
    updateSlide();


    // --------------------
    // FLOATING HEARTS
    // --------------------
    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }

    setInterval(createHeart, 400);

    function createHeartsBurst() {
        for (let i = 0; i < 25; i++) createHeart();
    }


    // --------------------
    // MUSIC BUTTON (FIXED)
    // --------------------
    musicBtn.addEventListener("click", async () => {
        try {
            if (music.paused) {
                await music.play();
                musicBtn.textContent = "Music ON 🎵";
                musicBtn.classList.add("active");
            } else {
                music.pause();
                musicBtn.textContent = "Music OFF 🔇";
                musicBtn.classList.remove("active");
            }
        } catch (err) {
            console.log("Audio blocked:", err);
            alert("Tap again 🙂 Browser blocked autoplay first time.");
        }
    });

});
