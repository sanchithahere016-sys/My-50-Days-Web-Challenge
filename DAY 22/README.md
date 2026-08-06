# 🚀 Day 22 – Scroll Animations with Intersection Observer API

## 📌 Overview
On Day 22 of the **Synexus 50 Days Web Development Challenge**, I implemented smooth scroll-based animations using the **Intersection Observer API**. Sections and components remain hidden when the page loads and animate into view as the user scrolls, creating a more engaging and modern user experience.

---

## ✨ Features
- 🌟 Smooth fade-in and slide-up animations
- 👀 Detects when elements enter the viewport
- ⚡ Efficient implementation using the Intersection Observer API
- 🎯 Animates multiple sections dynamically
- 📱 Works seamlessly across desktop and mobile devices

---

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Intersection Observer API

---

## 📂 Implementation

### HTML
Added the `hidden` class to sections and cards that should animate on scroll.

### CSS
Created animation classes using opacity, transform, and transition properties.

```css
.hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
}

.show {
    opacity: 1;
    transform: translateY(0);
}
```

### JavaScript
Used the **Intersection Observer API** to observe hidden elements and automatically add the `.show` class when they enter the viewport.

---

## 🎯 Learning Outcomes
- Learned how the Intersection Observer API works.
- Understood how to observe multiple DOM elements efficiently.
- Applied CSS transitions to create smooth animations.
- Improved website interactivity while maintaining good performance.

---

## 💻 Expected Output
- Elements are initially hidden.
- As users scroll through the page, sections smoothly fade in and slide upward.
- The website provides a more interactive and visually appealing scrolling experience.

---

## 📸 Preview
As you scroll down the page:
- Hero Section appears.
- About Us fades into view.
- Initiatives animate on scroll.
- Community Leadership cards appear smoothly.
- Testimonials, Membership Form, Task Tracker, and Footer animate as they enter the viewport.

