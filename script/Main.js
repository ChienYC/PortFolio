var quotes = [
    "Coding Is Fun, Don't Give Up",
    "Learn as much as possible, Never said never!",
    "Explore the Coding like Exploring the World!",
    "Games are fun! Making one is even more fun.",
    "Keep calm and code on.",
    "Error 404: Sleep not found. Must be coding.",
    "In the world of coding, every keystroke is a step towards greatness."
];
let images = [
    '/images/Img1.jpg',
    '/images/Img2.jpg',
    '/images/Img3.jpg'
]

function displayQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.getElementById("lblquote");

    // Fade out
    quoteElement.style.animation = 'none';
    quoteElement.offsetHeight; /* trigger reflow */
    quoteElement.style.animation = null;

    // Change quote
    quoteElement.textContent = quotes[randomIndex];
}

// Update quote every 5 seconds
setInterval(displayQuote, 5000);

window.addEventListener("load",()=>{
    document.querySelector('.loader-wrapper').classList.add("loader--hidden")
    displayQuote();   
});

