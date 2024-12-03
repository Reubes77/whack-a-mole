document.addEventListener("DOMContentLoaded", function () {
    const holes = document.querySelectorAll(".hole"); // Select all holes  
    const moles = document.querySelectorAll(".mole"); // Select all moles
    const scoreDisplay = document.getElementById("score"); // Displays score
    const startButton = document.getElementById("start-button"); // Start button
    let score = 0;
    let lastHole;
    let gameInterval;
    let timerInterval;
    let gameTime = 30; // 30 second game duration
    let timeRemaining = gameTime;

    console.log("Game initialized. Ready to start!");

    // Random select hole function
    function randomHole() {
        const index = Math.floor(Math.random() * holes.length);
        const selectedHole = holes[index];
        console.log(`Selected hole index: ${index}`);

        // Prevent same hole being selected consecutively
        if (selectedHole === lastHole) {
            console.log("Same hole selected again. Choosing a different hole.");
            return randomHole();
        }
        lastHole = selectedHole;
        return selectedHole;      
    }

    // Function to make mole pop up in hole
    function showMole() {
        const hole = randomHole();
        const mole = hole.querySelector(".mole");
        mole.style.display = "block";
        console.log("Mole popped up in hole:", hole);

        // Hide mole after a few seconds
        setTimeout(() => {
            mole.style.display = "none";
            console.log("Mole hidden.");
        }, Math.random() * 400 + 600);
    }

    // Start game function
    function startGame() {
        score = 0;
        timeRemaining = gameTime;
        scoreDisplay.textContent = "00"; // Reset score
        document.getElementById("timer").textContent = timeRemaining; // Display initial time
        startButton.disabled = true; // Disable the start button during the game
        
        console.log("Game started!");
        
        gameInterval = setInterval(() => {
            if (timeRemaining > 0) {
                showMole();
            } else {
                clearInterval(gameInterval);
            }
        }, 1000); // Mole appears every second

        timerInterval = setInterval(updateTimer, 1000); // Start timer

        // Attach whack event listener to all moles
        moles.forEach(mole => mole.addEventListener("click", whackMole));
    }

    // Function to whack mole
    function whackMole(event) {
        event.target.style.display = "none"; // Hide mole when clicked
        score++; // Increase score by 1 point
        scoreDisplay.textContent = score.toString().padStart(2, "0"); // Score update display
        console.log(`Mole whacked! Current score: ${score}`);
    }

    // Function to update Timer
    function updateTimer() {
        timeRemaining--;
        const timerElement = document.getElementById("timer");

        // Update timer display
        timerElement.textContent = timeRemaining;
        
        // Change color of timer when timer is 5 seconds or less
        if (timeRemaining <= 5) {
            console.log(`Hurry up! Only ${timeRemaining} seconds left!`);
            timerElement.style.color = "crimson";
        } else {
            timerElement.style.color = ""; // Reset to default color
        }

        if (timeRemaining <= 0) {
            console.log("Time's Up!");
            endGame(); // Game ends when timer reaches zero
        } 
    }

    // Function to end game
    function endGame() {
        clearInterval(gameInterval); // Mole stops popping up
        clearInterval(timerInterval); // Timer stop
        startButton.disabled = false; // Re-enable start button

        // Check if current score is higher than hihgest score stored in LocalStorage
        let highestScore = parseInt(localStorage.getItem("highestScore")) || 0;

        if (score > highestScore) {
            localStorage.setItem("highestScore", score); // Save new high score
            alert(`Game Over! New High Score: ${score}`);
        } else {
            console.log(`Game Over! Your final score is: ${score}`);
            alert(`Game Over! Your final score is: ${score}`); 
        }

        // Update displayed high score
        displayHighScore();        
    }

    // Function display highest score
    function displayHighScore() {
        const highScore = parseInt(localStorage.getItem("highestScore")) || 0;
        document.getElementById("high-score").textContent = highScore;
    }

    // Attach start game to button
    startButton.addEventListener("click", function () {
        console.log("Start button clicked.");
        endGame(); // Stop current game
        startGame(); // Start new game
    });

    // Display high score when page loads
    displayHighScore();
});