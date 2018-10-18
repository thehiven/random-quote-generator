'use strict'
// FSJS - Random Quote Generator
// Author - Vlad 'hiven' Nadtoka

// array of objects; each object is a different quote
let quotes = [
  {
    quote: 'Talk is cheap. Show me the code.',
    source: 'Linus Torvalds',
    citation: '',
    year: -1
  },
  {
    quote: 'Programs must be written for people to read, and only incidentally for machines to execute.',
    source: 'Harold Abelson',
    citation: 'Structure and Interpretation of Computer Programs',
    year: -1
  },
  {
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
    source: 'John Woods',
    citation: '',
    year: -1
  },
  {
    quote: 'Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.',
    source: 'Bill Gates',
    citation: '',
    year: -1
  },
  {
    quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    source: 'Patrick McKenzie',
    citation: 'Twitter',
    year: 2016
  },
  {
    quote: 'Truth can only be found in one place: the code.',
    source: 'Robert C. Martin',
    citation: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    year: -1
  },
];

let delay = 5000;
let timer;

// function returns random quote object from the provided array
function getRandomQuote(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// returns random rgb color
function getRandomColor() {
  return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
}

// sets random background color to body and button 
function setRandomColor() {
  let randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  document.getElementById('loadQuote').style.backgroundColor = randomColor;
}

// function creates html string and and prints it to the quote box
function printQuote() {
  clearTimeout(timer); // clear previous timeout in case quout is generated using the button

  let selectedQuote = getRandomQuote(quotes);
  let html = '';
  html += '<p class="quote">' + selectedQuote.quote + '</p>';
  html += '<p class="source">' + selectedQuote.source;

  // if there is a citation add it to the string
  if (selectedQuote.citation !== '') {
    html += '<span class="citation">' + selectedQuote.citation + '</span>';
  }

  // if there is a year add it to the string
  if (selectedQuote.year !== -1) {
    html += '<span class="year">' + selectedQuote.year + '</span>';
  }
  html += '</p>';

  document.getElementById('quote-box').innerHTML = html;
  setRandomColor();
  timer = setTimeout(updateQuote, delay);
}

// used to auto update quotes
function updateQuote() {
  printQuote();
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// function will show new quote and change background after every specified delay
window.onload = function() {
  timer = setTimeout(updateQuote, delay);
};
