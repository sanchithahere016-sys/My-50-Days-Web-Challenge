# Day 25 – Phase 2 Capstone: Synexus Core Engine

## 📌 Overview
Day 25 marks the Phase 2 Capstone of the 50 Days Web Development Challenge. Instead of introducing a new feature, this milestone focuses on refactoring and integrating all previously developed JavaScript modules into a single application engine.

The project uses a Single Page Application (SPA) architecture where navigation is handled dynamically without reloading the page. Each feature is initialized only when required, making the application more modular, organized, and maintainable.

---

## 🚀 Features

- Dynamic SPA Routing
- Dark Mode with Local Storage Persistence
- Responsive Mobile Navigation
- Hero Section Interaction
- Search with Debounce Function
- Dynamic Initiative Cards
- Project Details Modal
- Membership Form Validation
- Auto-Save Form Draft using Local Storage
- Testimonials Carousel
- Task Tracker
- Scroll Animations using Intersection Observer
- Drag and Drop Kanban Board
- Modular JavaScript Initialization

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API
- History API
- Intersection Observer API
- Drag and Drop API

---

## 📂 Project Structure

```
Day-25-Phase-2-Capstone/
│
├── index.html
├── style.css
├── app.js
├── README.md
└── check.json
```

---

## ⚙️ How It Works

### 1. Core Engine
The application starts from a single `initApp()` function after the DOM has fully loaded.

### 2. SPA Router
The router dynamically replaces the content inside the application container based on the current URL.

### 3. Route Initialization
Each page initializes only the features it requires.

Example:

- Home → Hero + Scroll Animations
- Initiatives → Search + Modal + Observer
- Team → Testimonials + Observer
- Join → Form Validation + Draft Saving
- Kanban → Drag & Drop Board

### 4. Global Modules

The following modules run throughout the application:

- Theme Toggle
- Mobile Navigation
- SPA Navigation
- Browser History Handling

---

## 📚 Concepts Practiced

- Modular JavaScript
- Function-Based Architecture
- Single Page Applications
- DOM Manipulation
- Event Delegation
- History API
- Local Storage
- Debouncing
- Form Validation
- Intersection Observer
- Drag and Drop
- Responsive Web Design

---

## 🎯 Learning Outcome

Through this capstone, I learned how to organize multiple JavaScript modules into a clean application architecture. By integrating routing, reusable initialization functions, and modular components, I built a scalable Single Page Application that is easier to maintain and extend.

---

## 📸 Expected Output

- Responsive Engineering Community Website
- Smooth SPA Navigation
- Persistent Dark Mode
- Interactive Hero Section
- Searchable Initiatives
- Dynamic Modal Window
- Membership Form with Validation
- Auto-Saved Drafts
- Animated Testimonials
- Task Tracker
- Scroll Reveal Animations
- Drag-and-Drop Kanban Board



