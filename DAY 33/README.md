📅 Day 33: Network Optimization (Client-Side Caching)

🎯 Problem Statement

Network requests are expensive because they take time, consume bandwidth, and may use API rate limits.

For Day 33, I implemented client-side data caching using the ES6 "Map" object. The application checks whether requested user data already exists in memory before making a new API request.

If the data is already cached, it is returned immediately without making another network request.

🛠️ Tech Stack & Focus Areas

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- Fetch API
- ES6 Map
- In-memory storage
- Network request optimization
- Caching

📌 Key Features

- Created an in-memory cache using "Map".
- Checks the cache before making an API request.
- Returns cached data instantly when available.
- Stores newly fetched user data in the cache.
- Displays ""Serving from cache!"" in the console when cached data is used.
- Reduces unnecessary API/network requests.

⚙️ How It Works

The caching process follows these steps:

1. User searches for a username.
2. The application checks whether the username exists in the cache.
3. If the username exists:
   - Cached data is returned immediately.
   - No new network request is made.
   - ""Serving from cache!"" appears in the console.
4. If the username does not exist:
   - A "fetch()" request is made.
   - The response is converted to JSON.
   - The data is stored in the cache.
   - The data is displayed to the user.

🧠 Concepts Learned

- ES6 "Map"
- "Map.has()"
- "Map.get()"
- "Map.set()"
- In-memory caching
- API request optimization
- Network interception
- Reducing redundant HTTP requests
- Improving application performance

🚀 Testing

To test the caching system:

1. Open the application.
2. Search for a username.
3. Wait for the profile data to load.
4. Search for the same username again.
5. Open the browser console.
6. You should see:

Serving from cache!

The second request should be served from memory instead of making another API request.

🌟 Bonus Challenge: Time-To-Live (TTL)

A cache can become outdated over time. As an optional improvement, cached data can store both the response and a timestamp.

Example:

{
    data: responseData,
    timestamp: Date.now()
}

The application can check the timestamp and remove cached data when it becomes older than a defined period, such as 5 minutes.

📂 Project Structure

Day-33-Data-Caching/
│
├── index.html
├── style.css
├── api.js
├── app.js
└── README.md

✅ Day 33 Outcome

Successfully implemented client-side caching to reduce redundant API requests and improve the application's performance by serving previously fetched data directly from memory.