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

// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
const header_item=document.querySelectorAll(".navbar-text");

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.style.background = 'rgba(0, 0, 0, 0.5)';
        header.style.boxShadow = '0 5px 20px 0 rgba(0, 191, 255, 0.2),0 5px 20px 0 rgba(255,255,255,0.1)';
        header.style.backdropFilter = 'blur(11px)';
        header.style.webkitBackdropFilter = 'blur(11px)';
        header.style.borderRadius = '10px';
        header.style.border = '1px solid rgba(255, 255, 255, 0.18)';
        
        // for (let i = 0; i <header_item.length; i++) {
        //     header_item[i].style.color="White";
          
        //   }
       
    }
    else {
        header.style.backgroundColor ='rgba(53,69,76, 0)';
        header.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0)';
        header.style.backdropFilter = 'blur(0px)';
        header.style.webkitBackdropFilter = 'blur(0px)';
        header.style.borderRadius = '0px';
        header.style.border = '0px';
        // for (let i = 0; i <header_item.length; i++) {
        //     header_item[i].style.color="Black";
           
        //   }
    }
}

        
