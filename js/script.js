function calculate() {
    let selectedDate = new Date(document.getElementById('date').value);
    let currentDate = new Date();
    
    // Calculate the difference in milliseconds
    let difference = selectedDate - currentDate;

    let resultElement = document.getElementById('result');

    if (difference < 0) {
        resultElement.innerHTML = "Selected date is in the past!";
        resultElement.style.color = "red"; // Indicate error with color
    } else {
        // Convert the difference to weeks and days
        let daysDiff = Math.ceil(difference / (1000 * 60 * 60 * 24));
        let weeks = Math.floor(daysDiff / 7);
        let days = daysDiff % 7;

        // Display the result
        resultElement.innerHTML = `Selected date: ${selectedDate.toDateString()}
        <br>
        Difference: ${weeks} weeks and ${days} days`;

        resultElement.style.color = "black"; // Reset error color if previously set
        resultElement.style.transition = "opacity 0.3s ease"; // Fade-in effect

        // Add a fade-in animation to the result
        resultElement.style.opacity = "0";
        setTimeout(() => {
            resultElement.style.opacity = "1";
        }, 100); // Wait 100 milliseconds before fading in
    }

    // Clear the input field (always happens at the end, regardless of outcome)
    document.getElementById('date').value = "";
}