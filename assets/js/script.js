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
        document.getElementById("timer").textContent = timeRemaining; // Diplay time
        startButton.disabled = true; // Start button disabled during game

        console.log("Game started!");
        gameInterval = setInterval(showMole, 1000); // Show mole at 1 second intervals
        timerInterval = setInterval(updateTimer, 1000); // Start timer

        // Add event listener to mole images for whacking
        moles.forEach(mole => {
            mole.addEventListener("click", whackMole);
        });   
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
        document.getElementById("timer").textContent = timeRemaining;
        
        if (timeRemaining <= 5) {
            console.log(`Hurry up! Only ${timeRemaining} seconds left!`);
        }

        if (timeRemaining <=0) {
            console.log("Time's Up!");
            endGame(); // Game ends when timer reaches zero
        } 
    }

    // Function to end game
    function endGame() {
        clearInterval(gameInterval); // Mole stops popping up
        clearInterval(timerInterval); // Timer stop
        startButton.disabled = false; // Re-enable start button

        console.log(`Game Over! Your final score is: ${score}`);
        alert(`Game Over! Your final score is: ${score}`);        
    }

    // Attach start game to button
    startButton.addEventListener("click", function () {
        console.log("Start button clicked.");
        endGame(); // Stop current game
        startGame(); // Start new game
    });
});

