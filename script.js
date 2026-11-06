/* Flashcard Learning App — static deck */
(function () {
  'use strict';

  const ORIGINAL_DECK = [
    { question: 'What is HTML?', answer: 'HTML (HyperText Markup Language) is the standard markup language used to structure content on the web using tags like headings, paragraphs, and links.', category: 'HTML' },
    { question: 'What is CSS?', answer: 'CSS (Cascading Style Sheets) styles HTML elements — controlling colors, fonts, spacing, and layout to make pages look good.', category: 'CSS' },
    { question: 'What is JavaScript?', answer: 'JavaScript is a programming language that adds interactivity and behavior to web pages, running in the browser.', category: 'JavaScript' },
    { question: 'What is the DOM?', answer: 'The DOM (Document Object Model) is a tree-like representation of an HTML document that JavaScript can read and modify.', category: 'JavaScript' },
    { question: 'What is responsive web design?', answer: 'Responsive web design adapts a layout to different screen sizes using flexible grids, flexible images, and media queries.', category: 'CSS' },
    { question: 'What is an HTML semantic element?', answer: 'A semantic element has a meaningful name (header, nav, article, footer) that describes its content and purpose.', category: 'HTML' },
    { question: 'What is CSS Flexbox?', answer: 'Flexbox is a one-dimensional layout model that distributes space and aligns items in rows or columns.', category: 'CSS' },
    { question: 'What is CSS Grid?', answer: 'CSS Grid is a two-dimensional layout system for creating complex row-and-column layouts.', category: 'CSS' },
    { question: 'What is a JavaScript array?', answer: 'An array is an ordered, zero-indexed collection of values stored in a single variable.', category: 'JavaScript' },
    { question: 'What is an object in JavaScript?', answer: 'An object is a collection of key-value pairs used to store structured data.', category: 'JavaScript' },
    { question: 'What is an event listener?', answer: 'An event listener is a function that waits for a specific event (like a click) and runs code when it happens.', category: 'JavaScript' },
    { question: 'What is the difference between let and const?', answer: 'Both are block-scoped. "let" allows reassignment; "const" cannot be reassigned after declaration.', category: 'JavaScript' },
    { question: 'What is a CSS transition?', answer: 'A transition animates a property change smoothly over a specified duration.', category: 'CSS' },
    { question: 'What is a CSS transform?', answer: 'Transform modifies an element\'s coordinate space — rotate, scale, translate, or skew it.', category: 'CSS' },
    { question: 'What is the difference between localStorage and sessionStorage?', answer: 'localStorage persists data until cleared; sessionStorage is cleared when the tab closes. Both store string key-value pairs.', category: 'Web Storage' }
  ];

  let deck = ORIGINAL_DECK.slice();
  let index = 0;
  let isFlipped = false;

  const flashcard = document.getElementById('flashcard');
  const questionEl = document.getElementById('questionText');
  const answerEl = document.getElementById('answerText');
  const catFront = document.getElementById('categoryFront');
  const catBack = document.getElementById('categoryBack');
  const counterEl = document.getElementById('counterText');
  const percentEl = document.getElementById('percentText');
  const progressBar = document.getElementById('progressBar');
  const progressTrack = document.querySelector('.progress-track');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const shuffleBtn = document.getElementById('shuffleBtn');
  const restartBtn = document.getElementById('restartBtn');
  const completionMsg = document.getElementById('completionMsg');

  function render() {
    const card = deck[index];
    questionEl.textContent = card.question;
    answerEl.textContent = card.answer;
    catFront.textContent = card.category || 'General';
    catBack.textContent = card.category || 'General';

    // reset to question side on (re)render
    isFlipped = false;
    flashcard.classList.remove('flipped');

    const total = deck.length;
    const num = index + 1;
    counterEl.textContent = `Card ${num} of ${total}`;
    const pct = Math.round((num / total) * 100);
    percentEl.textContent = `${pct}%`;
    progressBar.style.width = `${pct}%`;
    progressTrack.setAttribute('aria-valuenow', String(pct));

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === total - 1;

    if (index === total - 1) {
      completionMsg.hidden = false;
    } else {
      completionMsg.hidden = true;
    }
  }

  function flip() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped', isFlipped);
  }

  function goNext() {
    if (index < deck.length - 1) {
      index += 1;
      render();
    }
  }

  function goPrev() {
    if (index > 0) {
      index -= 1;
      render();
    }
  }

  function shuffle() {
    const arr = deck.slice();
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    deck = arr;
    index = 0;
    render();
  }

  function restart() {
    deck = ORIGINAL_DECK.slice();
    index = 0;
    render();
  }

  flashcard.addEventListener('click', flip);
  flashcard.addEventListener('keydown', function (e) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      flip();
    }
  });

  prevBtn.addEventListener('click', goPrev);
  nextBtn.addEventListener('click', goNext);
  shuffleBtn.addEventListener('click', shuffle);
  restartBtn.addEventListener('click', restart);

  document.addEventListener('keydown', function (e) {
    const tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (e.code === 'Space') {
      e.preventDefault();
      flip();
    } else if (e.key === 'ArrowLeft') {
      goPrev();
    } else if (e.key === 'ArrowRight') {
      goNext();
    }
  });

  // Expose for debugging / automated testing
  window.__flashcards = { get deck() { return deck; }, get index() { return index; }, ORIGINAL_DECK };

  render();
})();
