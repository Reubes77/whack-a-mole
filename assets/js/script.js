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
   
    }

    // Function to whack mole
    function whackMole(event) {

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
