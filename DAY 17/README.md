# Day 17 - Theme Engineering & Persistent State

## Overview
Day 17 introduces Dark Mode functionality using CSS variables and JavaScript. The selected theme is saved in the browser using Local Storage, allowing the user's preference to persist even after refreshing the page.

## Features
- 🌙 Dark Mode / ☀️ Light Mode toggle
- CSS custom properties (variables) for theme management
- Theme preference stored using Local Storage
- Automatic theme restoration on page reload
- Responsive navigation and layout
- Dynamic project rendering and search
- Membership form with validation and draft auto-save

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API

## Learning Outcomes
- Using CSS variables for theming
- Toggling classes with JavaScript
- Saving data with `localStorage.setItem()`
- Retrieving data with `localStorage.getItem()`
- Creating a persistent user interface

## Project Structure
```
Day-17/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run
1. Clone the repository.
2. Open the `Day-17` folder.
3. Open `index.html` in your browser.
4. Click the theme toggle button to switch between Light and Dark modes.
5. Refresh the page to see the selected theme persist.

## Output
- Light Mode is displayed by default.
- Clicking the theme toggle switches to Dark Mode.
- The selected theme is saved using Local Storage.
- Refreshing the page restores the previously selected theme automatically.

