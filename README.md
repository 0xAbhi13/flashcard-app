<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:f97316&height=170&section=header&text=Flashcard%20Learning%20App&fontSize=36&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Abhishek%20Jadhav%20%7C%20Veda%20Technology%20Internship%20Day%2028&descAlignY=62&descSize=17" alt="Flashcard Learning App header" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=2563eb&center=true&vCenter=true&width=780&lines=Veda+Technology+Internship+%E2%80%A2+Day+28;HTML5+%E2%80%A2+CSS3+%E2%80%A2+Vanilla+JavaScript;3D+Flip+%E2%80%A2+Shuffle+%E2%80%A2+Progress+Tracking" alt="Typing introduction" />

  <p><b>Blue/Orange Palette &#183; Responsive &#183; 3D Flip &#183; No Frameworks</b></p>

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![No Frameworks](https://img.shields.io/badge/No_Frameworks-2563eb?style=for-the-badge)
  ![Static Deck](https://img.shields.io/badge/Static_Deck-f97316?style=for-the-badge)
  ![Responsive](https://img.shields.io/badge/Responsive-10b981?style=for-the-badge)

</div>

---


## Features

- **15 predefined flashcards** covering HTML, CSS, JavaScript, and web concepts, stored as an array of objects.
- **3D flip animation** using `perspective`, `transform-style: preserve-3d`, and `backface-visibility`.
- **Click to flip** the card between question and answer; click again to flip back.
- **Previous / Next navigation** with disabled states at the boundaries.
- **Card resets to the question side** when navigating.
- **Progress indicator** showing "Card X of Y" plus an accurate percentage progress bar.
- **Shuffle Deck** randomizes card order.
- **Restart** restores the original deck order.
- **Completion message** when the final card is reached.
- **Keyboard support**: Spacebar flips, Left Arrow previous, Right Arrow next.
- **Subtle hover effects** on interactive elements.
- **Responsive** layout for mobile, tablet, and desktop down to 320px.
- **No console errors.**

## Technologies

| Technology | Use |
|------------|-----|
| HTML5 | Semantic `main`, `section`, `button`, ARIA attributes (`index.html`) |
| CSS3 | Custom properties, 3D transforms, Flexbox, transitions, media queries (`style.css`) |
| JavaScript (ES6+) | Static deck array, navigation, shuffle, progress, keyboard handlers (`script.js`) |
| SVG | Favicon (`assets/favicon.svg`) |
| No Frameworks | Zero dependencies |
| ARIA | Accessible labels, progressbar role, live region |

## Project Structure

```text
flashcard-app/
├── index.html          # Semantic structure and flashcard markup
├── style.css           # Responsive styling and 3D animation
├── script.js           # Static deck, logic, interactions
├── README.md           # This file
├── Veda_Technology_Task_28_Project_Report.docx  # Project report
└── assets/
    └── favicon.svg     # Flashcard favicon
```

## How to Run

1. Open the `flashcard-app` folder.
2. Double-click `index.html` — opens in Chrome / Edge / Firefox.
3. Or serve it: `python -m http.server 8000` → http://localhost:8000
4. Or VS Code **Live Server**: right-click `index.html` → **Open with Live Server**.

No install, no build, no dependencies.

Quick syntax check:

```powershell
node --check script.js
```

## Flashcard Topics

| # | Question | Category |
|---|----------|----------|
| 1 | What is HTML? | HTML |
| 2 | What is CSS? | CSS |
| 3 | What is JavaScript? | JavaScript |
| 4 | What is the DOM? | JavaScript |
| 5 | What is responsive web design? | CSS |
| 6 | What is an HTML semantic element? | HTML |
| 7 | What is CSS Flexbox? | CSS |
| 8 | What is CSS Grid? | CSS |
| 9 | What is a JavaScript array? | JavaScript |
| 10 | What is an object in JavaScript? | JavaScript |
| 11 | What is an event listener? | JavaScript |
| 12 | What is the difference between `let` and `const`? | JavaScript |
| 13 | What is a CSS transition? | CSS |
| 14 | What is a CSS transform? | CSS |
| 15 | What is the difference between localStorage and sessionStorage? | Web Storage |

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Spacebar | Flip the card |
| Left Arrow | Previous card |
| Right Arrow | Next card |

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:f97316&height=120&section=footer" alt="Footer wave" />
  <p><sub>Veda Technology Internship — Day 28: Flashcard Learning App (Static Deck) — HTML5 · CSS3 · Vanilla JavaScript</sub></p>
</div>
