# 📅 Day 21 – Performance Engineering (Debouncing & Closures)

## 📌 Overview
Day 21 focuses on improving application performance by implementing **Debouncing** using **Higher-Order Functions** and **Closures** in JavaScript.

Instead of executing the search function on every keystroke, the application waits until the user pauses typing for **300 milliseconds** before performing the search. This reduces unnecessary function calls and improves efficiency.

---

## 🚀 Features

- ⚡ Debounced real-time search
- 🧠 Higher-Order Function implementation
- 🔒 JavaScript Closures
- ⏱️ Uses `setTimeout()` and `clearTimeout()`
- 🔍 Optimized project filtering
- 📱 Responsive UI (from previous days)
- 🌙 Dark Mode support
- 💾 Local Storage integration
- 📝 Dynamic initiative rendering
- 📋 Task Tracker
- 💬 Auto-rotating testimonials
- 🪟 Dynamic modal popup

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

---

## 📂 Project Structure

```
Day-21-Performance-Debouncing/
│── index.html
│── style.css
│── script.js
└── README.md
```

---

## 🎯 Learning Objectives

- Understand Performance Engineering
- Learn Higher-Order Functions
- Understand Closures
- Implement Debouncing
- Optimize Event Listeners
- Improve User Experience

---

## ⚙️ How Debouncing Works

1. User starts typing in the search box.
2. Every keystroke clears the previous timer.
3. A new 300ms timer starts.
4. If the user keeps typing, the timer resets.
5. Once the user stops typing for 300ms, the search function executes only once.

---

## 📖 JavaScript Concepts Used

- Higher-Order Functions
- Closures
- Event Listeners
- `setTimeout()`
- `clearTimeout()`
- Array `filter()`
- DOM Manipulation

---



## 📸 Expected Output

- Projects are displayed dynamically.
- Typing in the search box filters initiatives.
- Search executes only after a brief pause (300ms).
- Faster and more efficient user interaction.
- Previous features such as Dark Mode, Task Tracker, Testimonials, Modal Popup, and Form Persistence continue to function correctly.

---

## 🎓 Key Takeaways

- Improved application performance.
- Reduced unnecessary search executions.
- Learned practical use of Closures.
- Built a reusable Debounce utility.
- Enhanced user experience through optimized event handling.

