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

    // Random select hole function
    function randomHole() {
        const index = Math.floor(Math.random() * holes.length);
        const selectedHole = holes[index];

        // Prevent same hole being selected consecutively
        if (selectedHole === lastHole) {
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

        // Hide mole after a few seconds
        setTimeout(() => {
            mole.style.display = "none";
        }, Math.random() * 400 + 600);
    }

    // Start game function
    function startGame() {
        score = 0;
        timeRemaining = gameTime;
        scoreDisplay.textContent = "00"; // Reset score
        document.getElementById("timer").textContent = timeRemaining; // Diplay time
        startButton.disabled = true; // Start button disabled during game

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
    }

    // Function to update Timer
    function updateTimer() {
        
        // Update dispay timer
       
        // Change color of timer when reaching 5 seconds or less
        
    }

    // Function to end game
    function endGame() {
        
    }

    // Attach start game to button
  
});
