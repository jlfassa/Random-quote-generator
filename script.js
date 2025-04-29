// Array of quotes
const quotes = [
    // ... (your existing quotes array remains the same) ...
    // Ensure you have a good number and variety here.
    {
        quote: "Life is what happens while you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela"
    },
    {
        quote: "Imagination is more important than knowledge.",
        author: "Albert Einstein"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Herman Cain"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Don't count the days, make the days count.",
        author: "Muhammad Ali"
    },
    {
        quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for.",
        author: "Barack Obama"
    },
    {
        quote: "Creativity is intelligence having fun.",
        author: "Albert Einstein"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    }
    // ... Add more quotes from your original list
];

// DOM Elements
const quoteTextElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
// Select the wrapper for quote and its marks for smoother animation
const quoteContentElement = document.querySelector('.quote-content');

// Function to get a random quote object
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display a quote with animation
function displayQuote() {
    const randomQuote = getRandomQuote();

    // Add class to trigger fade-out animation (defined in CSS)
    quoteContentElement.classList.add('quote-fade-out');
    authorElement.classList.add('quote-fade-out');

    // Wait for the fade-out transition to complete (match CSS duration)
    // --quote-animation-duration is 0.3s (300ms)
    setTimeout(() => {
        // Update the text content
        quoteTextElement.textContent = randomQuote.quote;
        authorElement.textContent = `- ${randomQuote.author}`; // Add a dash before author

        // Remove the fade-out class (this will implicitly trigger fade-in
        // if the default state has opacity: 1 and transform: translateY(0))
        quoteContentElement.classList.remove('quote-fade-out');
        authorElement.classList.remove('quote-fade-out');
    }, 300); // This duration should match --quote-animation-duration
}

// Event Listener for the "New Quote" button
newQuoteButton.addEventListener('click', displayQuote);

// Display an initial quote when the page loads
displayQuote();