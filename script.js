<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Will you Be My Valentine?</title>

    <!-- Link CSS -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- Floating hearts container -->
    <div id="hearts-container"></div>

    <!-- Background Music -->
    <audio id="bgMusic" loop>
        <source src="music/love.mp3" type="audio/mpeg">
    </audio>

    <!-- Music Toggle Button -->
    <button id="musicBtn"></button>

    <!-- MAIN QUESTION -->
    <section class="hero">
        <h1>Will you be my Valentine?</h1>

        <div class="buttons">
            <button id="yesBtn">YES 🥰</button>
            <button id="noBtn">NO 😝</button>
        </div>

        <p id="response"></p>
    </section>

    <!-- SLIDESHOW -->
    <section class="slideshow-section">
        <h2>With My Baby 🥰</h2>

        <div class="slideshow">
            <img id="slide" src="images/photo1.jpg" alt="memory">
            <p id="slideText" class="slide-text">Our sweet moment 💖 – Feb 17–18</p>

            <div class="controls">
                <button onclick="prevSlide()">⬅ Prev</button>
                <button onclick="nextSlide()">Next ➡</button>
            </div>
        </div>
    </section>

    <!-- POP-UP CARD -->
    <div id="popupCard" class="popup-card">
        <div class="card-content">
            <h2>💌 Surprise! 💌</h2>
            <p>Hi baby 💖,<br>Excited to see you on February 17–18!<br>Can't wait for our Valentine date ❤️</p>
            <button id="closeCard">Close</button>
        </div>
    </div>

    <!-- Script -->
    <script src="script.js"></script>

    <!-- NO button movement & YES pop-up -->
    <script>
        const noBtn = document.getElementById("noBtn");
        const yesBtn = document.getElementById("yesBtn");
        const response = document.getElementById("response");
        const popupCard = document.getElementById("popupCard");
        const closeCard = document.getElementById("closeCard");

        // NO button movement
        function moveNoButton() {
            const btnWidth = noBtn.offsetWidth;
            const btnHeight = noBtn.offsetHeight;
            const maxX = window.innerWidth - btnWidth - 20;
            const maxY = window.innerHeight - btnHeight - 20;
            const x = Math.random() * maxX;
            const y = Math.random() * maxY;
            noBtn.style.position = 'absolute';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
        }

        function playfulNoText() {
            const originalText = noBtn.textContent;
            noBtn.textContent = "Not so fast! 🤣";
            setTimeout(() => noBtn.textContent = originalText, 1000);
        }

        noBtn.addEventListener("mouseover", () => {
            moveNoButton();
            playfulNoText();
        });

        noBtn.addEventListener("touchstart", (e) => {
            e.preventDefault();
            moveNoButton();
            playfulNoText();
        });

        // YES button: popup + email + hearts
        yesBtn.addEventListener("click", () => {
            response.innerHTML = "Yeheyyy!! ❤️ See you baby sa February 17–18";

            // Show popup card
            popupCard.style.display = "flex";

            // Create heart burst
            createHeartsBurst();

            // Open email draft after short delay
            setTimeout(() => {
                const email = "yourgirlfriend@example.com"; // replace with her email
                const subject = encodeURIComponent("My Valentine Date 😍");
                const body = encodeURIComponent(
                    "Hi baby 💖,\n\nExcited to see you on February 17–18! Can't wait for our Valentine date ❤️\n\nLove, [Your Name]"
                );
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
            }, 500);
        });

        // Close popup card
        closeCard.addEventListener("click", () => {
            popupCard.style.display = "none";
        });
    </script>

</body>
</html>
