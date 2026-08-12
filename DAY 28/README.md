# Day 28 – Real-Time GitHub Search with Debouncing

## 📌 Overview
Day 28 enhances the GitHub Contributor Lookup by introducing **real-time search** using the **Debounce** technique. Instead of clicking a search button, the application automatically fetches GitHub user information after the user stops typing for a short delay. This reduces unnecessary API requests, improves performance, and provides a smoother user experience.

---

## 🚀 Features
- 🔍 Real-time GitHub username search
- ⏳ Debounced API requests (500ms delay)
- 👤 Displays GitHub user profile
- 📂 Shows latest public repositories
- ⚡ Automatic search while typing
- ❌ Handles invalid usernames
- 🚫 Handles GitHub API rate-limit errors
- 🧹 Clears results when the input field is empty
- 📱 Responsive design
- 🌙 Dark mode support

---

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- GitHub REST API

---

## 📂 Project Structure

```
Day-28/
│── index.html
│── style.css
│── app.js
└── README.md
```

---

## ⚙️ How It Works
1. User types a GitHub username.
2. The debounce function waits **500ms** after the last keystroke.
3. A request is sent to the GitHub API.
4. The user's profile information is displayed.
5. The latest repositories are fetched and shown.
6. Invalid usernames and API errors are handled gracefully.

---

## 📸 Expected Output

- Real-time GitHub profile search
- Profile card with avatar, name, bio, and GitHub profile link
- List of recent public repositories
- Error message for invalid usernames
- API rate-limit warning when exceeded
- Profile and repositories disappear when the search field is cleared

---

## 🎯 Learning Outcomes
- Understanding Debouncing
- Optimizing API calls
- Working with asynchronous JavaScript
- Handling API errors
- Improving user experience with real-time search
- DOM manipulation and event handling

