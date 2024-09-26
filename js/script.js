// First function: Calculate difference between today and selected date
function calculate() {
    let selectedDate = new Date(document.getElementById('date').value);
    let currentDate = new Date();
    
    let resultDifferenceElement = document.getElementById('result-difference');
    let difference = selectedDate - currentDate;

    if (difference < 0) {
        resultDifferenceElement.innerHTML = "Selected date is in the past!";
        resultDifferenceElement.style.color = "red"; // Indicate error with color
    } else {
        let daysDiff = Math.ceil(difference / (1000 * 60 * 60 * 24));
        let weeks = Math.floor(daysDiff / 7);
        let days = daysDiff % 7;

        resultDifferenceElement.innerHTML = `Selected date: ${selectedDate.toDateString()}
        <br>Difference: ${weeks} weeks and ${days} days`;

        resultDifferenceElement.style.color = "black";
        resultDifferenceElement.style.transition = "opacity 0.3s ease";
        resultDifferenceElement.style.opacity = "0";
        setTimeout(() => {
            resultDifferenceElement.style.opacity = "1";
        }, 100);
    }

    document.getElementById('date').value = ""; // Clear the input
}

// Second function: Calculate future date after X weeks from the start date
function calculateFutureDate() {
    let startDate = new Date(document.getElementById('startDate').value);
    let weeksToAdd = parseInt(document.getElementById('weeks').value); // Get number of weeks to add
    let resultFutureElement = document.getElementById('result-future');

    if (isNaN(weeksToAdd) || !startDate) {
        resultFutureElement.innerHTML = "Please select a start date and enter a valid number of weeks.";
        resultFutureElement.style.color = "red";
        return;
    }

    // Add the weeks to the start date
    let futureDate = new Date(startDate);
    futureDate.setDate(futureDate.getDate() + weeksToAdd * 7);

    // Display the result
    resultFutureElement.innerHTML = `Start date: ${startDate.toDateString()}
    <br>Future date after ${weeksToAdd} weeks: ${futureDate.toDateString()}`;
    
    resultFutureElement.style.color = "black";
    resultFutureElement.style.transition = "opacity 0.3s ease";
    resultFutureElement.style.opacity = "0";
    setTimeout(() => {
        resultFutureElement.style.opacity = "1";
    }, 100);

    // Clear the input fields
    document.getElementById('startDate').value = "";
    document.getElementById('weeks').value = "";
}
