import { fetchWithRetry } from "./utils.js";
const userCache = new Map();

export async function fetchGitHubUser(username) {
    
    const safeUsername = username.toLowerCase();
    const FIVE_MINUTES_MS = 5 * 60 * 1000;

    
    if (userCache.has(safeUsername)) {
        const cachedItem = userCache.get(safeUsername);

        
        if (Date.now() - cachedItem.timestamp > FIVE_MINUTES_MS) {
            console.log(`⏳ Cache expired for [${safeUsername}]. Deleting stale data...`);
            userCache.delete(safeUsername);
        } else {
            console.log(`⚡ Serving [${safeUsername}] from local cache!`);
            return cachedItem.data; 
        }
    }

    console.log(`📡 Fetching [${safeUsername}] from external server...`);
    const response = await fetchWithRetry(`https://api.github.com/users/${safeUsername}`);
 
    if (response.status === 403 || response.status === 429) {
        throw new Error("API Rate Limit exceeded. Please wait a moment.");
    } else if (response.status === 404) {
        throw new Error("Developer not found.");
    } else if (!response.ok) {
        throw new Error("Something went wrong.");
    }
 
    const data = await response.json();

    
    userCache.set(safeUsername, {
        data: data,
        timestamp: Date.now()
    });

    return data;
}
 
export async function fetchGitHubRepos(username) {
 
    const response = await fetchWithRetry(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
    );
 
    if (!response.ok) {
        throw new Error("Could not fetch repositories.");
    }
 
    return response.json();
 
}
 
export async function submitInitiative(dataPayload) {
 
    const response = await fetchWithRetry('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(dataPayload)
    });
 
    if (response.status !== 201) {
        throw new Error(`Server rejected the payload. Expected 201, got Status: ${response.status}`);
    }
 
    return response.json();
 
}
 
export async function updateInitiative(id) {
 
    const response = await fetchWithRetry(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                title: "Updated Proposal [UPDATED]",
                body: "Proposal updated successfully.",
                userId: 1
            })
        }
    );
 
    if (!response.ok) {
        throw new Error("Failed to update proposal.");
    }
 
    return response.json();
 
}
 
export async function deleteInitiative(id) {
 
    const response = await fetchWithRetry(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        { method: "DELETE" }
    );
 
    if (!response.ok) {
        throw new Error("Failed to delete proposal.");
    }
 
    return response.json();
 
}
 
export async function fetchPosts(page, limit) {
 
    const response = await fetchWithRetry(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
 
    if (!response.ok) {
        throw new Error("Failed to fetch data.");
    }
 
    return response.json();
 
}

export async function secureDeleteResource(targetId) {

    
    const token = localStorage.getItem("auth_token");

    
    if (!token) {
        throw new Error("Access Denied: No authentication token found.");
    }

    const response = await fetchWithRetry(
        `https://jsonplaceholder.typicode.com/posts/${targetId}`,
        {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token
            }
        }
    );

    if (response.status === 401) {
        throw new Error("Unauthorized: Session expired");
    }

    if (!response.ok) {
        throw new Error("Failed to delete resource.");
    }

    return response;
}