document.addEventListener("DOMContentLoaded", function () {
    const holes = document.querySelectorAll(".hole"); // Select all holes
    const scoreDisplay = document.getElementById("score"); // Displays score
    const highScoreDisplay = document.getElementById("high-score"); // High score display
    const timerDisplay = document.getElementById("timer"); // Timer display
    const startButton = document.getElementById("start-button"); // Start button
    const messageElement = document.getElementById("game-over-message"); // Game over message
    const levelDisplay = document.getElementById("level"); // Displays level
    let score = 0;
    let gameInterval;
    let gameTime = 30; // 30 second game duration
    let timeRemaining;
    let currentLevel = 1; // Start at level 1
    let moleSpeed = 1000; // Initial mole speed
    let isGameActive = false; // Tracks if game is running

    console.log("Game initialized. Ready to start!");

    // Display high score and level when page loads
    displayHighScore();
    updateLevelDisplay();

    // Random select hole function
    function randomHole() {
        const index = Math.floor(Math.random() * holes.length);
        return holes[index];
    }

    // Function to make mole pop up in hole
    function showMole() {
        if (!isGameActive) return; // Stop mole pop up if game over
        
        const hole = randomHole();
        const mole = hole.querySelector(".mole");
        mole.style.display = "block";
        console.log("Mole popped up in hole:", hole);

        // Hide mole after a few seconds
        setTimeout(() => {
            if (isGameActive) mole.style.display = "none"; // Mole hides only in active game
            console.log("Mole hidden.");
        }, Math.random() * 400 + 600);
    }

    // Function to hide all moles when game over
    function resetMoles() {
        holes.forEach(hole => {
            const mole = hole.querySelector(".mole");
            mole.style.display = "none"; // Hides visible moles
        });
    }

    // Start game function
    function startGame() {
        score = 0;
        timeRemaining = gameTime;
        currentLevel = 1; // Reset to level 1
        moleSpeed = 1000; // Reset speed of mole
        isGameActive = true; // Mark game active
        scoreDisplay.textContent = "00"; // Reset score
        timerDisplay.textContent = timeRemaining; // Reset timer
        messageElement.style.display = "none"; // Hide game over message
        startButton.disabled = true; // Disable the start button during the game
        updateLevelDisplay();

        resetMoles(); // Hide all moles from previous game

        console.log("Game started!");

        gameInterval = setInterval(() => {
            showMole(); // Show mole continuously
        }, moleSpeed); 

        const timerInterval = setInterval(() => {
            updateTimer(timerInterval);
        }, 1000); // Start timer
    }

    // Function to update Timer
    function updateTimer(timerInterval) {
        timeRemaining--;
        timerDisplay.textContent = timeRemaining;

        // Change color of timer when timer is 5 seconds or less
        if (timeRemaining <= 5) {
            console.log(`Hurry up! Only ${timeRemaining} seconds left!`);
            timerDisplay.style.color = "crimson";
        } else {
            timerDisplay.style.color = ""; // Reset to default color
        }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval); // Stop timer
            clearInterval(gameInterval); // Stop mole pop up
            isGameActive = false; // Mark game inactive
            endGame(); // End game
        }
    }

    // Function to whack mole
    holes.forEach(hole => {
        const mole = hole.querySelector(".mole");
        mole.addEventListener("click", function () {
            if (!isGameActive) return; // Ignore clicks if game over

            mole.style.display = "none"; // Hide the mole when clicked
            score++; // Increase score
            scoreDisplay.textContent = score.toString().padStart(2, "0"); // Update score display

            // Difficulty increase after every 10 points
            if (score % 10 === 0) {
                increaseDifficulty();
            }
        });
    });

    // Function to increase difficulty
    function increaseDifficulty() {
        currentLevel++;
        moleSpeed = Math.max(300, moleSpeed - 100); // Decrease speed of mole
        clearInterval(gameInterval); // Clear current interval
        gameInterval = setInterval(showMole, moleSpeed); // Start new interval with updated speed
        updateLevelDisplay();
        console.log(`Level Up! Current level ${currentLevel}. Mole speed: ${moleSpeed}ms`);
    }

    // Function to end game
    function endGame() {
        startButton.disabled = false; // Re-enable start button

        // Check if current score is higher than the highest score stored in LocalStorage
        let highestScore = parseInt(localStorage.getItem("highestScore")) || 0;

        if (score > highestScore) {
            localStorage.setItem("highestScore", score); // Save new high score
            messageElement.textContent = `Game Over! New High Score: ${score}`;
        } else {
            console.log(`Game Over! Your final score is: ${score}`);
            messageElement.textContent = `Game Over! Your final score is: ${score}`;
        }

        messageElement.style.display = "block"; // Show game over message
        displayHighScore(); // Update displayed high score
    }

    // Function to display the highest score
    function displayHighScore() {
        const highScore = parseInt(localStorage.getItem("highestScore")) || 0;
        highScoreDisplay.textContent = highScore.toString().padStart(2, "0");
    }

    // Function to update Level Display
    function updateLevelDisplay() {
        levelDisplay.textContent = `Level: ${currentLevel}`;
    }

    // Attach start game to button
    startButton.addEventListener("click", function () {
        console.log("Start button clicked.");
        startGame(); // Start new game
    });
});
