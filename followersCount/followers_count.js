let count = 0; // init count to 0

function increaseCount() {
    count++; // increment the count by 1
    displayCount(); // display the count
    checkCountValue(); // check count value and display messages
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // display the count in HTML
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Insta post gained 10 followers! Congrats!")
    } else if (count === 20) {
        alert("Your Insta post gained 20 followers! Yay!")
    }
}