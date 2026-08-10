# 📅 Day 26: Asynchronous JavaScript & External APIs

## 📌 Overview
On Day 26, I implemented a **Community Contributor Lookup** feature that fetches real-time developer information from the **GitHub REST API** using modern asynchronous JavaScript. This project demonstrates how to work with external APIs, handle asynchronous operations using `async/await`, and dynamically update the DOM.

---

## 🚀 Features
- Search for any GitHub user by username.
- Fetch live data using the GitHub REST API.
- Display:
  - GitHub Avatar
  - Name
  - Bio
  - Profile Link
- Loading message while data is being fetched.
- Error handling for invalid usernames or network failures.
- Responsive and dark mode compatible design.

---

## 🛠️ Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Fetch API
- Async / Await
- GitHub REST API

---

## 📚 Key Concepts
- Asynchronous JavaScript
- Promises
- `async` and `await`
- Fetch API
- JSON Parsing
- `try...catch` Error Handling
- Dynamic DOM Manipulation

---

## 📂 Project Structure

```
Day-26-Async-Fetch-API/
│── index.html
│── style.css
│── app.js
└── README.md
```

---

## ▶️ How to Run

1. Clone this repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Navigate to the **GitHub Lookup** page.
5. Enter a GitHub username (e.g., `octocat`).
6. Click **Lookup** to view the profile.

---

## 📸 Expected Output

- A search input to enter a GitHub username.
- A **Lookup** button.
- Displays:
  - Profile Picture
  - Name
  - Bio
  - GitHub Profile Link
- Shows an error message if the username is invalid.

---

## 🎯 Learning Outcomes

By completing this project, I learned how to:

- Consume data from an external REST API.
- Use `fetch()` to make HTTP requests.
- Handle asynchronous operations with `async/await`.
- Parse JSON responses.
- Handle API errors gracefully using `try...catch`.
- Dynamically render fetched data into the webpage.

