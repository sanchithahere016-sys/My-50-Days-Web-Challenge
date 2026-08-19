# 📅 Day 34: Network Resilience (Retries & Exponential Backoff)

## 🎯 Problem Statement

A simple `try/catch` block handles errors gracefully, but it gives up immediately. If a user is on a mobile device and their connection drops for a millisecond, the app used to throw a complete failure state. Modern, resilient platforms don't give up on the first failure — they silently try again. Today I engineered an automatic retry system with **Exponential Backoff**, so the platform fights to get the data before showing the user an error.

## 🛠 Tech Stack & Focus Areas

- **Languages:** Vanilla JavaScript (ES6+)
- **Core Concepts:** `for` loops in async functions, `Promise` delays, exponential math, network reliability
- **Goal:** Engineer a wrapper function that automatically retries failed network requests with increasing time delays

## ✅ What I Built

### 1. `fetchWithRetry` (in `utils.js`)

A reusable async utility that wraps `fetch()` with automatic retry logic:

```javascript
export async function fetchWithRetry(url, options = {}, retries = 3, backoff = 500) {
    if (!navigator.onLine) {
        throw new Error("No internet connection detected");
    }

    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);

            if (response.ok) {
                return response;
            }

            if (response.status >= 400 && response.status < 500) {
                return response; // client errors won't fix themselves, don't retry
            }

            throw new Error(`Server error: ${response.status}`);

        } catch (error) {
            const isLastAttempt = i === retries - 1;

            if (isLastAttempt) throw error;

            console.log(`⚠️ Attempt ${i + 1} failed. Retrying in ${backoff}ms...`);
            await new Promise(resolve => setTimeout(resolve, backoff));
            backoff *= 2;
        }
    }
}
```

### 2. Wired into `api.js`

`fetchGitHubUser` now calls `fetchWithRetry(url)` instead of a raw `fetch(url)`, so any transient network failure automatically retries before surfacing an error to the user.

### 3. Bonus: Offline detection

Before attempting a single fetch, the function checks `navigator.onLine`. If the device is completely offline, it fails fast with a clear message instead of wasting time on doomed retry attempts.

## 🧠 Design Decision: Not All Failures Are Equal

The spec's literal retry logic retries on *any* non-ok response — but a `404 Not Found` will never succeed no matter how many times you retry it. I split the failure handling:

| Status Type | Behavior |
|---|---|
| **2xx (success)** | Return immediately |
| **4xx (client error — e.g. 404, 403)** | Return immediately, no retry (retrying won't fix a bad username) |
| **5xx (server error) / network failure** | Retry with exponential backoff |

This avoids wasting up to 3.5 seconds retrying a request that was never going to succeed, while still protecting against real transient issues (dropped connections, flaky servers).

## ⏱ Exponential Backoff Timing

| Attempt | Delay Before Retry |
|---|---|
| 1st fail | 500ms |
| 2nd fail | 1000ms |
| 3rd fail | 2000ms (final attempt, then throws) |

## 🧪 How I Tested It

- Used Chrome DevTools **Network → Offline** throttling to simulate a dropped connection mid-request
- Hit [httpstat.us/500](https://httpstat.us/500) directly to force a real 5xx and observe the retry/backoff timing in the console
- Searched a nonexistent GitHub username to confirm 404s return instantly instead of retrying

## 📸 Expected Console Output (on failure → recovery)

```
📡 Fetching [octocat] from external server...
⚠️ Attempt 1 failed. Retrying in 500ms...
⚠️ Attempt 2 failed. Retrying in 1000ms...
❌ All 3 attempts failed for https://api.github.com/users/octocat
```